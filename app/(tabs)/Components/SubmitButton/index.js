import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Colors} from '../../../../assets/colors'
const SubmitButton = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={onPress}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    buttonView:{
        width:"100%",
        paddingVertical:18,
        borderRadius:25,
        alignItems:"center",
        backgroundColor:Colors.pulpur,
    
      },
      buttonText:{
        color:Colors.white,
        fontSize:16,
        fontWeight:"bold",
      },
})