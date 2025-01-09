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
  listView: {
    marginTop: 10,
  },
  listDetails: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGrey,
    marginBottom: 10,
    // backgroundColor: Colors.lightGrey,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.darkGrey,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.darkGrey,
  },
  planDesc: {
    fontSize: 16,
    color: Colors.darkGrey,
    marginBottom: 15,
  },
  exercisesList: {
    marginBottom: 15,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.darkGrey,
  },
  exerciseReps: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  exerciseSets: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  closeButton: {
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  modalCloseView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10
  }
});

export default styles;
