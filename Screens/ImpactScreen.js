import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/FontAwesome5";

const ImpactScreen = () => {


    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={{paddingTop: 50, backgroundColor: 'white'}}>
            <TouchableOpacity onPress={openSideMenu}>
                <View style={styles.sideMenuButton}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color={ColourPalette.green}/>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>

                <View style={{flex: 1, marginLeft: 19}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 70, fontWeight: 'bold', color: "#36383d"}}>12</Text>
                        <Text style={{
                            fontSize: 50,
                            fontWeight: 'bold',
                            color: "#36383d",
                            alignSelf: "flex-end",
                            marginBottom: 4
                        }}>%</Text>
                    </View>
                    <Text style={{marginLeft: 5, fontSize: 17}}>less CO2 emissions</Text>

                    <View style={{flexDirection: 'row', marginTop: 13}}>
                        <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                               color={ColourPalette.purple}/>
                        <View>
                            <Text style={{
                                fontSize: 23,
                                fontWeight: 'bold',
                                color: "#36383d",
                                margin: -5,
                                marginLeft: 1.5
                            }}>20</Text>
                            <Text>turtles saved</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 13}}>
                        <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                               color={ColourPalette.green}/>
                        <View>
                            <Text style={{
                                fontSize: 23,
                                fontWeight: 'bold',
                                color: "#36383d",
                                margin: -5,
                                marginLeft: 1.5
                            }}>20</Text>
                            <Text>turtles saved</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 13}}>
                        <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                               color={ColourPalette.darkGreen}/>
                        <View>
                            <Text style={{
                                fontSize: 23,
                                fontWeight: 'bold',
                                color: "#36383d",
                                margin: -5,
                                marginLeft: 1.5
                            }}>20</Text>
                            <Text>turtles saved</Text>
                        </View>
                    </View>

                </View>
                <View style={{flex: 1}}>
                    <Text style={{
                        fontSize: 26,
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        marginTop: -40,
                        color: ColourPalette.green,
                        fontWeight: 'bold'
                    }}>My GREEN</Text>
                    <Text style={{
                        fontSize: 26,
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        marginTop: -5,
                        color: ColourPalette.green,
                        fontWeight: 'bold'
                    }}>Impact</Text>
                </View>

            </View>

            <Image style = {{width: 300, height:300, marginLeft: 134, marginTop: -163}} source={{uri: 'https://media.giphy.com/media/Xlrd0dWPniCXxIoG2V/giphy.gif'}}/>

            <View style={{flexDirection: 'row', backgroundColor: ColourPalette.darkGreen}}>
                <Image source={require('../Resources/zoomedContainers.jpg')} style={{height: 70, width: 70}}/>
                <View style ={{  }}>
                    <Text>15 purchases total</Text>
                    <Text>lorem ipsum lorem ipsum</Text>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 10,
        paddingLeft: 5,
        paddingBottom: 5,
    },
});

export default ImpactScreen;
