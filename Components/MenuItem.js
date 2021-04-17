import React from 'react';
import {StyleSheet, View,Text} from "react-native";


const MenuItem = ({title}) => {



    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({



});

export default MenuItem
