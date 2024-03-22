import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import FAIcon from 'react-native-vector-icons/AntDesign';

const style = StyleSheet.create({
  
});

const Homepage = ({navigation}) => {

    const handleDetail = () => {
        navigation.navigate('Detail')
    }

    return(
        <SafeAreaView>
            <View>
        <Text style={{marginHorizontal:10, marginVertical:20}} >Hi, Brandon Salim</Text>
        <View style={{marginHorizontal:10, marginVertical:10}}>
          <Text style={{fontWeight:600, fontSize:30, marginBottom:30}}>Compact And Easy Ordering For You</Text>
          <TextInput style={{backgroundColor:'#F2F4F7', paddingHorizontal:20, paddingVertical:15, borderRadius:50}} placeholder="Search Here"/>
          <ScrollView horizontal={true} style={{flexDirection:'row', marginVertical:20}}>
            <TouchableOpacity style={{borderWidth:1, borderRadius:50, paddingVertical:7.5, paddingHorizontal:20, marginHorizontal:10}}><Text>Popular</Text></TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1, borderRadius:50, paddingVertical:7.5, paddingHorizontal:20, marginHorizontal:10}}><Text>Recent</Text></TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1, borderRadius:50, paddingVertical:7.5, paddingHorizontal:20, marginHorizontal:10}}><Text>Approved</Text></TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1, borderRadius:50, paddingVertical:7.5, paddingHorizontal:20, marginHorizontal:10}}><Text>Simple</Text></TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <ScrollView style={{height:400}} >
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={require('./assets/th(1).png')} style={{width:150, height:150}} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text>Lorem Ipsum</Text>
                <Text>IDR 12.00</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'#1C2536', borderRadius:50,justifyContent:'center'}}><Image source={require('./assets/add.png')} style={{width:37.5, height:30}}/></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
        <TouchableOpacity><Image source={require('./assets/home-2.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('./assets/shopping-cart.png')}/></TouchableOpacity>
        <TouchableOpacity><Image source={require('./assets/user.png')} /></TouchableOpacity>
      </View>
        </SafeAreaView>
    )
}

export default Homepage;