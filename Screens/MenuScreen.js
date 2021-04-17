import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View, SectionList} from 'react-native';
import ColourPalette from "../ColourPalette";
import {SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import MenuItem from "../Components/MenuItem";
import RestaurantMenus from "../Resources/RestaurantMenus";

const MenuScreen = ({restaurantMenu}) => {

    console.log(restaurantMenu);
    const m = RestaurantMenus.menus


    const [total, updateTotal] = useState(0.00);

    const restaurant = {
        restaurant_id: 1,
        title: 'Taco Bell',
        category: 'Mexican • Burrito',
        deliveryTime: "20 - 25",
        priceCategory: "££",
        deliveryPrice: 2,
        image : require('../Resources/food.jpg')
    };

    const [menu, setMenu] = useState(m);


    const renderCategories = ({item})=> (
        <Text style={styles.option}>{item.title}</Text>
    );
    //
    // const renderMenuItem = ({ item }) => (
    //     <MenuItem title={item} />
    // );

    // const showMenu = () => {
    //     return (
    //         <SectionList
    //         data={menu}
    //         renderItem={renderMenuItem}
    //         keyExtractor={(item, index) => item + index}
    //         renderSectionHeader={({ section: { category } }) => (
    //                     <Text style={styles.menuHeader}>{category}</Text>
    //                   )}
    //     />
    //     )
    // };

    //keyExtractor={(item, index) => item + index}
    //       renderItem={({ item }) => <Item title={item} />}
    //       renderSectionHeader={({ section: { title } }) => (
    //         <Text style={styles.header}>{title}</Text>
    //       )}
    //     />

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
                <FlatList
                    data={menu}
                    renderItem={renderCategories}
                    keyExtractor={item => item.title}
                    horizontal ={true}
                />
            </View>
            <View style={styles.menu}>
                <MenuItem onPress={()=>console.log("hello box")}/>
                <SectionList
                    sections={menu}
                    renderItem={({item}) => <MenuItem item={item} onPress={()=>console.log("hello"+item.id)}/>}
                    keyExtractor={(item, index) => index}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.menuHeader}>{title}</Text>
                    )}
                />
            </View>
            <View style={styles.bottomPart}>
                <Text>Total £{total} • Items </Text>
            </View>

        </SafeAreaView>



    )

}


const styles = StyleSheet.create({
    container: {
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
        backgroundColor: ColourPalette.lightPurple,
        justifyContent: 'center',
        padding: 10,
    },
    horizontalOptions: {
        height: '7%',
    },

    option:{
        backgroundColor: ColourPalette.purple,
        color: 'white',
        fontSize: 15,
        padding: 7,
        margin: 7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menu: {
        height: '45%',
        paddingHorizontal: 10,
        // backgroundColor: ColourPalette.grey,
    },
    menuHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
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
    bottomPart: {
        backgroundColor: 'white',
        height: '7%',
        borderTopWidth: 1.5,
        borderColor: ColourPalette.purple,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default MenuScreen
