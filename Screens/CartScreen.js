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

    const [order,setOrder] = useState(props.route.params.order);
    const [total,setTotal] = useState(props.route.params.total);
    const deliveryFee = props.route.params.delivery;
    const [totalTotal, setTotalTotal] = useState((100*total+100*deliveryFee)/100);

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
        console.log(item)
        console.log(order)
        changeThat(item.id, 1);
    };

    const changeThat = (chosenId, value) => {
        for (let i = 0; i < order.length; i++) {
            if (order[i].id == chosenId) {
                order[i].quantity += value;
                setOrder(order);
                setTotal((100*total + 100*value*order[i].price)/100);
                setTotalTotal((100*total+100*deliveryFee)/100);
                return ;
            }
        }
    };

    const closePage = () => {
        console.log("closing");
        navigation.navigate("MenuScreen");
    }

    const orderSubmitted = () => {
        console.log("submitting");

    }

    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity  onPress = {closePage} onClick={closePage} style={styles.closeButton}>
                {/*<View >*/}
                    <Icon1 name='close' size={37} color= {ColourPalette.green} />
                {/*</View>*/}
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
                <View style={styles.paymentLine}><Text style={{color: ColourPalette.grey}}>Subtotal</Text><Text style={{color: ColourPalette.grey}}>£{total}</Text></View>
                <View style={styles.paymentLine}><Text style={{color: ColourPalette.grey}}>Delivery cost</Text><Text style={{color: ColourPalette.grey}}>£{deliveryFee}</Text></View>
                <View style={styles.paymentLine}><Text style={{fontWeight:'bold',color: ColourPalette.grey}}>Total</Text><Text style={{color: ColourPalette.grey}}>£{totalTotal}</Text></View>

            </View>

            <View style={styles.turtlePart}>
                <Image source={require('../Resources/zoomedContainers.jpg')} style={styles.turtleImage}/>
                <View style={styles.turtleText}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>You will save one turtle <Icon name="bulb1" size={25} color={ColourPalette.purple}/></Text>
                    <Text style={{fontSize: 15}}>lorem ipsum lorem ipsum</Text>
                </View>
            </View>

            <View style={styles.orderButton}>
                <TouchableWithoutFeedback style={styles.orderButton} onPress={orderSubmitted}>
                    <Text style={styles.buttonText}>Order (£{total})</Text>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>

    );
}

const {height} = Dimensions.get("screen");


const styles = StyleSheet.create({

    container:{
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
        paddingBottom:15,
    },
    title: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 30,
        padding: 5,
    },
    horizontalOptions: {
        maxHeight: height*0.4,
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
    turtlePart: {
        height: height*0.15,
        width:'100%',
        backgroundColor: ColourPalette.lightPurple,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius:15,
        paddingHorizontal: height*0.03,
        paddingVertical: height*0.025,

        flexDirection: 'row',


    },
    turtleImage: {
        width: height*0.1,
        height: height*0.1,
    },
    turtleText: {
        paddingLeft: 10,
    },

    orderButton: {
        height: '7%',
        width:'100%',
        backgroundColor: ColourPalette.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:7,
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
