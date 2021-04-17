import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CreditCardInput} from "react-native-payment-card";
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";

const CardPaymentScreen = () => {

    //uncomment later
    // console.disableYellowBox = true;

    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style = {{paddingTop: 50}}>
            <TouchableOpacity onPress={openSideMenu}>
            <View style={styles.sideMenuButton}>
                <Icon style={styles.sideMenuButton} name='three-bars' size={37} color= {ColourPalette.green} />
            </View>
                </TouchableOpacity>

            <CreditCardInput

                autoFocus
                requiresName
                requiresCVC
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
            />
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
