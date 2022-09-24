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
          <Image  style={{height: 170, width: 150, marginTop:20,}} source={require('./assets/vs_red_a1.png')}/>
          <View style={{flexDirection: 'column', marginTop:20,}}>
            <Text style={styles.text}>
              Điện Thoại Vsmart Joy 3
            </Text>
            <Text style={styles.text}>
              Hàng chính hãng
            </Text>
            <Text style={styles.text}>
              Màu:
              <Text
                style={styles.text2}>
                đỏ
              </Text>
            </Text>
            <Text style={styles.text}>
              Cung cấp bởi{' '}
              <Text
                style={styles.text2}>
                Tiki Tradding
              </Text>
            </Text>
            <Text
              style={{color: 'black', paddingHorizontal: 20, fontSize: 16, fontWeight: 'bold',}}>
              1.790.000 đ
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
  text2:{
    color: 'black', 
    paddingStart: 20, 
    fontSize: 14, 
    fontWeight: 'bold',
  },
 

});
