import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, TextInput} from 'react-native';
import FAIcon from 'react-native-vector-icons/AntDesign';

const style = StyleSheet.create({
    home : {
        width: 412,
        backgroundColor: '#fff',
    },
    input : {
        height: 70,
        backgroundColor: '#F2F4F7',
        paddingLeft: 50,
        marginLeft: 5,
        marginTop: 20,
        width: 400,
        borderRadius :100,
    },
    category : {
        marginLeft: 20,
        marginTop:20,
    },
    categoryItem : {
        marginHorizontal:2,
        marginBottom:20 ,
        borderColor :'black',
        fontSize: 15,
        borderWidth:1,
        borderRadius: 100,
        paddingHorizontal:30,
        paddingVertical:10,
    },
    header : {
        marginLeft: 20,
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 30
    },
    profileText : {
        marginLeft: 25,
        marginTop: 35,
        marginBottom: 15,
    },
    listBarang : {
        flex: 1,
        flexDirection : 'row',
    },
    barang : {
        width:150,
        height:225,
        marginHorizontal:25,
        marginVertical:10
    },
    barangflex : {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:150,
        alignItems :'center'
    },
    barangImg : {
        width: 160,
        height:130
    },
    barangTextBold : {
        fontWeight: 'bold',
    },
    barangIcon :{
        color: '#fff',
        backgroundColor :'#1C2536',
        paddingHorizontal:4,
        paddingVertical:1,
        width:'auto',
        justifyContent:"center",
        borderRadius:100,
    },
    scrollView : {
        height : 500
    },
    white : {
        color : '#fff',
        fontSize: 25,
        textAlign: 'center',
        width: 25
    },
    searchIcon : {
        position: 'absolute',
        top : 230,
        zIndex: 2,
        height: 30,
        left : 20,
        width: 30
    }
});

const Homepage = ({navigation}) => {

    const handleDetail = () => {
        navigation.navigate('Detail')
    }

    return(
        <SafeAreaView style={style.home}>
            <View>
                <Text style={style.profileText}>Hi, Brandon Salim</Text>
                <Text style={style.header}>Compact And Easy Ordering For You</Text>
                <Image source={require('../assets/search-normal.png')} style={style.searchIcon} />
                <TextInput style={style.input} placeholder="Search here" />
                <ScrollView style={style.category} horizontal={true}>
                    <Text style={style.categoryItem}>Popular</Text>
                    <Text style={style.categoryItem}>Recent</Text>
                    <Text style={style.categoryItem}>Aproved</Text>
                    <Text style={style.categoryItem}>Simple</Text>
                </ScrollView>
            </View>
            <ScrollView style={style.scrollView}>
                <View style={style.listBarang}>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th.png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th(1).png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={style.listBarang}>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th(2).png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th(3).png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={style.listBarang}>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th(4).png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.barang}>
                        <Image style={style.barangImg} source={require('../assets/th.png')}/>
                        <View style={style.barangflex}>
                            <View>
                                <Text>Lorem Ipsum</Text>
                                <Text style={style.barangTextBold}>IDR 12.00</Text>
                            </View>
                            <TouchableOpacity style={style.barangIcon} onPress={handleDetail} ><Text style={style.white}>+</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Homepage;