import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Box from './Box';
export default function App() {
  return (
   <View style={{flex: 1}}>
      <View
        style={styles.view}>
        <View style={{flexDirection: 'row'}}>
          <Image  style={{height: 170, width: 150, marginTop:20,}} source={require('./assets/vsmart_live_xanh1(1).png')}/>
          <View style={{flexDirection: 'column', marginTop:25,}}>
            <Text style={styles.text}>
              Điện Thoại Vsmart Joy 3
            </Text>
            <Text style={styles.text}>
              Hàng chính hãng
            </Text>
          </View>
        </View>
      </View>

      <View
        style={styles.view2}>
        <Text style={{color: 'black', paddingHorizontal: 20, fontSize: 18}}>
          Chọn một màu bên dưới:
        </Text>
        <Box/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 view:{
    flex: 30,
    padding: 5,
    marginTop:25,
  },
  view2:{
    flex:75,
    backgroundColor: '#C4C4C4', 
    flexDirection: 'column'
  },
  text:{
    color: 'black', 
    paddingHorizontal: 20, 
    fontSize: 14
  },
 

});
