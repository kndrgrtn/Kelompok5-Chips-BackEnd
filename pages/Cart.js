import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput,
  } from 'react-native';
  
  import {CheckBox} from 'react-native';
  
  import React, {useState, useEffect} from 'react';

const CartPage = ({navigation}) => {

    const style = StyleSheet.create({
        backgroundButton : {
              backgroundColor : 'black',
              paddingVertical : 10,
              paddingHorizontal : 10,
              borderRadius : 100
            },
            header : {
              flexDirection : 'row',
              flex : 1,
              alignItems : 'center',
              justifyContent : 'space-between',
              marginBottom : 20,
              backgroundColor : '#F2F4F7',
              paddingHorizontal : 10,
              paddingVertical : 20,
            },
            imageBackgroundButton : {
              width : 40,
              height : 40,
              flexDirection : 'row',
              alignItems : 'center',
              justifyContent : 'center'
            },
    });

    return(
        <SafeAreaView>
      <View style={style.header}>
        <TouchableOpacity style={style.backgroundButton} ><Image style={style.imageBackgroundButton} source={require('../assets/arrow-left.png')}/></TouchableOpacity>
        <Text style={{fontSize : 20, textAlign : 'center', fontWeight:700}}>Cart</Text>
        <Text style={{color : '#F2F4F7'}}>.</Text>
      </View>
      <ScrollView>
        <View style={{marginHorizontal:20, backgroundColor:'#F2F4F7', paddingVertical:15, marginVertical:7.5, paddingHorizontal:10, borderRadius:25, flexDirection:'row', justifyContent:'space-between', shadowRadius:5, shadowOpacity:0.35}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:100, height:100, borderRadius:20}} source={require('../assets/th(1).png')}/>
            <View style={{marginHorizontal:10}}>
              <Text style={{marginBottom:10}}>Lorem Ipsum</Text>
              <Text>IDR 12.00</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between', alignItems:'end'}}>
            <Image source={require('../assets/trash.png')} style={{width:20, height:20}}/>
            <View style={{flexDirection:'row', marginBottom:40}}>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <Text style={{backgroundColor:'#1C2536', color:'white', borderRadius:50, width:20, height:20, textAlign:'center', marginHorizontal:10}}>1</Text>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal:20, backgroundColor:'#F2F4F7', paddingVertical:15, marginVertical:7.5, paddingHorizontal:10, borderRadius:25, flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:100, height:100, borderRadius:20}} source={require('../assets/th(1).png')}/>
            <View style={{marginHorizontal:10}}>
              <Text style={{marginBottom:10}}>Lorem Ipsum</Text>
              <Text>IDR 12.00</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between', alignItems:'end'}}>
            <Image source={require('../assets/trash.png')} style={{width:20, height:20}}/>
            <View style={{flexDirection:'row', marginBottom:40}}>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <Text style={{backgroundColor:'#1C2536', color:'white', borderRadius:50, width:20, height:20, textAlign:'center', marginHorizontal:10}}>1</Text>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal:20, backgroundColor:'#F2F4F7', paddingVertical:15, marginVertical:7.5, paddingHorizontal:10, borderRadius:25, flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:100, height:100, borderRadius:20}} source={require('../assets/th(1).png')}/>
            <View style={{marginHorizontal:10}}>
              <Text style={{marginBottom:10}}>Lorem Ipsum</Text>
              <Text>IDR 12.00</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between', alignItems:'end'}}>
            <Image source={require('../assets/trash.png')} style={{width:20, height:20}}/>
            <View style={{flexDirection:'row', marginBottom:40}}>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <Text style={{backgroundColor:'#1C2536', color:'white', borderRadius:50, width:20, height:20, textAlign:'center', marginHorizontal:10}}>1</Text>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
          <Text>Total</Text>
          <Text>12.00 IDR</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#1C2536', paddingVertical:15, borderRadius:50, marginHorizontal:20, marginTop:20}}><Text style={{textAlign:'center', color:'white'}}>Checkout</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}

export default CartPage;