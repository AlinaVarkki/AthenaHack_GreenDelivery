import React from 'react';
import {SliderBox} from "react-native-image-slider-box";
import {StyleSheet, View} from 'react-native';

import {useNavigation} from "@react-navigation/native";
import ColourPalette from "../ColourPalette";

export default function SlideScreen(){
    const navigation = useNavigation();
    const images = [require('../Images/Carousel/Carousel1.png'),
        require('../Images/Carousel/Carousel2.png'),
        require('../Images/Carousel/Carousel3.png'),
        require('../Images/Carousel/Carousel4.png'),
        require('../Images/Carousel/Carousel5.png')];

    const style = StyleSheet.create({
        slide:{
            width: '100%',
            height: '100%',
            backgroundColor: ColourPalette.green
        }
    })

    return(
        <View style={style.slide}>
            <SliderBox style={style.slide} images={images} resizeMode={'stretch'} onCurrentImagePressed={() => navigation.navigate("DrawerNavigation", {screen: "Restaurants" }) } autoplay circleLoop/>
        </View>
    )
}
