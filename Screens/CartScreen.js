import React, {useEffect, useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Image,
    Dimensions
} from "react-native";
import CartItem from "../Components/CartItem";
import {useNavigation} from '@react-navigation/native';
import Icon1 from "react-native-vector-icons/Ionicons";
import ColourPalette from "../ColourPalette";
import Icon from 'react-native-vector-icons/AntDesign';

const CartScreen = (props) => {

    console.disableYellowBox = true;

    const [totalQuantity, setTotalQuantity] = useState(0);

    const [order, setOrder] = useState(props.route.params.order);
    const [total, setTotal] = useState(props.route.params.total);

    useEffect(() => {
        let q = 0
        for (let i = 0; i < order.length; i++) {
            q += order[i].quantity;
        }
        setTotalQuantity(q);
    }, [])

    const navigation = useNavigation();

    const renderItems = ({item}) => (
        <CartItem item={item} onPressPlus={() => onPressPlus(item)} onPressMinus={() => onPressMinus(item)}/>
    );

    const onPressMinus = (item) => {
        if (item.quantity > 0) {
            changeThat(item.id, -1);
        }
    };

    const onPressPlus = (item) => {

        changeThat(item.id, 1);
    };

    const changeThat = (chosenId, value) => {
        for (let i = 0; i < order.length; i++) {
            if (order[i].id == chosenId) {
                order[i].quantity += value;
                setOrder(order);
                setTotal((100 * total + 100 * value * order[i].price) / 100);
                setTotalQuantity(totalQuantity + value)
                return;
            }
        }
    };

    const closePage = () => {
        console.log("closing");
        navigation.navigate("MenuScreen");
    }

    const orderSubmitted = () => {
        if (total != 0) {
            navigation.navigate("OrderedAnimationScreen");
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity onPress={closePage} onClick={closePage} style={styles.closeButton}>
                <Icon1 name='close' size={37} color={ColourPalette.green}/>
            </TouchableOpacity>

            <View style={styles.top}>
                <Text style={styles.title}>Order</Text>
            </View>


            <View style={styles.horizontalOptions}>
                <FlatList
                    data={order}
                    renderItem={renderItems}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.paymentInfo}>
                <View style={styles.paymentLine}><Text style={{color: ColourPalette.grey}}>Subtotal</Text><Text
                    style={{color: ColourPalette.grey}}>£{total}</Text></View>
                <View style={styles.paymentLine}><Text style={{color: ColourPalette.grey}}>Delivery cost</Text><Text
                    style={{color: ColourPalette.grey}}>FREE</Text></View>
                <View style={styles.paymentLine}><Text
                    style={{fontWeight: 'bold', color: ColourPalette.grey}}>Total</Text><Text
                    style={{color: ColourPalette.grey}}>£{total}</Text></View>

            </View>

            <View style={{
                flexDirection: 'row',
                backgroundColor: ColourPalette.lightPurple,
                padding: 10,
                borderRadius: 16,
                margin: 10
            }}>
                <Image source={require('../Resources/zoomedContainers.jpg')}
                       style={{height: 70, width: 70, marginRight: 10}}/>
                <View style={{justifyContent: 'center', width: '75%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Look at you go!</Text>
                    <Text style={{fontSize: 15}}>This purchase prevents the waste of <Text
                        style={{fontWeight: 'bold'}}>{totalQuantity}</Text> single-use
                        plastic {totalQuantity == 1 ? "container" : "containers"}</Text>
                </View>
                <Icon name="bulb1" size={25} color={ColourPalette.purple}
                      style={{position: 'absolute', right: 10, top: 10}}/>
            </View>

            <TouchableWithoutFeedback style={styles.orderButton} onPress={orderSubmitted}>
                <View style={styles.orderButton}>

                    <Text
                        style={styles.buttonText}>{total === 0 ? "Your cart is empty." : "Order (£" + total + ")"}</Text>

                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
}

const {height} = Dimensions.get("screen");


const styles = StyleSheet.create({

    container: {
        padding: 20,
        paddingTop: 30,
        height: '100%',
    },
    top: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    title: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        left: 10,
        top: 25,
        padding: 5,
    },
    horizontalOptions: {
        maxHeight: height * 0.4,
    },
    paymentInfo: {
        paddingVertical: 20,
        flexDirection: 'column',
        // flex:2,
        width: '100%',

    },
    paymentLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
    },

    orderButton: {
        height: '7%',
        width: '100%',
        backgroundColor: ColourPalette.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        position: 'absolute',
        bottom: '2%',
        left: '5%'

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }

});

export default CartScreen;
