import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";
import {useNavigation} from '@react-navigation/native';
import FavouritesFeed from "../Components/FavouritesFeed";

export default function FeedScreen() {

    console.disableYellowBox = true;

    const navigation = useNavigation();

    const openSideMenu = () => {
        navigation.openDrawer();
    };


    return (
        <SafeAreaView style={styles.feedScreen}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={openSideMenu}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color={ColourPalette.green}/>
                </TouchableOpacity>
                <View style={styles.sideMenuButton}>
                </View>
                <View style={styles.topLeftSection}>
                    <Text style={styles.locationText}>Favourites <Icon style={{paddingRight: 5, paddingTop: 10,}}
                                                                       name='heart' size={25}
                                                                       color={ColourPalette.green}/></Text>
                </View>
            </View>
            <FavouritesFeed style={styles.feed}/>
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
        height: '20%',
        flexDirection: 'row',
    },
    sideMenuButton: {
        paddingVertical: '8%',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    topLeftSection: {
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: 210,
        marginBottom: 15
    },

    locationText: {
        paddingTop: 40,
        paddingRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: ColourPalette.green,
        alignSelf: 'center'
    },
})
