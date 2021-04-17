import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import ColourPalette from "../ColourPalette";

export default function IconButton({iconName, onPress, iconBgColor, size = 40}){

    return (
        <View style = {{elevation: 5, width: size, height: size, borderRadius: size / 2, backgroundColor: iconBgColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom:5}}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={iconName} size={size / 2} color= {iconBgColor === ColourPalette.darkGreen ? ColourPalette.yellow : ColourPalette.darkGreen} />
            </TouchableOpacity>
        </View>
    );
}
