import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";

const ImpactScreen = () => {


    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style = {{paddingTop: 50, backgroundColor: 'white'}}>
            <ImageBackground source={require('../Resources/Impact.png')} style={{  width: '100%', height: '100%'}}>
                <TouchableOpacity onPress={openSideMenu}>
                    <View style={styles.sideMenuButton} >
                        <Icon style={styles.sideMenuButton} name='three-bars' size={37} color= {ColourPalette.green} />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 10,
        paddingLeft: 5,
        paddingBottom: 5,
    },
});

export default ImpactScreen;
