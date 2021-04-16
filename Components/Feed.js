import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Restaurant from "./Restaurant";

export default function Feed(){

    const [listings, setListings] = useState([
        {
            listing_id: 1,
            title: 'restur',
            category: 'food',
            timeSincePosting: 5,
            priceCategory: "$$$",
            distance: 4
        },{
            listing_id: 2,
            title: 'restur',
            category: 'food',
            timeSincePosting: 5,
            priceCategory: "$$$",
            distance: 4
        },{
            listing_id: 3,
            title: 'restur',
            category: 'food',
            timeSincePosting: 5,
            priceCategory: "$$$",
            distance: 4
        },{
            listing_id: 4,
            title: 'restur',
            category: 'food',
            timeSincePosting: 5,
            priceCategory: "$$$",
            distance: 4
        },
    ]);

    const listingRender = ({ item }) => (
        <Restaurant
            listing_id = {item.listing_id}
            title={item.title}
            category={item.category}
            timeSincePosting={item.timeSincePosting}
            priceCategory={item.priceCategory}
            distance={item.distance}
        />
    );

    return (
        <FlatList style = {{flex: 1}} showsVerticalScrollIndicator={false}
                  data = {listings}
                  keyExtractor = {item => item.listing_id.toString()}
                  renderItem={listingRender}
        />
    );
}
