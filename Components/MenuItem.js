import React from 'react';
import {StyleSheet, View,Text, Image} from "react-native";
import ColourPalette from "../ColourPalette";


const MenuItem = ({item}) => {



    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>£{item.price}</Text>
            </View>
            <View style={styles.rightSide}>
                <Image style={styles.image} source={item.image}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
        maxHeight: 100,
        borderColor: ColourPalette.grey,
        borderWidth: 0.5,

    },
    leftSide: {
        width: '75%'
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
    rightSide:{
        width: '25%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    image:{
        width: '80%',
        height: 70,
    }


});

export default MenuItem
