import React from 'react';
import {SafeAreaView} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const PaymentScreen = () => {



    return (
        <SafeAreaView style = {{paddingTop: 50}}>
            <CreditCardInput  />
        </SafeAreaView>

    );
}



export default PaymentScreen;
