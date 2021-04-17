import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Restaurant from "./Restaurant";

export default function Feed({restaurants}){

    const [listings, setListings] = useState(restaurants);

    const listingRender = ({ item }) => (
        <Restaurant
            restaurant_id = {item.restaurant_id}
            title={item.title}
            category={item.category}
            deliveryTime={item.deliveryTime}
            priceCategory={item.priceCategory}
            deliveryPrice={item.deliveryPrice}
            image ={item.image}
        />
    );

    return (
        <FlatList style = {{flex: 1}} showsVerticalScrollIndicator={false}
                  data = {listings}
                  keyExtractor = {item => item.restaurant_id.toString()}
                  renderItem={listingRender}
        />
    );
}
