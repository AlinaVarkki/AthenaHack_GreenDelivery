import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from "./DrawerNavigator";

import FeedScreen from "../Screens/FeedScreen";


const Stack = createStackNavigator();

const MainNavigator  = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="FeedScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
            <Stack.Screen name='FeedScreen' component={FeedScreen}/>
        </Stack.Navigator>

    </NavigationContainer>

)

export default MainNavigator;
