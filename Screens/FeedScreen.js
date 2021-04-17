import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ColourPalette from "../ColourPalette";
import Feed from "../Components/Feed";
import Icon from "react-native-vector-icons/Octicons";
import {useNavigation} from '@react-navigation/native';

export default function FeedScreen(){


    const navigation = useNavigation();

    const openSideMenu = () => {
        navigation.openDrawer();
        console.log("hey");
    };


    return (
        <SafeAreaView style = {styles.feedScreen} >
            <View style = {styles.topSection}>
                <TouchableOpacity onPress={openSideMenu}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color= {ColourPalette.green} />
                </TouchableOpacity>
                <View style={styles.sideMenuButton}>
                </View>
                <View style = {styles.topLeftSection}>
                    <Text style = {styles.text}>Your GREEN delivery</Text>
                    <Text style = {styles.locationText}>GL 1QL, Glasgow</Text>
                </View>
            </View>
            <Feed style = {styles.feed}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    feed: {
        position: 'absolute',
        zIndex: 0,
    },
    feedScreen: {
        padding: 12,
        paddingTop: 15,
        height: '100%',
        width: '100%',

    },
    topSection: {
        height: '15%',
        flexDirection: 'row',
    },
    sideMenuButton: {
        paddingVertical: '8%',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    topLeftSection:{
        flex:1,
        justifyContent: 'center',
    },

    locationText:{
        fontSize: 26.5,
        // fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        color: ColourPalette.purple,
        alignSelf: 'flex-end'
    },
    text:{
        fontSize: 16.5,
        // fontFamily: 'Ubuntu',
        color: ColourPalette.green,
        alignSelf: 'flex-end'
    },
    bottomSection:{
        paddingTop: 10,
        alignItems: 'center',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
