import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Restaurant from "./Restaurant";
import FavouritesRestaurant from "./FavouritesRestaurant";

export default function Feed(){

    const [listings, setListings] = useState([
        {
            restaurant_id: 2,
            title: 'Starbucks',     //cafe
            category: 'Coffee • Cakes',
            deliveryTime: "10 - 15",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/starbucks.png'),
            logo: require('../Resources/Logos/starbucks.png'),
            address: '9 Exchange Pl, Glasgow G1 3AN'

        },{
            restaurant_id: 3,
            title: 'Picnic',                //soup
            category: 'Soups • Vegan',
            deliveryTime: '5 - 10',
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/picnic.png'),
            logo: require('../Resources/Logos/picnic.png'),
            address: '103 Ingram St, Glasgow G1 1DX'

        },
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
