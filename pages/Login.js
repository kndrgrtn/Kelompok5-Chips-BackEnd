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

const LoginPage = ({navigation}) => {
    return(
        <SafeAreaView style={{justifyContent:'center', height:700}}>
      <Text style={{marginVertical:40, marginHorizontal:20, fontSize:20, fontWeight:700}} >Login To Chips</Text>
      <View>
        <Text style={{marginHorizontal:20}} >Email</Text>
        <TextInput placeholder="hellochips@gmail.com" style={{marginHorizontal:20, marginTop:10, marginBottom:20, borderWidth:1, borderRadius:50, paddingVertical:10, paddingHorizontal:20}}/>
        <Text style={{marginHorizontal:20}}>Password</Text>
        <TextInput placeholder="Your Password" style={{marginHorizontal:20, marginTop:10, marginBottom:20, borderWidth:1, borderRadius:50, paddingVertical:10, paddingHorizontal:20}}/>
        <TouchableOpacity style={{backgroundColor:'#1C2536', paddingVertical:15,marginHorizontal:20, borderRadius:50,marginTop:10, marginBottom:30}}><Text style={{textAlign:'center', color:'white'}}>Login</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'#667085', height:1, alignSelf:'center'}}/>
        <Text style={{textAlign:'center', marginHorizontal:10}}>Don't have an account yet?</Text>
        <View style={{flex:1, backgroundColor:'#667085', height:1, alignSelf:'center'}}/>
      </View>
      <TouchableOpacity style={{borderWidth:1, borderRadius:50, marginHorizontal:20, marginTop:30, paddingVertical:10, paddingHorizontal:20}}><Text style={{textAlign:'center'}}>Register</Text></TouchableOpacity>
    </SafeAreaView>
    )
}

export default LoginPage;