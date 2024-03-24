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

const DetailPage = ({navigation}) => {

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
        <Text style={{fontSize : 20, textAlign : 'center', fontWeight:700}}>Detail</Text>
        <Text style={{color : '#F2F4F7'}}>.</Text>
      </View>
      <ScrollView style={{maxHeight:690}}>
        <Image source={require('../assets/th(1).png')} style={{alignItems:'center',borderRadius:15, marginHorizontal:20}}/>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal:20, marginTop:20, marginBottom:10}}>
            <Text>Main Board</Text>
            <Text style={{fontWeight:700}}>IDR 12.00</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={require('../assets/Star.png')}/>
              <Image source={require('../assets/Star.png')}/>
              <Image source={require('../assets/Star.png')}/>
              <Image source={require('../assets/Star.png')}/>
              <Image source={require('../assets/Star.png')}/>
              <Text>4.8</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View>
          </View>
          <Text style={{marginHorizontal:20, fontSize:15, textAlign:'justify',marginVertical:10}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</Text>
        </View>
        <View>
          <Text style={{marginHorizontal:20, marginVertical:15}} >Tambahkan Komponen</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
            <Text>Slot Pin</Text>
            <CheckBox value={slotpin} onValueChange={newValue => {setSlotpin(newValue)}}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
            <Text>Button</Text>
            <CheckBox value={button} onValueChange={newValue => {setButton(newValue)}}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
            <Text>Display</Text>
            <CheckBox value={display} onValueChange={newValue => {setDisplay(newValue)}}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
            <Text>Slot IDE</Text>
            <CheckBox value={slotIDE} onValueChange={newValue => {setSlotIDE(newValue)}}/>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor:'#1C2536', marginHorizontal:20, paddingVertical:12.5, borderRadius:50, marginVertical:10}} ><Text style={{color:'white', textAlign:'center'}}>Add to Cart</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    )
}

export default DetailPage;