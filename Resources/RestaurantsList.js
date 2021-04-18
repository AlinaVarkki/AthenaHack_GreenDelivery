
export default class RestList{

    static restaurantsList = [
        {
            restaurant_id: 0,           //pizza
            title: 'Paesano',
            category: 'Italian • Pizza',
            deliveryTime: "20 - 25",
            priceCategory: "£",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/paesano.png'),
            address: '94 Miller St, Glasgow G1 1DT'
        },
        {
            restaurant_id: 1,           //asian
            title: 'Wagamama',
            category: 'Asian • Curry',
            deliveryTime: "30 - 35",
            priceCategory: "£££",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/wagamama.png'),
            address: '97 W George St, Glasgow G2 1PB'

        },{
            restaurant_id: 2,
            title: 'Starbucks',     //cafe
            category: 'Coffee • Cakes',
            deliveryTime: "10 - 15",
            priceCategory: "£",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/starbucks.png'),
            address: '9 Exchange Pl, Glasgow G1 3AN'

        },{
            restaurant_id: 3,
            title: 'Picnic',                //soup
            category: 'Soups • Vegan',
            deliveryTime: '5 - 10',
            priceCategory: "££",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/picnic.png'),
            address: '103 Ingram St, Glasgow G1 1DX'

        },{
            restaurant_id: 4,
            title: 'Obsession of India',        //general
            category: 'Indian • Traditional',
            deliveryTime: '15 - 20',
            priceCategory: "£££",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/indian.png'),
            address: '25 High St, Glasgow G1 1LX'

        }, {
            restaurant_id: 5,
            title: 'YO!Sushi',        //asian
            category: 'Asian • Sushi',
            deliveryTime: '25 - 30',
            priceCategory: "££",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/sushi.png'),
            address: '85 W George St, Glasgow G2 1QG'

        },
        {
            restaurant_id: 6,
            title: 'Stack & Still',        //general
            category: 'Pancakes • Brunch',
            deliveryTime: '30 - 35',
            priceCategory: "£££",
            deliveryPrice: 'FREE',
            image: require('../Images/CoverPhotos/pancakes.png'),
            address: '100 West George St, Glasgow, G2 1PJ'

        },
        {
            restaurant_id: 7,
            title: 'Bread Meats Bread',        //general
            category: 'Burgers • Vegan options',
            deliveryTime: '40 - 45',
            priceCategory: "££",
            deliveryPrice: 1.5,
            image: require('../Images/CoverPhotos/burgers.png'),
            address: '65 St Vincent St, Glasgow G2 5'
        },
    ]

}
