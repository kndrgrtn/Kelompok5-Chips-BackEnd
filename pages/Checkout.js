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
  
  import CheckBox from 'expo-checkbox';
  
  import React, {useState, useEffect} from 'react';

const CheckoutPage = ({navigation}) => {

    const handleSucces = () => {
      navigation.navigate('Success')
    }

    const handleDetail = () => {
      navigation.navigate('Detail')
    }

    const [shipReg, setShipReg] = useState(Boolean)
    const [shipCarg, setShipCarg] = useState(Boolean)
    const [payBCA, setPayBCA] = useState(Boolean)
    const [payBNI, setPayBNI] = useState(Boolean)
    const [payBRI, setPayBRI] = useState(Boolean)
    const [payCOD, setPayCOD] = useState(Boolean)

    return(
        <SafeAreaView>
      <View style={{flexDirection : 'row',alignItems : 'center',justifyContent : 'space-between',marginBottom : 20,backgroundColor : '#F2F4F7',paddingHorizontal : 10,paddingVertical : 20,}}>
        <TouchableOpacity onPress={handleDetail} style={{backgroundColor : 'black',paddingVertical : 10,paddingHorizontal : 10,borderRadius : 100}} ><Image style={{width : 40,height : 40,flexDirection : 'row',alignItems : 'center',justifyContent : 'center'}} source={require('../assets/arrow-left.png')}/></TouchableOpacity>
        <Text style={{fontSize : 20, textAlign : 'center', fontWeight:700}}>Checkout</Text>
        <Text style={{color : '#F2F4F7'}}>.</Text>
      </View>
      <View style={{marginHorizontal:20, backgroundColor:'#F2F4F7', paddingVertical:15, marginVertical:7.5, paddingHorizontal:10, borderRadius:25, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:90, height:90, borderRadius:20}} source={require('../assets/th(1).png')}/>
          <View style={{marginHorizontal:10}}>
            <Text style={{marginBottom:10}}>Lorem Ipsum</Text>
            <Text style={{fontWeight:700}}>IDR 12.00</Text>
          </View>
        </View>
        <View style={{justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity><Text>-</Text></TouchableOpacity>
            <Text style={{backgroundColor:'#1C2536', color:'white', borderRadius:50, width:20, height:20, textAlign:'center', marginHorizontal:10}}>1</Text>
            <TouchableOpacity><Text>+</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={{paddingHorizontal:20, paddingVertical:10}}>Shipping Option</Text>
        <View style={{backgroundColor:'#F2F4F7', borderRadius:20, paddingHorizontal:10, paddingVertical:5, marginHorizontal:20}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View>
              <Text style={{fontWeight:700}}>Regular</Text>
              <Text>Will be recevied on March 24-27</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{marginHorizontal:10, fontWeight:700}}>IDR 10.00</Text>
                <CheckBox value={shipReg} onValueChange={newValue => {setShipReg(newValue)}}/>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View>
              <Text style={{fontWeight:700}}>Cargo</Text>
              <Text>Will be recevied on March 24-27</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{marginHorizontal:10, fontWeight:700}}>IDR 15.00</Text>
              <CheckBox value={shipCarg} onValueChange={newValue => {setShipCarg(newValue)}}/>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={{paddingHorizontal:20, paddingVertical:10}}>Payment Method</Text>
        <View style={{backgroundColor:'#F2F4F7', borderRadius:20, paddingHorizontal:10, paddingVertical:5, marginHorizontal:20}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/BCA.png')} style={{marginRight:10, borderRadius:10}}/>
              <View>
                <Text style={{fontWeight:700}}>BCA</Text>
                <Text>****-8976</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={payBCA} onValueChange={newValue => {setPayBCA(newValue)}}/>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/BNI.png')} style={{marginRight:10, borderRadius:10}}/>
              <View>
                <Text style={{fontWeight:700}}>BNI</Text>
                <Text>****-8976</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={payBNI} onValueChange={newValue => {setPayBNI(newValue)}}/>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/BRI.png')} style={{marginRight:10, borderRadius:10}}/>
              <View>
                <Text style={{fontWeight:700}}>BRI</Text>
                <Text>****-8976</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={payBRI} onValueChange={newValue => {setPayBRI(newValue)}}/>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/COD.png')} style={{marginRight:10, borderRadius:10}}/>
              <View>
                <Text style={{fontWeight:700}}>COD</Text>
                <Text>****-8976</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={payCOD} onValueChange={newValue => {setPayCOD(newValue)}}/>
            </View>
          </View>
        </View>
      </View>
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
        <Text>Total</Text>
        <Text>12.00 IDR</Text>
      </View>
      <TouchableOpacity onPress={handleSucces} style={{backgroundColor:'#1C2536', paddingVertical:15, borderRadius:50, marginHorizontal:20, marginTop:20}}><Text style={{textAlign:'center', color:'white'}}>Checkout</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
    )
}

export default CheckoutPage;