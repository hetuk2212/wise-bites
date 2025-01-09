import { StyleSheet } from "react-native";
import { Colors } from "../../../../assets/colors";

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
    marginTop: 40,
  },
  weightContainer: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
    paddingBottom: 15,
  },
  weightBox: {
    marginBottom: 30,

    alignItems: "center",

    gap: 10,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.gray,
    marginBottom: 5,
  },
  weightText: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.primary,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    color: Colors.grayDark,
  },
  footer: {
    marginTop: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: Colors.grayLight,
    textAlign: "center",
    marginBottom: 15,
  },
  bmiBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGrey,
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    padding: 10,
  },
  bmiBoxTitle: {
    color: Colors.pulpur,
    fontSize: 18,
    fontWeight: "500",
  },
  bmiBoxBtn: {
    marginTop: 10,
    backgroundColor: "#FFBDF7",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  bmiBoxValue: {
    fontSize: 20,
    fontWeight: "500",
  },
  rangeType: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
    // backgroundColor:"red",
    width: "100%",
  },
  rangeTypeText: {
    fontSize: 10,
    fontWeight: "500",
  },
  testRange: {
    height: 10,
  },
  marker: {
    position: "absolute",
    alignItems: "center",
    top: -5,
    width: 20,
    height: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  testRangeView: {
    flexDirection: "row",
    marginVertical: 5,
    position: "relative",
    marginTop: 20,
  },
});

export default styles;
