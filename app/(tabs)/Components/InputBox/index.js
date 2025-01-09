import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../../../assets/colors";

const InputBox = ({ label, value, onChangeText, isPassword, editable = true }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? Colors.purple : "#ccc",
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && isSecureEntry}
          keyboardType={isPassword ? "default" : "email-address"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIconContainer}
          >
            <Icon
              name={isSecureEntry ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  eyeIconContainer: {
    paddingLeft: 10,
  },
});

export default InputBox;
