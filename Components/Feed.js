import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Restaurant from "./Restaurant";

export default function Feed(){

    const [listings, setListings] = useState([
        {
            restaurant_id: 1,
            title: 'Taco Bell',
            category: 'Mexican • Burrito',
            deliveryTime: "20 - 25",
            priceCategory: "££",
            deliveryPrice: 2,
            image : require('../Resources/food.jpg')
        },{
            restaurant_id: 2,
            title: 'Paesano',
            category: 'Italian • Pizza',
            deliveryTime: "30 - 35",
            priceCategory: "£",
            deliveryPrice: 4,
            image : require('../Resources/food.jpg')
        },{
            restaurant_id: 3,
            title: 'restur',
            category: 'food',
            deliveryTime: 5,
            priceCategory: "$$$",
            deliveryPrice: 4,
            image : require('../Resources/food.jpg')
        },{
            restaurant_id: 4,
            title: 'restur',
            category: 'food',
            deliveryTime: 5,
            priceCategory: "$$$",
            deliveryPrice: 4,
            image : require('../Resources/food.jpg')
        },
    ]);

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
