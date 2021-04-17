import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "../Screens/WelcomeScreen";
import DrawerNavigation from "./DrawerNavigation";
import MenuScreen from "../Screens/MenuScreen";

const Stack = createStackNavigator();

const StackNavigation  = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
            <Stack.Screen name="MenuScreen" component={MenuScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
)

export default StackNavigation;
