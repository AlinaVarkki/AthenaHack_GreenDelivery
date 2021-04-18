import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import ColourPalette from "../ColourPalette";


const OrderedAnimationScreen  = () => {

    const navigation = useNavigation();

    const navCheck = () => {
        navigation.navigate("DrawerNavigation", {screen: "Restaurants"});
    };

    const finalT = () => {
        setTimeout(fadeIn,1200);
    }

    const fadeIn = () => {
        setTimeout(navCheck,950);
    };

    return (
        <SafeAreaView style={styles.backing}>
            <View>
                <Image style={styles.pic1} source={{
                    uri: 'https://media.giphy.com/media/ZnpYDtX0MENdkKpQGK/giphy.gif'
                }} onLoad={finalT}/>
            </View>
                <Text style={{fontSize: 30, color: ColourPalette.green, margin: 50, alignSelf: 'center', fontWeight: "bold", }}>Thank you for choosing the GREEN way!</Text>

        </SafeAreaView>
    );
}

const {height} = Dimensions.get("screen");
const picHeight = height*0.45;

const styles = StyleSheet.create({
    backing: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop:80,
        alignItems: 'center'
    },
    pic1: {
        paddingTop:400,
        width: 400,
        height: 400,
    },
    pic2: {
        width: picHeight,
        height: picHeight,
    },
    photo: {
        height: picHeight,
        width: picHeight
    },
});

export default OrderedAnimationScreen;
