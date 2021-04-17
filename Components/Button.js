import ColourPalette from "../ColourPalette";
import {TouchableOpacity, Text,StyleSheet} from "react-native";
import React from "react";


export default function Button({name, onPress, size= 40}){
    return (
        <TouchableOpacity onPress = {onPress}>
            <Text style = {{color: ColourPalette.purple, fontSize: size}} >{name}</Text>
        </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({
//     button: {
//
//     },
//     text: {
//         color: ColourPalette.purple,
//         fontSize: 40,
//     }
// });
