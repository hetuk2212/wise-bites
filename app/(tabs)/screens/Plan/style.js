import { Colors } from "../../../../assets/colors";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  bannerImg:{
    width:"100%",
    height:175,
    resizeMode:"cover",
    borderRadius:10,
    elevation:5
   
  },
  workoutTile:{
    fontSize:18,
    fontWeight:"500",
    marginBottom:5
  },
  bannerView:{
    marginTop:20
  },
  bannerDetails:{
    marginBottom:10
  }
});

export default styles;
