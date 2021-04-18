import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import ColourPalette from "../ColourPalette";
import Button from "./Button";

const MenuItem = ({item, onPress}) => {

    console.disableYellowBox = true;

    const imgExists = !(item.image == null)

    return (
        <View style={styles.container}>
            <View style={{width: (imgExists ? '65%' : '90%')}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>£{item.price}</Text>
            </View>
            {imgExists ? (<View style={styles.imagePart}>
                    <Image style={styles.image} source={item.image}/>
                </View>)
                : null}
            <View style={styles.rightSide}>
                <Button name="+" onPress={onPress}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
        height: 110,
        borderColor: ColourPalette.grey,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        paddingVertical: 3,
        height: 55,

        overflow: 'hidden',
    },
    price: {
        color: ColourPalette.darkGreen,
        fontWeight: 'bold'
    },
    imagePart: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
    },
    rightSide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
    },

});

export default MenuItem
