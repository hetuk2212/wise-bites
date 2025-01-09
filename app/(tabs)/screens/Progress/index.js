import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenHeader from "../../Components/ScreenHeader";
import styles from "./style";
import InputBox from "../../Components/InputBox";
import SubmitButton from "../../Components/SubmitButton";
import { auth } from "../../firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Progress = () => {
  const [bmi, setBmi] = useState(null);
  const [userData, setUserData] = useState(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (userData?.weight && userData?.height) {
      // Convert height from cm to meters
      const heightInMeters = parseFloat(userData?.height) / 100;
      const weightInKg = parseFloat(userData?.weight);

      // Calculate BMI using the formula: BMI = weight (kg) / height (m)^2
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      alert("Please enter both weight and height.");
    }
  },[userData])

  const calculateMarkerPosition = (bmiValue) => {
    const minBmi = 18.5;
    const maxBmi = 35;

    if (bmiValue < minBmi) return 0;

    if (bmiValue > maxBmi) return 100;

    const percentage = (bmiValue - minBmi) / (maxBmi - minBmi);
    return percentage * 100;
  };

  const markerPosition = calculateMarkerPosition(bmi);

  const fetchUserData = async (userId) => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);

    try {
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setUserData(userDoc.data());
      } else {
        Alert.alert("Error", "No user data found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      Alert.alert("Error", "There was an issue fetching the user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await fetchUserData(currentUser.uid);
      } else {
        setLoading(false);
        Alert.alert("Error", "User is not logged in.");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUpdate = async () => {
    if (weight && height) {
      const db = getFirestore();
      const userRef = doc(db, "users", auth.currentUser.uid);

      try {
        await setDoc(
          userRef,
          {
            weight: parseFloat(weight),
            height: parseFloat(height),
          },
          { merge: true }
        );

        await fetchUserData(auth.currentUser.uid);

        Alert.alert("Success", "Your progress has been updated.");

        
        setHeight(null);
        setWeight(null);
      } catch (error) {
        console.error("Error updating user data: ", error);
        Alert.alert("Error", "There was an issue updating your data.");
      }
    } else {
      alert("Please enter both weight and height.");
    }
  };

  return (
    <View style={styles.safeView}>
      <ScreenHeader HeaderText="Track Your Progress" showBackButton={true} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.weightContainer}>
          <View style={styles.weightBox}>
            <Text style={styles.subHeaderText}>Your Start Weight:</Text>
            <Text style={styles.weightText}>{userData?.weight} kg</Text>
          </View>
          <View style={styles.weightBox}>
            <Text style={styles.subHeaderText}>Your Start Height:</Text>
            <Text style={styles.weightText}>{userData?.height} cm</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Weight (kg)</Text>
          <InputBox
            label="Enter your current weight"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Height (cm)</Text>
          <InputBox
            label="Enter your current height"
            value={height}
            onChangeText={setHeight}
          />
        </View>
        <SubmitButton buttonText="Update" onPress={handleUpdate} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Track your progress over time to stay motivated!
          </Text>
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
      </ScrollView>
    </View>
  );
};

export default Progress;
