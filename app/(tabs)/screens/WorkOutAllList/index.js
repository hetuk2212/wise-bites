import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import ScreenHeader from "../../Components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const WorkOutAllList = () => {
  const navigation = useNavigation();

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkouts = async () => {
    const workoutsCollection = collection(db, "workouts");
    try {
      const workoutSnapshot = await getDocs(workoutsCollection);
      const workoutList = workoutSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setWorkouts(workoutList);
    } catch (error) {
      console.error("Error fetching workouts: ", error);
      Alert.alert("Error", "There was an issue fetching the workouts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Function to open the modal and show plan details
  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlan(null);
  };
  const handleRedirect = (exercise) => {
    navigation.navigate("WorkOutList", { exercise });
    setModalVisible(false);
  };
  return (
    <View style={styles.safeView}>
      <ScreenHeader
        HeaderText="Workout All Plans"
        showBackButton={true}
        showProfile={false}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        {/* List of workout plans */}
        <ScrollView style={styles.listView}>
          {workouts.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              style={styles.listDetails}
              onPress={() => openModal(plan)}
            >
              <Text style={styles.planTitle}>{plan.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Modal for showing plan details */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{selectedPlan?.title} Weeks</Text>
              <Text style={styles.planDesc}>{selectedPlan?.description}</Text>

              {/* Display exercises for the selected plan */}
              <ScrollView style={styles.exercisesList}>
                {selectedPlan?.weeks?.map((exercise, index) => (
                  <TouchableOpacity
                    style={styles.listDetails}
                    onPress={() => handleRedirect(exercise)}
                  >
                    <Text style={styles.planTitle}>Week {index + 1}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default WorkOutAllList;
