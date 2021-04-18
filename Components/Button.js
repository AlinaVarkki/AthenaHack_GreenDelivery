import ColourPalette from "../ColourPalette";
import {TouchableOpacity, Text} from "react-native";
import React from "react";

export default function Button({name, onPress, size = 40}) {

    console.disableYellowBox = true;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{color: ColourPalette.purple, fontSize: size}}>{name}</Text>
        </TouchableOpacity>
    );
}
