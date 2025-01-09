import { Colors } from "../../../../assets/colors";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  testView: {
    marginTop: 20,
  },
  testBox: {
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    padding: 10,
    borderRadius: 10,
    marginBottom:10
  },
  testBoxTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tesTitleName: {
    fontSize: 18,
    fontWeight: "500",
  },
  testTypeView: {
    backgroundColor: Colors.pulpur,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  testType: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  testRangeView: {
    flexDirection: "row",
    marginVertical: 5,
    position: "relative",
    marginBottom: 35,
  },
  testRange: {
    height: 10,
  },
  marker: {
    position: "absolute",
    alignItems: "center",
    top: 15,
    width: 20,
    height: 20,
    // backgroundColor: '#000',
    // borderRadius: 10,
    // borderWidth: 2,
    // borderColor: '#fff',
  },
  count: {
    fontSize: 16,
    fontWeight: "500",
  },
  rangeType:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginTop:10
  },
  rangeTypeText:{
    fontSize:16,
    fontWeight:"500"
  },
  reportType:{
    borderWidth:1,
    padding:10
  },
  reportText:{
    fontSize:18,
    fontWeight:"500",
    marginBottom:10
  }
});

export default styles;
