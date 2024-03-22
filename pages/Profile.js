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

const Profile = ({navigation}) =>{

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

  const handleOrder = () =>{
    navigation.navigate('MyOrder')
  }

  return(
      <SafeAreaView>
    <View style={style.header}>
      <TouchableOpacity style={style.backgroundButton} ><Image style={style.imageBackgroundButton} source={require('../assets/arrow-left.png')}/></TouchableOpacity>
      <Text style={{fontSize : 20, textAlign : 'center'}}>Profile</Text>
      <Text style={{color : '#F2F4F7'}}>.</Text>
    </View>
    <View style={{backgroundColor:'#1C2536', paddingHorizontal:20, paddingVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}} >
        <Text style={{color:'#1C2536'}}>.</Text>
        <Image style={{marginBottom:30}} source={require('../assets/shopping-cart-white.png')} />
      </View>
      <Text style={{color:'white', fontWeight:700, fontSize:20}}>Brandon Salim</Text>
      <Text style={{color:'white'}}>brandonsalim@gmail.com</Text>
    </View>
    <ScrollView style={{height:550}}>
      <TouchableOpacity onPress={handleOrder} style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/directbox-default-2.png')}/>
          <Text style={{marginHorizontal:10}}>My Order</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{marginHorizontal:10}}>See Order History</Text>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/heart.png')}/>
          <Text style={{marginHorizontal:10}}>Favorite</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/clock.png')}/>
          <Text style={{marginHorizontal:10}}>Last Seen</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/bag-2.png')}/>
          <Text style={{marginHorizontal:10}}>Buy Again</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/setting-2.png')}/>
          <Text style={{marginHorizontal:10}}>Account Setting</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/message-question.png')}/>
          <Text style={{marginHorizontal:10}}>Help Center</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/info-circle.png')}/>
          <Text style={{marginHorizontal:10}}>Report Problem</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/logout.png')}/>
          <Text style={{marginHorizontal:10}}>Log Out</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 15}} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/trash.png')}/>
          <Text style={{marginHorizontal:10}}>Delete Account</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:20, height:20, }} source={require('../assets/arrow-right.png')}/>
        </View>
      </View>
    </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
}

export default Profile;