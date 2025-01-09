import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/colors";

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  container: {
    marginTop: 10,
  },
  dropDownView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  listView: {
    marginTop: 10,
  },
  listDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: Colors.darkGrey,
    marginBottom: 10,
  },
  bannerImg: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  planDetails: {
    width: 150,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  planTypes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  planTypesBox: {
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    borderColor: Colors.darkGrey,
  },
  planDesc: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
  weekDayBtn: {
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: Colors.lightGrey,
    marginRight: 8,
    marginBottom: 10,
  },
  weekDayView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    flexWrap: "wrap", // Ensure days wrap if space is not enough
  },
  weekDay: {
    color: Colors.darkGrey,
    fontSize: 16,
    fontWeight: "500",
  },
  // Week container for better presentation of weeks
  weekContainer: {
    marginTop: 20,
  },
  weekItem: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  dayItem: {
    width: "48%",
    marginRight: "2%",
    marginBottom: 15,
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 10,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: Colors.darkGrey,
  },
  exerciseItem: {
    marginTop: 10,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "600",
  },
  exerciseReps: {
    fontSize: 14,
    marginTop: 5,
  },
  exerciseSets: {
    fontSize: 14,
    marginTop: 5,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    alignItems: "center",
  },
  selectedDay: {
    backgroundColor: "#007bff",
  },
  dayText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: "bold",
  },
  selectedDayText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  dayTitle:{
    fontSize:24,
    fontWeight:"bold",
    marginTop:10
  }
});

export default styles;
