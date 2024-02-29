import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';

const DetailPage = ({navigation}) => {

    const style = StyleSheet.create({
        detail : {
          width : 412,
          backgroundColor : '#fff'
        },  
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
          paddingVertical : 10
        },
        imageBackgroundButton : {
          width : 40,
          height : 40,
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'center'
        },
        imagePreview : {
          width : 400,
          borderRadius : 20
        },
        textChoice : {
          backgroundColor : '#1C2536',
          color : 'white',
          paddingHorizontal : 7.5,
          paddingVertical : 1.25,
          borderRadius : 100,
          marginHorizontal : 10,
        },
        flex : {
          flexDirection :'row'
        },
        desc : {
          marginTop : 10,
          fontSize : 17.5,
          color : '#98A2B3',
          paddingHorizontal : 10
        },
        subHeader : {
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'space-between',
          marginTop : 20,
          paddingHorizontal : 10,
        },
        rating : {
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'space-between',
          marginTop : 10,
          marginBottom : 30,
          paddingHorizontal : 10
        },
        footerButton : {
          flexDirection : 'row',
          justifyContent : 'center',
          marginTop : 100,
          paddingBottom : 50
        },
        buttonEdit : {
          borderWidth : 1.5,
          borderRadius : 100,
          paddingVertical : 15,
          paddingHorizontal : 35
        },
        textEdit : {
          fontSize : 15
        },
        buttonCart : {
          backgroundColor : '#1C2536',
          borderRadius : 100,
          paddingVertical : 15,
          paddingHorizontal : 100,
          marginLeft : 20,
        },
        textCart : {
          color: 'white',
          fontSize : 15
        }
    });

    return(
        <SafeAreaView style={style.detail}>
            <View style={style.header}>
                <TouchableOpacity style={style.backgroundButton} ><Image style={style.imageBackgroundButton} source={require('../assets/arrow-left.png')}/></TouchableOpacity>
                <Text style={{fontSize : 20, textAlign : 'center'}}>Detail</Text>
                <Text style={{color : '#F2F4F7'}}>.</Text>
            </View>
            <View>
                <Image source={require('../assets/th(2).png')} style={style.imagePreview} />
                <View style={style.subHeader}>
                    <Text style={{fontSize : 15}} >Tittle</Text>
                    <Text style={{fontWeight : 'bold', fontSize : 20}}>IDR 12.00</Text>
                </View>
                <View style={style.rating}>
                    <View style={style.flex}>
                        <Image source={require('../assets/Star.png')} style={{width : 20, height : 20}}/>
                        <Image source={require('../assets/Star.png')} style={{width : 20, height : 20}}/>
                        <Image source={require('../assets/Star.png')} style={{width : 20, height : 20}}/>
                        <Image source={require('../assets/Star.png')} style={{width : 20, height : 20}}/>
                        <Image source={require('../assets/Star.png')} style={{width : 20, height : 20}}/>
                        <Text style={{fontSize : 15, marginHorizontal : 5}} >4.8</Text>
                    </View>
                    <View style={style.flex}>
                        <TouchableOpacity><Text style={{paddingHorizontal : 5}}>-</Text></TouchableOpacity>
                        <Text style={style.textChoice} >1</Text>
                        <TouchableOpacity><Text style={{paddingHorizontal : 5}}>+</Text></TouchableOpacity>
                    </View>
                </View>
                <Text style={style.desc}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                </Text>
            </View>
            <View style={style.footerButton} >
                <TouchableOpacity style={style.buttonEdit}><Text style={style.textEdit} >Edit</Text></TouchableOpacity>
                <TouchableOpacity style={style.buttonCart}><Text style={style.textCart} >Add to Cart</Text></TouchableOpacity>
            </View>
        </SafeAreaView> 
    )
}

export default DetailPage;