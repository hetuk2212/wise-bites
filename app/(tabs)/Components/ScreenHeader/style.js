import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/colors";
const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  backBtnView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backBtn: {
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
  },
  backIconImg: {
    width: 15,
    height: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});

export default styles;
