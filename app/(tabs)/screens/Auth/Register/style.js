import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../../../assets/colors/index";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red"
  },
  inputForm: {
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
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
    marginTop: 20,
  },
  signupText: {
    color: Colors.darkGrey,
    fontWeight: "500",
    marginBottom: 10,
  },
  signupTextPulpur: {
    color: Colors.pulpur,
    fontWeight: "500",
  },
  createAccount: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
  },
  createAccount3: {
    // textAlign:"left",
    fontSize: 24,
    fontWeight: "500",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor:"red"
  },
  radioLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  radioButtonBorder: {
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderRadius: 50,
    // borderRadius: 5,
    padding: 4,
    marginRight: 10,
    // width:30,
    // height:30
  },
  selectedRadio: {
    backgroundColor: Colors.pulpur,
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  resultView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bmiStatusContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  bmiCategoryText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  bmiRangeContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginTop: 10,
  },
  bmiRange: {
    height: "100%",
    borderRadius: 10,
  },
  underweight: {
    width: "30%",
    backgroundColor: "#00BFFF",
  },
  normal: {
    width: "40%",
    backgroundColor: "#32CD32",
  },
  overweight: {
    width: "20%",
    backgroundColor: "#FFD700",
  },
  obese: {
    width: "10%",
    backgroundColor: "#FF6347",
  },
  calculateBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  nextBtn: {
    backgroundColor: Colors.pulpur,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop:10,
    width:"90%"
  },
  calculateBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bmiBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGrey,
    width: "90%",
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
  testRangeView: {
    flexDirection: "row",
    marginVertical: 5,
    position: "relative",
    marginTop: 20,
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
  tableHeaderView:{
borderWidth:1,
borderColor:Colors.darkGrey,
marginTop:20,
borderRadius:10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    // marginBottom: 10,
    // marginTop:20
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    width: '45%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: '#f0f0f0',
    backgroundColor:"#ccc"
  },
  rowText: {
    fontSize: 16,
    width: '45%',
    textAlign: 'center',
  },
});

export default styles;
