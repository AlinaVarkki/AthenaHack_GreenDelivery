import React from 'react';
import FeedScreen from "../Screens/FeedScreen";
import ColourPalette from "../ColourPalette";
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Feed" drawerType='back'
                          drawerStyle={{width: '55%',
                              backgroundColor: ColourPalette.green,
                              paddingTop: '10%',
                          }}
                          drawerContentOptions={{
                              activeTintColor: ColourPalette.green,
                              activeBackgroundColor: ColourPalette.green,
                              inactiveTintColor: ColourPalette.green,
                              itemStyle: {
                              },
                              labelStyle:{
                                  marginLeft:5,
                                  padding: 2.5,
                                  fontSize: 17.5,
                              }}}
        >
            <Drawer.Screen name="Feed" component={FeedScreen}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
