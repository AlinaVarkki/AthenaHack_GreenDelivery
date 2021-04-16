import React from "react";
import {StyleSheet, Text, Dimensions, Image} from "react-native";
import {SafeAreaView} from "react-native";
import ColourPalette from "../ColourPalette";

const WelcomeScreen = () => {


    return (
        <SafeAreaView style={styles.background}>

            <Image style={styles.image} source={require("../Images/logo.png")}/>
            <Text style={styles.smallerText}>Delicious Food{"\n"}Recyclable Packaging </Text>

            <Text style={styles.biggerText}>Your GREEN{"\n"}Delivery</Text>

        </SafeAreaView>
    )

}

const {height, width} = Dimensions.get("screen");
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
        top: height*0.2,
    },
    smallerText: {
        color: 'white',
        paddingLeft: 3,
        paddingTop: 2,
        fontWeight: 'normal',
        fontSize: 27,
        fontFamily: 'Ubuntu',
        letterSpacing: 1.5,
        position: 'absolute',
        top: height*0.51,
        left: 20,
    },
    biggerText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        fontFamily: 'Ubuntu',
        letterSpacing: 3,
        paddingTop: 5,
        position: 'absolute',
        top: height*0.6,
        left: 20,

    },
});

export default WelcomeScreen;
