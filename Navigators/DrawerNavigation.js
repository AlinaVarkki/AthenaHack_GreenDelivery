import React from 'react';
import FeedScreen from "../Screens/FeedScreen";

import {createDrawerNavigator} from '@react-navigation/drawer';
import ColourPalette from "../ColourPalette";
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import CardPaymentScreen from "../Screens/CardPaymentScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import ImpactScreen from "../Screens/ImpactScreen";
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
            <Drawer.Navigator initialRouteName="Feed" drawerType='back'
                              drawerStyle={{width: '65%',
                                  backgroundColor: ColourPalette.purple,
                                  paddingTop: '10%',
                              }}
                              drawerContentOptions={{
                                  activeTintColor: 'white',
                                  activeBackgroundColor: ColourPalette.purple,
                                  inactiveTintColor: 'white',
                                  itemStyle: {
                                  },
                                  labelStyle:{
                                      marginLeft:5,
                                      padding: 2.5,
                                      fontSize: 17.5,
                                  },
                              }}
            >

                <Drawer.Screen name="My Impact" component={ImpactScreen} options={{drawerIcon: () => (<Icon3 style={ {marginLeft: 30, marginRight: -20}} name='recycle' size={30} color= {'white'} />)}}/>
                <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: () => (<Icon style={ {marginLeft: 30, marginRight: -20}} name='person-outline' size={30} color= {'white'} />)}}/>
                <Drawer.Screen name="Restaurants" component={FeedScreen} options={{drawerIcon: () => (<Icon style={ {marginLeft: 30, marginRight: -20}} name='restaurant-outline' size={30} color= {'white'} />)}}/>
                <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{drawerIcon: () => (<Icon2 style={ {marginLeft: 30, marginRight: -20}} name='favorite-outline' size={30} color= {'white'} />)}}/>
                <Drawer.Screen name="Payment" component={CardPaymentScreen} options={{drawerIcon: () => (<Icon2 style={ {marginLeft: 30, marginRight: -20}} name='payment' size={30} color= {'white'} />)}}/>
            </Drawer.Navigator>
    );
}

export default DrawerNavigation;
