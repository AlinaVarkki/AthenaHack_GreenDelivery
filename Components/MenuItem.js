import React from 'react';
import {StyleSheet, View,Text, Image} from "react-native";
import ColourPalette from "../ColourPalette";
import Button from "./Button";


const box = {
    id: 0,
    title: 'Reusable box',
    description: '',
    price: '5',
    image: require('../Resources/food.jpg')
};

const MenuItem = ( {item, onPress}) => {


    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>£{item.price}</Text>
            </View>
            <View style={styles.imagePart}>
                <Image style={styles.image} source={item.image}/>
            </View>
            <View style={styles.rightSide}>
                <Button onPress={onPress}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
        height: 100,
        borderColor: ColourPalette.grey,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,

    },
    leftSide: {
        width: '65%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        paddingVertical: 3,
    },
    price: {
        color: ColourPalette.darkGreen,
        fontWeight: 'bold'
    },
    imagePart:{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '75%',
        height: 70,
    },
    rightSide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
    },


});

export default MenuItem
