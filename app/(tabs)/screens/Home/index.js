import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import PROFILE from "../../../../assets/images/Icons/profile.png";
import ARROWUP from "../../../../assets/images/Icons/arrowUp.png";
import ScreenHeader from "../../Components/ScreenHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null); 


  const fetchUserData = async (userId) => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);

    try {
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setUserData(userDoc.data()); 
        console.log("Fetched user data: ", userDoc.data());
      } else {
        console.log("No such document!");
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
        console.log("User is logged in: ", currentUser);
        await fetchUserData(currentUser.uid); 
      } else {
        setLoading(false); 
        Alert.alert("Error", "User is not logged in.");
      }
    });

    return () => unsubscribe(); 
  }, []);
  const calculatePosition = (bmiValue) => {
    const minBmi = 5.7;
    const maxBmi = 6.5;

    if (bmiValue < minBmi) return 0;

    if (bmiValue > maxBmi) return 100;

    const percentage = (bmiValue - minBmi) / (maxBmi - minBmi);
    return percentage * 100;
  };

  const getRangeLabel = (value) => {
    if (value <= 6.4) {
      return "Normal Range";
    } else if (value <= 7.5) {
      return "Moderate Range";
    } else {
      return "High Range";
    }
  };

  const markerPosition = calculatePosition(userData?.HBA1CRang);
  const rangeLabel = getRangeLabel(userData?.HBA1CRang || 1);

  return (
    <View style={styles.container}>
      <ScreenHeader HeaderText="Dashboard" showBackButton={false} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.testView}>
          <View style={styles.testBox}>
            <View style={styles.testBoxTitle}>
              <Text style={styles.tesTitleName}>HbA1c Test</Text>
              <TouchableOpacity style={styles.testTypeView}>
                <Text style={styles.testType}>
                  {userData?.HBA1CRang <= 5.7
                    ? "Normal"
                    : userData?.HBA1CRang >= 5.7 && userData?.HBA1CRang <= 6.4
                    ? "Prediabetes"
                    : userData?.HBA1CRang >= 6.6
                    ? "Diabetes"
                    : "Invalid Value"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rangeType}>
              <Text style={styles.rangeTypeText}>Normal</Text>
              <Text style={styles.rangeTypeText}>Prediabetes</Text>
              <Text style={styles.rangeTypeText}>Diabetes</Text>
            </View>
            <View style={styles.testRangeView}>
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#21CE69",
                    width: "33.33%",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#D48639",
                    width: "33.33%",
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#EF3E41",
                    width: "33.33%",
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
              >
                <Image source={ARROWUP} />
                <Text style={styles.count}>{userData?.HBA1CRang}</Text>
              </View>
            </View>
          </View>
          <View style={styles.testBox}>
            <View style={styles.testBoxTitle}>
              <Text style={styles.tesTitleName}>Liver Functional Test</Text>
              <TouchableOpacity style={styles.testTypeView}>
                <Text style={styles.testType}>Normal</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rangeType}>
              <Text style={styles.rangeTypeText}>Low</Text>
              <Text style={styles.rangeTypeText}>Normal</Text>
              <Text style={styles.rangeTypeText}>High</Text>
            </View>
            <View style={styles.testRangeView}>
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#21CE69",
                    width: "33.33%",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#D48639",
                    width: "33.33%",
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#EF3E41",
                    width: "33.33%",
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
              >
                <Image source={ARROWUP} />
                <Text style={styles.count}>{userData?.HBA1CRang}</Text>
              </View>
            </View>
          </View>
          <View style={styles.testBox}>
            <View style={styles.testBoxTitle}>
              <Text style={styles.tesTitleName}>Thyroid Functional Test</Text>
              <TouchableOpacity style={styles.testTypeView}>
                <Text style={styles.testType}>Normal</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rangeType}>
              <Text style={styles.rangeTypeText}>Low</Text>
              <Text style={styles.rangeTypeText}>Normal</Text>
              <Text style={styles.rangeTypeText}>High</Text>
            </View>
            <View style={styles.testRangeView}>
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#21CE69",
                    width: "33.33%",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#D48639",
                    width: "33.33%",
                  },
                ]}
              />
              <View
                style={[
                  styles.testRange,
                  {
                    backgroundColor: "#EF3E41",
                    width: "33.33%",
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
              >
                <Image source={ARROWUP} />
                <Text style={styles.count}>{userData?.HBA1CRang}</Text>
              </View>
            </View>
          </View>
          <View style={styles.reportView}>
            <Text style={styles.reportText}>Conclusion</Text>
            <Text style={styles.reportType}>Your reports are normal.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
