
export default class RestList{

    static restaurantsList = [
        {
            restaurant_id: 0,           //pizza
            title: 'Paesano',
            category: 'Italian • Pizza',
            deliveryTime: "20 - 25",
            priceCategory: "£",
            deliveryPrice: 2,
            image: require('../Resources/food.jpg'),
            address: '94 Miller St, Glasgow G1 1DT'
        },
        {
            restaurant_id: 1,           //asian
            title: 'Wagamama',
            category: 'Asian • Curry',
            deliveryTime: "30 - 35",
            priceCategory: "£££",
            deliveryPrice: 3,
            image: require('../Resources/food.jpg'),
            address: '97 W George St, Glasgow G2 1PB'

        },{
            restaurant_id: 2,
            title: 'Starbucks',     //cafe
            category: 'Coffee • Cakes',
            deliveryTime: "10 - 15",
            priceCategory: "£",
            deliveryPrice: 2,
            image: require('../Resources/food.jpg'),
            address: '9 Exchange Pl, Glasgow G1 3AN'

        },{
            restaurant_id: 3,
            title: 'Picnic',                //soup
            category: 'Soups • Vegan',
            deliveryTime: '5 - 10',
            priceCategory: "££",
            deliveryPrice: 3.50,
            image: require('../Resources/food.jpg'),
            address: '103 Ingram St, Glasgow G1 1DX'

        },{
            restaurant_id: 4,
            title: 'Obsession of India',        //general
            category: 'Indian • Traditional',
            deliveryTime: '15 - 20',
            priceCategory: "£££",
            deliveryPrice: 4,
            image: require('../Resources/food.jpg'),
            address: '25 High St, Glasgow G1 1LX'

        }, {
            restaurant_id: 5,
            title: 'YO!Sushi',        //asian
            category: 'Asian • Sushi',
            deliveryTime: '25 - 30',
            priceCategory: "££",
            deliveryPrice: 2.5,
            image: require('../Resources/food.jpg'),
            address: '85 W George St, Glasgow G2 1QG'

        },
        {
            restaurant_id: 6,
            title: 'Stack & Still',        //general
            category: 'Pancakes • Brunch',
            deliveryTime: '30 - 35',
            priceCategory: "£££",
            deliveryPrice: 3,
            image: require('../Resources/food.jpg'),
            address: '100 West George St, Glasgow, G2 1PJ'

        },
        {
            restaurant_id: 7,
            title: 'Bread Meats Bread',        //general
            category: 'Burgers • Vegan options',
            deliveryTime: '40 - 45',
            priceCategory: "££",
            deliveryPrice: 1.5,
            image: require('../Resources/food.jpg'),
            address: '65 St Vincent St, Glasgow G2 5'
        },
    ]

}
