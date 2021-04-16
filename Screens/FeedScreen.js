import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColourPalette from "../ColourPalette";
import IconButton from "../Components/IconButton";
import Feed from "../Components/Feed";

export default function FeedScreen(){


    return (
        <SafeAreaView style = {styles.feedScreen} >
            <View style = {styles.topSection}>
                <View style={styles.sideMenuButton}>
                    {/*<IconButton iconName='bars' iconBgColor={ColourPalette.darkGreen} size={50}/>*/}
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
        paddingVertical: '5%',
        paddingRight: 15,
    },
    topLeftSection:{
        flex:1,
        justifyContent: 'center',
    },

    locationText:{
        fontSize: 24,
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        color: ColourPalette.purple,
    },
    text:{
        fontSize: 15,
        fontFamily: 'Ubuntu',
        color: ColourPalette.green
    },
    bottomSection:{
        paddingTop: 10,
        alignItems: 'center',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    filterMenu: {
        backgroundColor: ColourPalette.darkGreen,
        height: '40%',
        zIndex:1,
        borderRadius: 20,
        marginTop: 10,
    },
    filterMenuTitle: {
        fontSize: 25,
        color: ColourPalette.grey,
        marginLeft: 20,
        marginTop: 15,
        fontWeight: 'normal'
    },
    sortBy: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})
