import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import ColourPalette from "../ColourPalette";
import Button from "./Button";

const CartItem = ({item, onPressPlus, onPressMinus}) => {

    console.disableYellowBox = true;

    return (
        <View style={styles.container}>
            <View style={styles.quantity}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.quantity}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            </View>
            <View style={styles.priceAndButtons}>
                <View style={styles.price}>
                    <Text style={{fontSize: 16}}>£{item.price * item.quantity}</Text>
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
        marginTop: 20,
        width: '100%',
        height: '17%',
        borderBottomWidth: 1,
        borderColor: ColourPalette.grey,

    },
    quantity: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        flex: 7,
    },
    price: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    priceAndButtons: {
        flex: 2,
        justifyContent: 'center',
    },

});

export default CartItem
