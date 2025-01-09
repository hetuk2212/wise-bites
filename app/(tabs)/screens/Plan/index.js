import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import PROFILE from "../../../../assets/images/Icons/profile.png";
import WORKOUTPLAN from "../../../../assets/images/Banners/workoutPlan.jpg";
import DIEATPLAN from "../../../../assets/images/Banners/dieatPlan.png";
import ScreenHeader from "../../Components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";

const Plan = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <ScreenHeader HeaderText="Find your plan" showBackButton={false} />

      <View style={styles.bannerView}>
        <TouchableOpacity style={styles.bannerDetails} onPress={()=>{
          navigation.navigate("WorkOutAllList")
        }}>
          <Text style={styles.workoutTile}>Workout Plan</Text>
          <Image source={WORKOUTPLAN} style={styles.bannerImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bannerView} onPress={()=>{
          navigation.navigate("NutritionAllList")
        }}>
          <Text style={styles.workoutTile}>Nutrition Plan</Text>
          <Image source={DIEATPLAN} style={styles.bannerImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Plan;
