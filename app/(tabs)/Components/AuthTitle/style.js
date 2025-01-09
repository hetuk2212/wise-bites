import { StyleSheet } from "react-native";
import {Colors} from "../../../../assets/colors";

const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      backIconImgView: {
        padding: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
      },
      headerText: {
        fontSize: 24,
        color: Colors.textBlack,
        fontWeight: '400',
      },
      backIconImg:{
        width:15,
        height:15
      }
})

export default styles