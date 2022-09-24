import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vieimg}>
          <Image source={require('./assets/vsmart_live_xanh1.png') } />
      </View>
      <View  style={styles.view}> 
          <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flex:2, flexDirection:'row',}}>
          <View style={styles.view1}>
              <Image style={styles.img} source={require('./assets/Star1.png') } />
              <Image style={styles.img} source={require('./assets/Star1.png') } />
              <Image style={styles.img} source={require('./assets/Star1.png') } />
              <Image style={styles.img} source={require('./assets/Star1.png') } />
              <Image style={styles.img} source={require('./assets/Star1.png') } />
          </View>
          <View style={styles.view2}>
              <Text style={styles.text}>(Xem 828 đánh giá)</Text>
          </View>
      </View>
      <View style={{flex:2, flexDirection:'row',}}>
           <View style={styles.view3}>
              <Text style={styles.text1}>1.790.000 đ</Text>
              <Text style={styles.text2}>1.790.000 đ</Text>
           </View>
      </View>
      <View style={{flex:15, flexDirection:'column',}}>
           <View style={styles.view4}>
              <Text style={styles.text3}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
              <Image style={styles.img1} source={require('./assets/Group1.png') } />
           </View>
           <View style={styles.view5}>
              <TouchableOpacity
              style={styles.touch}>
                <Text
                  style={{ alignSelf: 'center',}}>
                  4 MÀU-CHỌN MÀU
                </Text>
              </TouchableOpacity>
            
           </View>
           <View style={{flex:3}}>
             <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>            
                CHỌN MUA </Text>
             </TouchableOpacity>
           </View>
           
      </View>
      </View>
      
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  vieimg:{
    flex:3,
    flexDirection:'column',
    alignItems:'center',
    marginTop:5,
  },
  view:{
    flex:3,
    flexDirection:'column',
    marginTop:5,
  },
  text:{
    textAlign:'center',
    fontSize:17,
    fontFamily:'Roboto',
  },
  img:{
    width:28,
    height:27,
  },
  view1:{
    flex:3,
    flexDirection:'row',
    alignItems:'flex-start',
    marginLeft:9,
    marginTop:10,
  },
  view2:{
    flex:3,
    flexDirection:'row',
    alignItems:'flex-start',
    marginLeft:15,
    marginTop:15,
    fontSize:18,
  },
  text1:{
    flex:1,
    fontFamily:'Roboto',
    fontSize:18,
    marginTop:12,
    fontWeight:'bold',
  },
  text2:{
    flex:1,
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:'bold',
    marginTop:12,
    textDecorationLine: 'line-through',
    color:'#00000077',
  },
  view3:{
    flex:5,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginLeft:15,
  },
  view4:{
    flex:2,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginLeft:15,
    marginTop:5,
  },
  text3:{
    flex:1,
    fontFamily:'Roboto',
    fontSize:13,
    fontWeight:'bold',
    marginTop:7,
    color:'#FA0000',
  },
  img1:{
    marginRight:139,
    marginTop:5,
  },
 touch:{
    borderColor: '#000000',
    borderWidth: 1,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection:'row',
 },
 view5:{
    flex:10,
    flexDirection:'row',
    marginLeft:15,
    marginTop:5,
    alignContent:'flex-end',
  },
 btn:{
    height: 45,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'red',
    alignItems: 'center',
  },
 

});
