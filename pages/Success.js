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

const SuccessPage = ({navigation}) =>{

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

      const handleHomepage = () => {
        navigation.navigate('Homepage')
      }

      const handleDetail = () => {
        navigation.navigate('Detail')
      }

    return(
        <SafeAreaView>
      <View style={style.header}/>
      <View style={{marginHorizontal:10, paddingHorizontal:15, paddingVertical:10}}>
        <Text style={{textAlign:'center', fontWeight:700, fontSize:20}}>Payment Successful</Text>
        <Text style={{textAlign:'center', marginVertical:10}}>Please Pay in cash when the goods arrive at your address</Text>
        <TouchableOpacity onPress={handleHomepage} style={{borderWidth:1, marginTop:10, marginBottom:30, borderRadius:50, paddingVertical:10,marginHorizontal:100}}><Text style={{textAlign:'center'}}>Homepage</Text></TouchableOpacity>
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
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
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
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
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
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
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
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={{width:160, height:160}} source={require('../assets/th(1).png')} />
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity onPress={handleDetail} style={{backgroundColor : '#1C2536', borderRadius:20}}><Image style={{width:40, height:40}} source={require('../assets/add.png')}/></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}

export default SuccessPage