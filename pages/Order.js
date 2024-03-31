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

const MyorderPage = ({navigation}) => {

    const style = StyleSheet.create({
        backgroundButton : {
              backgroundColor : 'black',
              paddingVertical : 10,
              paddingHorizontal : 10,
              borderRadius : 100
            },
            header : {
              flexDirection : 'row',
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

    const handleProfile = () => {
      navigation.navigate('Profile')
    }

    return(
        <SafeAreaView>
      <View style={style.header}>
        <TouchableOpacity onPress={handleProfile} style={style.backgroundButton} ><Image style={style.imageBackgroundButton} source={require('../assets/arrow-left.png')}/></TouchableOpacity>
        <Text style={{fontSize : 20, textAlign : 'center', fontWeight:700}}>My Order</Text>
        <Text style={{color : '#F2F4F7'}}>.</Text>
      </View>
      <View style={{backgroundColor:'#F2F4F7' ,marginHorizontal:10, paddingHorizontal:15, paddingVertical:10, borderRadius:15}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:15}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assets/th.png')} style={{width:100, height:100, borderRadius:10}} />
            <View style={{marginHorizontal:10}}>
              <Text>Lorem Ipsum</Text>
              <Text style={{fontWeight:700}}>IDR 12.00</Text>
            </View>
          </View>
          <Text>x1</Text>
        </View>
        <View style={{backgroundColor:'#D0D5DD', height:1}} />
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text>1 product</Text>
          <View style={{flexDirection:'row'}}>
            <Text>Total:</Text>
            <Text style={{fontWeight:700}}>IDR 12.00</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row', marginBottom:30}}>
        <View style={{height: 1, flex: 1, backgroundColor: '#667085', alignSelf: 'center', marginHorizontal: 7.5}}/>
        <Text style={{alignSelf:'center'}}>You might also like</Text>
        <View style={{height: 1, flex: 1, backgroundColor: '#667085', alignSelf: 'center', marginHorizontal: 7.5}}/>
      </View>
      <ScrollView style={{height:550}}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}

export default MyorderPage;