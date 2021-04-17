import React from 'react';
import {StyleSheet, View,Text, Image} from "react-native";
import ColourPalette from "../ColourPalette";
import Button from "./Button";



const CartItem = ( {item, onPressPlus, onPressMinus} ) => {


    return (
        <View style={styles.container}>
           <View style={styles.quantity}>
               <Text style={{ fontSize: 16, fontWeight:'bold'}}>{item.quantity}</Text>
           </View>
            <View style={styles.title}>
                <Text style={{ fontSize: 16, fontWeight:'bold'}}>{item.title}</Text>
            </View>
            <View style={styles.priceAndButtons}>
            <View style={styles.price}>
                <Text style={{ fontSize: 16}}>£{item.price*item.quantity}</Text>
            </View>
            <View style={styles.buttons}>
                <Button name="-" onPress={onPressMinus} size={40}/>
                <Button name="+" onPress={onPressPlus} size={35}/>
            </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flex: 10,
        marginTop:20,
        width: '100%',
        height: '17%',
        // backgroundColor:'yellow',
        borderBottomWidth:1,
        borderColor: ColourPalette.grey,

    },
    quantity:{
        height: '100%',
        flex:1,
        // justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        flex: 7,
        // justifyContent: 'center',

    },
    price: {
        justifyContent: 'center',
        alignItems:'center'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor:'red',
    },
    priceAndButtons: {
        flex: 2,
        justifyContent: 'center',
    },

    // container: {
    //     paddingVertical: 5,
    //     flexDirection: 'row',
    //     height: 100,
    //     borderColor: ColourPalette.grey,
    //     borderTopWidth: 0.5,
    //     borderBottomWidth: 0.5,
    //
    // },
    // leftSide: {
    //     width: '65%'
    // },
    // title: {
    //     fontWeight: 'bold',
    //     fontSize: 16,
    // },
    // description: {
    //     paddingVertical: 3,
    // },
    // price: {
    //     color: ColourPalette.darkGreen,
    //     fontWeight: 'bold'
    // },
    // imagePart:{
    //     width: '25%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // image:{
    //     width: '75%',
    //     height: 70,
    // },
    // rightSide: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '10%',
    // },


});

export default CartItem
