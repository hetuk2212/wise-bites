import React, { useState } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import { auth } from "../../../firebase"; // import Firebase Authentication
import { signInWithEmailAndPassword } from "firebase/auth"; // import sign-in method
import InputBox from "../../../Components/InputBox/";
import SUBMITBUTTON from "../../../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
      console.log("User Logged In: ", userCredential.user);
      Alert.alert("Success", "Login successful!");
      navigation.navigate("HomeTabs"); // Navigate to the home screen after login
    } catch (error) {
      console.error("Error during login: ", error.message);
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.inputForm}>
        <Text style={styles.welcomeText}>Hi! Welcome</Text>
        <Text style={styles.welcomeTextDesc}>Healthy Choices For Young Minds!</Text>
        <View style={styles.inputView}>
          <InputBox label="Email" value={email} onChangeText={setEmail} />
          <InputBox label="Password" isPassword={true} value={password} onChangeText={setPassword} />
        </View>
      </View>
      <Text style={styles.signupText}>
        Not a user?{" "}
        <Text
          style={styles.signupTextPulpur}
          onPress={() => navigation.navigate("Register")}
        >
          Sign up
        </Text>
      </Text>
      <SUBMITBUTTON buttonText="Sign In" onPress={()=>{
        //  navigation.navigate("HomeTabs");
        handleLogin()
      }} />
    </View>
  );
};

export default Login;
