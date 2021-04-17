import ColourPalette from "../ColourPalette";
import {TouchableOpacity, Text,StyleSheet} from "react-native";
import React from "react";


export default function Button({onPress}){
    return (
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
            <Text style = {styles.text} >+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {

    },
    text: {
        color: ColourPalette.purple,
        fontSize:40,
    }
});
