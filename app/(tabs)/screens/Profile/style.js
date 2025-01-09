import { Colors } from "../../../../assets/colors";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
  },
  container: {
    alignItems: "center",
  },
  profileIcon: {
    alignItems: "center",
    width:120,
    height:120,
    resizeMode:"contain"
  },
});

export default styles;
