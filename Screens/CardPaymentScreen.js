import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CreditCardInput} from "react-native-credit-card-input";
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";

const CardPaymentScreen = () => {

    console.disableYellowBox = true;

    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={{paddingTop: 50}}>
            <TouchableOpacity onPress={openSideMenu}>
                <View style={styles.sideMenuButton}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color={ColourPalette.green}/>
                </View>
            </TouchableOpacity>

            <View style={{padding: 30, paddingTop: 130}}>
                <CreditCardInput/>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 5,
    },
});

export default CardPaymentScreen;
