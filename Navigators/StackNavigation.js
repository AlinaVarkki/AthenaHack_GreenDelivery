import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "../Screens/WelcomeScreen";
import DrawerNavigation from "./DrawerNavigation";
import CartScreen from "../Screens/CartScreen";
import MenuScreen from "../Screens/MenuScreen";

import RestaurantMenus from "../Resources/RestaurantMenus";
import FeedScreen from "../Screens/FeedScreen";
import OrderedAnimationScreen from "../Screens/OrderedAnimationScreen";

const Stack = createStackNavigator();

const StackNavigation  = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
            <Stack.Screen name="MenuScreen" component={MenuScreen} initialParams={{idR: 0}}/>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="OrderedAnimationScreen" component={OrderedAnimationScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
)

export default StackNavigation;
