import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import ScreenHeader from "../../Components/ScreenHeader";
import PLANBANNER from "../../../../assets/images/Banners/planBanner.png";
import { useNavigation } from "@react-navigation/native";

const WorkOutList = ({ route }) => {
  const { exercise } = route.params;
  console.log("Exercise Data:", exercise);
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(0); // Default to the first day (Sunday)

  // Days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Handle selecting a day
  const handleSelectDay = (index) => {
    setSelectedDay(index);
  };

  return (
    <View style={styles.safeView}>
      <ScreenHeader
        HeaderText="Workout Plan"
        showBackButton={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        {/* Days of the Week */}
        <ScrollView horizontal>
          <View style={styles.daysContainer}>
            {daysOfWeek.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  selectedDay === index && styles.selectedDay, // Highlight selected day
                ]}
                onPress={() => handleSelectDay(index)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDay === index && styles.selectedDayText, // Change text color if selected
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Display exercises for the selected day */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listView}>
            {exercise?.days[selectedDay]?.exercises?.map(
              (exerciseItem, index) => (
                <View key={index} style={styles.listDetails}>
                  <View style={styles.planDetails}>
                    <Text style={styles.planTitle}>{exerciseItem.name}</Text>
                    <View style={styles.planTypes}>
                      <View style={styles.planTypesBox}>
                        <Text style={styles.planDesc}>Type</Text>
                        <Text>{exerciseItem.type}</Text>
                      </View>
                      <View style={styles.planTypesBox}>
                        <Text style={styles.planDesc}>Reps</Text>
                        <Text>{exerciseItem.reps}</Text>
                      </View>
                      <View style={styles.planTypesBox}>
                        <Text style={styles.planDesc}>Sets</Text>
                        <Text>{exerciseItem.sets}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkOutList;
