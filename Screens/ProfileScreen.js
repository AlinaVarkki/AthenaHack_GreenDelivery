import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";

const ProfileScreen = () => {


    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style = {{paddingTop: 50, backgroundColor: 'white', height: '100%'}}>


            <TouchableOpacity onPress={openSideMenu}>
                <View style={styles.sideMenuButton}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color= {ColourPalette.green} />
                </View>
            </TouchableOpacity>

            <Image style = {{alignSelf: "center", height: 150, width:150, marginBottom: 50}} source={require('../Images/profilePhoto.jpg')}/>

            <View style = {{backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, justifyContent:'center', paddingLeft: 15, margin:10}}>
                <Text >Name</Text>
                <Text style={{fontWeight: "bold"}}>Slavka Borovska</Text>
            </View>
            <View style = {{backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, justifyContent:'center', paddingLeft: 15, margin:10}}>
                <Text >Email</Text>
                <Text style={{fontWeight: "bold"}}>slavkaborovska@gmail.com</Text>
            </View>
            <View style = {{backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, justifyContent:'center', paddingLeft: 15, margin:10}}>
                <Text >Phone</Text>
                <Text style={{fontWeight: "bold"}}>+44 8484 567838</Text>
            </View>
            <View style = {{backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, justifyContent:'center', paddingLeft: 15, margin:10}}>
                <Text >Address</Text>
                <Text style={{fontWeight: "bold"}}>G1 1QL, 1-4 Personage row</Text>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 15,
        paddingLeft: 10,
        paddingBottom: 5,
    },
});

export default ProfileScreen;
