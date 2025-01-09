import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../../Components/ScreenHeader";
import PLANBANNER from "../../../../assets/images/Banners/planBanner.png";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const NutritionList = ({ route }) => {
  const { exercise } = route.params; // Destructure to get the 'exercise' data
  console.log("Exercise Data:", exercise); // Debugging the exercise data
  const navigation = useNavigation();

  // Extract day and meals from the exercise prop
  const { day, meals } = exercise;

  return (
    <View style={styles.safeView}>
      <ScreenHeader
        HeaderText="Nutrition List"
        showBackButton={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>

        {/* Display the workout day */}
        <Text style={styles.dayTitle}>{day}</Text>

        {/* Scrollable meal list */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listView}>
            {Object.entries(meals).map(([mealKey, mealValue], index) => (
              <View key={index} style={styles.listDetails}>
                <View style={styles.planDetails}>
                  <Text style={styles.planTitle}>{mealKey.toUpperCase()}</Text>
                  <View style={styles.planTypes}>
                    <View style={styles.planTypesBox}>
                      <Text style={styles.planDesc}>{mealValue}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NutritionList;
