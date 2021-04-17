import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import ColourPalette from "../ColourPalette";
import {SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';



const MenuScreen = (props) => {

    const restaurant = {
        restaurant_id: 1,
        title: 'Taco Bell',
        category: 'Mexican • Burrito',
        deliveryTime: "20 - 25",
        priceCategory: "££",
        deliveryPrice: 2,
        image : require('../Resources/food.jpg')
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.listing}>
                <View style = {styles.upperSection}>
                    <Image style = {styles.image} source={restaurant.image} />
                </View>
                <View style = {styles.lowerSection}>
                    <View style = {styles.lowerLeftSection}>
                        <Text style = {styles.headerText}>{restaurant.title}</Text>
                        <View style = {styles.categoryAndPriceSection}>
                            <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.category}</Text>
                            <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.priceCategory}</Text>
                        </View>
                    </View>
                    <View style = {styles.lowerRightSection}>
                        <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.deliveryTime} min</Text>
                        <Text style = {{color: ColourPalette.darkGreen, opacity: .6}}>£{restaurant.deliveryPrice} delivery</Text>
                    </View>
                </View>
            </View>
            <View style={styles.restaurantInfo}>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Restaurant info </Text>
                <Text><Icon name='enviroment' size={17} color={'black'}/> Personage row 1-4, G1 1QL</Text>

            </View>
            <View style={styles.horizontalOptions}>

            </View>
            <View style={styles.menu}>

            </View>

        </SafeAreaView>



    )

}


const styles = StyleSheet.create({
    container: {
        // height: 260,
        width: '100%',
        height: '100%',
    },
    listing: {
        flex:1,
        backgroundColor: '#fff',
        // marginBottom: 20,
        overflow: 'hidden',
        width: '100%',
        // height: 260,
        elevation: 0.5,

    },
    restaurantInfo: {
        height: '8%',
        backgroundColor: '#ffefff',
        justifyContent: 'center',
        padding: 10,
    },
    horizontalOptions: {
        height: '6%',
    },
    menu: {
        height: '52%',
        backgroundColor: ColourPalette.grey,
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
        color: 'black',
        fontWeight: 'bold',
    },
})


export default MenuScreen
