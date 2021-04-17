import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Restaurant from "./Restaurant";
import FavouritesRestaurant from "./FavouritesRestaurant";

export default function Feed(){

    const [listings, setListings] = useState([
        {
            restaurant_id: 1,
            title: 'Taco Bell',
            category: 'Mexican • Burrito',
            deliveryTime: "20 - 25",

            deliveryPrice: 2,
            image : require('../Resources/food.jpg'),
            logo: require('../Resources/Logos/starbucks.png')
        },{
            restaurant_id: 2,
            title: 'Paesano',
            category: 'Italian • Pizza',
            deliveryTime: "30 - 35",
            deliveryPrice: 4,
            image : require('../Resources/food.jpg'),
            logo: require('../Resources/Logos/picnic.png')
        }
    ]);

    const listingRender = ({ item }) => (
        <FavouritesRestaurant
            restaurant_id = {item.restaurant_id}
            title={item.title}
            category={item.category}
            deliveryTime={item.deliveryTime}
            priceCategory={item.priceCategory}
            deliveryPrice={item.deliveryPrice}
            image ={item.image}
            logo={item.logo}
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
