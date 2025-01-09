import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PROFILE from "../../../../assets/images/Icons/profile.png";
import ARROWLEFT from "../../../../assets/images/Icons/leftArrow.png";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const ScreenHeader = ({ HeaderText,onPress, showBackButton = true, showProfile=true }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      <View style={styles.backBtnView}>
        {showBackButton && (
          <TouchableOpacity style={styles.backBtn} onPress={onPress}>
            <Image source={ARROWLEFT} style={styles.backIconImg} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{HeaderText}</Text>
      </View>
      {
        showProfile?(<TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image source={PROFILE} style={styles.profileImage} />
        </TouchableOpacity>):(null)
      }
    </View>
  );
};

export default ScreenHeader;
