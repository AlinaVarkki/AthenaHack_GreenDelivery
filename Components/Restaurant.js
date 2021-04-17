import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import ColourPalette from "../ColourPalette";
import {useNavigation} from "@react-navigation/native";

import RestaurantMenus from "../Resources/RestaurantMenus";

function Restaurant({restaurant_id, title, category, image, deliveryTime, priceCategory, deliveryPrice, timeMeasurement}){



    const navigation = useNavigation();

    function seeListing(){
        global.currentListing = restaurant_id;
        navigation.navigate('MenuScreen')
    }

    return (
        <TouchableWithoutFeedback onPress = {seeListing}>
            <View style = {styles.listing}>
                <View style = {styles.upperSection}>
                    <Image style = {styles.image} source={image} />
                </View>
                <View style = {styles.lowerSection}>
                    <View style = {styles.lowerLeftSection}>
                        <Text style = {styles.headerText}>{title}</Text>
                        <View style = {styles.categoryAndPriceSection}>
                            <Text style = {{color: ColourPalette.darkGreen}}>{category}</Text>
                            <Text style = {{color: ColourPalette.darkGreen}}>{priceCategory}</Text>
                        </View>
                    </View>
                    <View style = {styles.lowerRightSection}>
                        <Text style = {{color: ColourPalette.darkGreen}}>{deliveryTime} {timeMeasurement} min</Text>
                        <Text style = {{color: ColourPalette.darkGreen, opacity: .6}}>£{deliveryPrice} delivery</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    listing: {
        flex:1,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden',
        width: '100%',
        height: 230,
        elevation: 0.5,
    },
    upperSection: {
        flex: 7,
    },
    lowerSection: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 14,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    lowerLeftSection: {
        flex: 8,
        justifyContent: 'space-between',
    },
    lowerRightSection: {
        flex: 7,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    categoryAndPriceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 17,
        color: ColourPalette.darkGreen
    },
})

export default Restaurant;
