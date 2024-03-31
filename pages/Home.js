import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import FAIcon from 'react-native-vector-icons/AntDesign';
import { useGetBarang } from '../service/Service';
import { FlatList } from 'react-native';

const style = StyleSheet.create({
  
});

const Homepage = ({navigation}) => {
    const barang = useGetBarang();

    const handleDetail = () => {
        navigation.navigate('Detail')
    }

    const handleCart = () => {
      navigation.navigate('Cart')
   }

    const handleProfile = () => {
      navigation.navigate('Profile')
    }

    const handleCheckout = () => {
      navigation.navigate('Checkout')
    }

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={handleDetail}>
          <View style={{alignSelf:'center'}}>
              <Image source={require('../assets/th(1).png')} style={{ width: 150, height: 150 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View>
                      <Text>{item.title}</Text>
                      <Text>IDR {item.price}</Text>
                  </View>
                  <TouchableOpacity onPress={handleDetail} style={{ backgroundColor: '#1C2536', borderRadius: 50, justifyContent: 'center' }}>
                      <Image source={require('../assets/add.png')} style={{ width: 37.5, height: 30 }} />
                  </TouchableOpacity>
              </View>
          </View>
      </TouchableOpacity>
  );

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
          <FlatList data={barang} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
          <FlatList data={barang} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
        </View> 
      </ScrollView>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
        <TouchableOpacity><Image source={require('../assets/home-2.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={handleCart} ><Image source={require('../assets/shopping-cart.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={handleProfile}><Image source={require('../assets/user.png')} /></TouchableOpacity>
      </View>
        </SafeAreaView>
    )
}

export default Homepage;