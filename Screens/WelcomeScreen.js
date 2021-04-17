import React from "react";
import {StyleSheet, Text, Dimensions, Image, SafeAreaView} from "react-native";
import ColourPalette from "../ColourPalette";
import {useNavigation} from '@react-navigation/native';


const WelcomeScreen = () => {

    const navigation = useNavigation();

    const navCheck = () => {
        navigation.navigate("DrawerNavigation", {screen: "Restaurants" });
    };

    const finalT = () => {
        setTimeout(navCheck,1000);
    }

    return (
        <SafeAreaView style={styles.background}>

            <Image style={styles.image} source={require("../Images/logo.png")} onLoad={finalT}/>

            <Text style={styles.smallerText}>Delicious Food{"\n"}Recyclable Packaging </Text>

            <Text style={styles.biggerText}>Your GREEN{"\n"}Delivery</Text>

        </SafeAreaView>
    )

}

const {height} = Dimensions.get("screen");
const picHeight = height*0.2;


const styles = StyleSheet.create({
    background: {
        backgroundColor: ColourPalette.purple,
        width: '100%',
        height: height,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: picHeight,
        position: 'absolute',
        top: height*0.21,
    },
    smallerText: {
        color: 'white',
        paddingLeft: 3,
        paddingTop: 2,
        fontWeight: 'normal',
        fontSize: 27,
        // fontFamily: 'Ubuntu',
        letterSpacing: 1.5,
        position: 'absolute',
        top: height*0.52,
        left: 20,
    },
    biggerText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        // fontFamily: 'Ubuntu',
        letterSpacing: 3,
        paddingTop: 5,
        position: 'absolute',
        top: height*0.61,
        left: 20,

    },
});

export default WelcomeScreen;
