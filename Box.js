import React from 'react';

import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
export default function Box() {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity
        style={styles.touch}></TouchableOpacity>
      <TouchableOpacity
        style={styles.touch3}></TouchableOpacity>
      <TouchableOpacity
        style={styles.touch1}></TouchableOpacity>
      <TouchableOpacity
        style={styles.touch2}></TouchableOpacity>
      <TouchableOpacity
        style={styles.touch4}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          XONG
        </Text>
      </TouchableOpacity>
    </View>
     )
}
  const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
    },
    touch:{
        backgroundColor: '#C5F1FB',
        height: 70,
        margin: 5,
        width: 70,
        marginTop:10,
    },
    touch1:{
        backgroundColor: '#000000',
        height: 70,
        margin: 5,
        width: 70,
        marginTop:10,
    },
    touch2:{
        backgroundColor: '#234896',
        height: 70,
        margin: 5,
        width: 70,
        marginTop:10,
    },
    touch3:{
        backgroundColor: '#F30D0D',
        height: 70,
        margin: 5,
        width: 70,
        marginTop:10,
    },
    touch4:{
        backgroundColor: '#1952E294',
        height: 50,
        borderRadius: 15,
        margin: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
        },

});
