import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import InputBox from "../../../Components/InputBox/";
import SUBMITBUTTON from "../../../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import AuthTitle from "../../../Components/AuthTitle";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import LEFTARROW from "../../../../../assets/images/Icons/leftArrow.png";
import DropDownPicker from "react-native-dropdown-picker"; // Importing dropdown picker
import { RadioButton } from "react-native-paper";
import { Colors } from "../../../../../assets/colors/index";
import SubmitButton from "../../../Components/SubmitButton";

const Register = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState(null);
  const [HBA1CRang, setHBA1CRang] = useState(null);
  const [liverType, setLiverType] = useState(null);
  const [liverSimple, setLiverSimple] = useState(null);
  const [liverFasting, setLiverFasting] = useState(null);
  const [liverGender, setLiverGender] = useState(null);
  const [liverAgeGroup, setLiverAgeGroup] = useState(null);
  const [liverReportingTime, setLiverReportingTime] = useState(null);
  const [thyroidType1, setThyroidType1] = useState(null);
  const [thyroidType2, setThyroidType2] = useState(null);
  const [thyroidType3, setThyroidType3] = useState(null);
  const [cholesterol, setCholesterol] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [process1, setProcess1] = useState(true);
  const [process2, setProcess2] = useState(false);
  const [process3, setProcess3] = useState(false);
  const [bmi, setBmi] = useState(null);
  const bmiData = [
    { bmi: "Below 18.5", status: "Underweight" },
    { bmi: "18.5 - 24.9", status: "Normal weight" },
    { bmi: "25 - 29.9", status: "Overweight" },
    { bmi: "30 - 35", status: "Obese" },
    { bmi: "Over 35", status: "Morbid obesity" },
  ];
  const calculateMarkerPosition = (bmiValue) => {
    const minBmi = 18.5;
    const maxBmi = 35;

    if (bmiValue < minBmi) return 0;

    if (bmiValue > maxBmi) return 100;

    const percentage = (bmiValue - minBmi) / (maxBmi - minBmi);
    return percentage * 100;
  };

  const markerPosition = calculateMarkerPosition(bmi);
  const handleProcess1 = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    // Check if email already exists in the database
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email.trim().toLowerCase())
    );
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      Alert.alert(
        "Error",
        "An account with this email address already exists."
      );
      return;
    }

    // Proceed to Step 2
    setProcess1(false);
    setProcess2(true);
  };

  const handleProcess2 = () => {
    if (!age || !weight || !height || !gender) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }
    if (isNaN(parseInt(age || heightValue <= 0))) {
      Alert.alert("Error", "Age must be a valid number greater than 0.");
      return;
    }
    if (isNaN(parseInt(weight || heightValue <= 0))) {
      Alert.alert("Error", "Weight must be a valid number greater than 0");
      return;
    }

    if (weight && height) {
      // Convert height from cm to meters
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);

      // Calculate BMI using the formula: BMI = weight (kg) / height (m)^2
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      alert("Please enter both weight and height.");
    }
  };

  const handleProcess2Next = () => {
    setProcess2(false);
    setProcess3(true);
  };

  // State to control dropdown visibility
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const handleSubmit = async () => {
    // Validation for all fields
    if (
      !HBA1CRang ||
      !liverType ||
      !liverSimple ||
      !liverFasting ||
      !liverGender ||
      !liverAgeGroup ||
      !liverReportingTime ||
      !cholesterol ||
      !thyroidType1 ||
      !thyroidType2 ||
      !thyroidType3
    ) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    // Firebase Authentication: Create user
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password // Use the provided password
      );

      const user = userCredential.user;
      console.log("User created:", user);

      // Firestore: Add user data after successful auth
      const userData = {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        age: parseInt(age),
        weight: parseInt(weight),
        height: parseInt(height),
        gender,
        HBA1CRang: HBA1CRang.trim(),
        liverType: liverType.trim(),
        liverSimple: liverSimple.trim(),
        liverFasting: liverFasting.trim(),
        liverGender: liverGender.trim(),
        liverAgeGroup: liverAgeGroup.trim(),
        liverReportingTime: liverReportingTime.trim(),
        cholesterol,
        thyroidType1: thyroidType1.trim(),
        thyroidType2: thyroidType2.trim(),
        thyroidType3: thyroidType3.trim(),
      };

      // Save user data to Firestore, using user.uid as the document ID
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, userData);

      console.log("User data saved to Firestore");

      // Alert and redirect after successful registration
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during registration:", error.message);
      if (error.code === "auth/email-already-in-use") {
        Alert.alert(
          "Error",
          "Email is already in use. Please try with a different email."
        );
      } else if (error.code === "auth/weak-password") {
        Alert.alert(
          "Error",
          "Password is too weak. Please choose a stronger password."
        );
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <View style={styles.safeView}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {process1 && (
        <AuthTitle
          authTitle="Sign Up"
          backImg={LEFTARROW}
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
      {process2 && (
        <AuthTitle
          authTitle="Your BMI"
          backImg={LEFTARROW}
          onPress={() => {
            setProcess2(false);
            setProcess1(true);
          }}
        />
      )}
      {process3 && (
        <AuthTitle
          authTitle="Laboratory Test"
          backImg={LEFTARROW}
          onPress={() => {
            setProcess3(false);
            setProcess2(true);
          }}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {process1 && (
          <View style={styles.container}>
            <View style={styles.inputForm}>
              <View style={styles.inputView}>
                <Text style={styles.createAccount}>Create Account</Text>
                <InputBox
                  label="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
                />
                <InputBox label="Email" value={email} onChangeText={setEmail} />

                <InputBox
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  isPassword={true}
                />
                <InputBox
                  label="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  isPassword={true}
                />
              </View>
            </View>
            <SUBMITBUTTON buttonText="Next" onPress={handleProcess1} />
          </View>
        )}
        {process2 && (
          <View style={styles.container}>
            <View style={styles.inputForm}>
              <View style={styles.inputView}>
                <Text style={styles.createAccount}>Calculate BMI</Text>

                <DropDownPicker
                  open={open}
                  value={gender}
                  items={items}
                  setOpen={setOpen}
                  setValue={setGender}
                  setItems={setItems}
                  placeholder="Select Gender"
                  containerStyle={{ height: 50 }}
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 10,
                  }}
                  // dropDownStyle={{ borderColor: '#ccc' }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    width: "48%",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  84
                  <InputBox
                    label="Weight (kg)"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                  />
                  <InputBox
                    label="Height (cm)"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "48%",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <InputBox
                    label="Age"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity
                    onPress={handleProcess2}
                    style={styles.calculateBtn}
                  >
                    <Text style={styles.calculateBtnText}>Calculate</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.bmiBox}>
                <Text style={styles.bmiBoxTitle}>Your BMI</Text>
                <View style={styles.bmiBoxBtn}>
                  <Text style={styles.bmiBoxValue}>{bmi || "00.0"}</Text>
                </View>
                <View style={styles.testRangeView}>
                  <View
                    style={[
                      styles.testRange,
                      {
                        backgroundColor: "#FFD700",
                        width: "25%",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.testRange,
                      {
                        backgroundColor: "#21CE69",
                        width: "25%",
                        // borderTopLeftRadius: 10,
                        // borderBottomLeftRadius: 10,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.testRange,
                      {
                        backgroundColor: "#D48639",
                        width: "25%",
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.testRange,
                      {
                        backgroundColor: "#EF3E41",
                        width: "25%",
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.marker,
                      {
                        left: `${markerPosition}%`,
                      },
                    ]}
                  ></View>
                </View>
                <View style={styles.rangeType}>
                  <Text style={styles.rangeTypeText}>Underweight</Text>
                  <Text style={styles.rangeTypeText}>Normal</Text>
                  <Text style={styles.rangeTypeText}>Overweight</Text>
                  <Text style={styles.rangeTypeText}>Obesity</Text>
                </View>
              </View>
              {bmi ? (
                <TouchableOpacity
                  onPress={handleProcess2Next}
                  style={styles.nextBtn}
                >
                  <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
              ) : null}
              <View style={styles.tableHeaderView}>
                <View style={styles.tableHeader}>
                  <Text style={styles.headerText}>BMI</Text>
                  <Text style={styles.headerText}>Weight Status</Text>
                </View>

                {bmiData.map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.rowText}>{item.bmi}</Text>
                    <Text style={styles.rowText}>{item.status}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
        {process3 && (
          <View style={styles.container}>
            <View style={styles.inputForm}>
              <View style={styles.inputView}>
                <Text style={styles.createAccount3}>HBA1C Test</Text>
                <InputBox
                  label="Enter HbA1C Rang"
                  value={HBA1CRang}
                  onChangeText={setHBA1CRang}
                />
                <Text style={[styles.createAccount3, { marginTop: 10 }]}>
                  Liver Functional Test
                </Text>
                <InputBox
                  label="Type "
                  value={liverType}
                  onChangeText={setLiverType}
                />
                <InputBox
                  label="Sample Type"
                  value={liverSimple}
                  onChangeText={setLiverSimple}
                />
                <InputBox
                  label="Fasting"
                  value={liverFasting}
                  onChangeText={setLiverFasting}
                />
                <InputBox
                  label="Gender"
                  value={liverGender}
                  onChangeText={setLiverGender}
                />
                <InputBox
                  label="Age-Group"
                  value={liverAgeGroup}
                  onChangeText={setLiverAgeGroup}
                />
                <InputBox
                  label="Reporting Time"
                  value={liverReportingTime}
                  onChangeText={setLiverReportingTime}
                />
                <Text style={[styles.createAccount3, { marginTop: 10 }]}>
                  Choose a Cholestral
                </Text>
                <View style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    style={styles.radioButtonBorder}
                    onPress={() => setCholesterol("bad")}
                  >
                    <View
                      style={[
                        styles.selectedRadio,
                        {
                          backgroundColor:
                            cholesterol === "bad"
                              ? Colors.pulpur
                              : Colors.white,
                        },
                      ]}
                    ></View>
                  </TouchableOpacity>
                  <Text style={styles.radioLabel}>
                    Low-Density Lipoprotein (Bad)
                  </Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    style={styles.radioButtonBorder}
                    onPress={() => setCholesterol("good")}
                  >
                    <View
                      style={[
                        styles.selectedRadio,
                        {
                          backgroundColor:
                            cholesterol === "good"
                              ? Colors.pulpur
                              : Colors.white,
                        },
                      ]}
                    ></View>
                  </TouchableOpacity>
                  <Text style={styles.radioLabel}>
                    High-Density Lipoprotein (Good)
                  </Text>
                </View>

                <Text style={[styles.createAccount3, { marginTop: 10 }]}>
                  Thyroid Function Test
                </Text>
                <InputBox
                  label="Enter the Thyroidroine"
                  value={thyroidType1}
                  onChangeText={setThyroidType1}
                />
                <InputBox
                  label="Enter the Thyroxine"
                  value={thyroidType2}
                  onChangeText={setThyroidType2}
                />
                <InputBox
                  label="Enter the THS"
                  value={thyroidType3}
                  onChangeText={setThyroidType3}
                />
              </View>
            </View>
            <SUBMITBUTTON buttonText="Next" onPress={handleSubmit} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Register;
