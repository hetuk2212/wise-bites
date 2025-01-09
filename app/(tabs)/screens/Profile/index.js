import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AuthTitle from "../../Components/AuthTitle";
import RIGHTARROW from "../../../../assets/images/Icons/leftArrow.png";
import PROFILE from "../../../../assets/images/Icons/profile.png";
import styles from "./style";
import InputBox from "../../Components/InputBox";
import SubmitButton from "../../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fetchUserData = async (userId) => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);

    try {
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserData(data);
        // Set values to the states
        setFullName(data.fullName);
        setEmail(data.email);
        setAge(data.age.toString());
        setWeight(data.weight.toString());
        setHeight(data.height.toString());
      } else {
        console.log("No such document!");
        Alert.alert("Error", "No user data found in Firestore.");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      Alert.alert("Error", "There was an issue fetching the user data.");
    }
  };

  const updateProfile = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    const db = getFirestore();
    const userRef = doc(db, "users", auth.currentUser.uid);

    try {
      await setDoc(userRef, {
        fullName,
        email,
        age: parseInt(age),
        weight: parseInt(weight),
        height: parseInt(height),
        // Add other fields if necessary
      }, { merge: true });

      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      Alert.alert("Error", "There was an issue updating the profile.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("User is logged in: ", currentUser);
        await fetchUserData(currentUser.uid);
      } else {
        Alert.alert("Error", "User is not logged in.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.safeView}>
      <AuthTitle backImg={RIGHTARROW} authTitle="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={PROFILE} style={styles.profileIcon} />

          {/* Render InputBoxes with existing values */}
          <InputBox label="Full Name" value={fullName} onChangeText={setFullName} />
          <InputBox label="Email" value={email} onChangeText={setEmail} />
          <InputBox label="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
          <InputBox label="Weight" value={weight} onChangeText={setWeight} keyboardType="numeric" />
          <InputBox label="Height" value={height} onChangeText={setHeight} keyboardType="numeric" />
          <InputBox label="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <InputBox label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

          <SubmitButton buttonText="Update Profile" onPress={updateProfile} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
