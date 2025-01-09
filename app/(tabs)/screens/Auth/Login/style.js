import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../../../assets/colors/index";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  inputForm: {
    alignItems: "center",
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 10,
  },
  welcomeImg: {
    width: width * 0.6,

    resizeMode: "contain",
    marginBottom: 10,
  },
  welcomeTextDesc: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  inputView: {
    marginTop: 50,
  },
  signupText: {
    color: Colors.darkGrey,
    fontWeight: "500",
    marginBottom:10
  },
  signupTextPulpur: {
    color: Colors.pulpur,
    fontWeight: "500",
  },
});

export default styles;
