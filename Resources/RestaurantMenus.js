
export default class RestaurantMenus{

    // {
    //      id: 0,
    //      title: '',
    //      description: '',
    //      price: 0,
    //      image: null,
    // },


    // image: require('../Images/Menus/')

    //paesano
    static menu0 = [
        {   title: 'Specials',
            data: [
                {
                    id: 10,
                    title: 'Special 1',
                    description: 'PORCHETTA, POTATO, ROSEMARY, FIOR DI LATTE & BASIL',
                    price: 9,
                    image: require('../Images/Menus/menu0/menu0-id10.png')
                },
                {
                    id: 11,
                    title: 'Special 2',
                    description: 'PASTAMORE, RED & YELLOW SUN BLUSH TOMATO, FIOR DI LATTE, SUGO & BASIL',
                    price: 10,
                    image: require('../Images/Menus/menu0/menu0-id11.png')
                },
                {
                     id: 12,
                     title: 'Special 3',
                     description: 'ARTICHOKE, ROASTED RED PEPPERS, OLIVES, OREGANO, GARLIC & SUGO (VEGAN)',
                     price: 8.5,
                    image: require('../Images/Menus/menu0/menu0-id12.png')
                },
            ]},
        {
            title: 'Pizza',
            data: [
                {
                    id: 1,
                    title: 'Number 1',
                    description: 'Tomato sugo with garlic, oregano and evoo',
                    price: 5,
                    image: null
                },
                {
                    id: 2,
                    title: 'Number 2',
                    description: 'Tomato sugo with mozzarella, fresh basil and evoo',
                    price: 6.5,
                    image: null
                },
                {
                    id: 3,
                    title: 'Number 3',
                    description: 'Tomato sugo with capers, olives, anchovies, mozzarella, garlic and evoo',
                    price: 8,
                    image: null
                },
                {
                    id: 4,
                    title: 'Number 4',
                    description: 'Spianata spicy salami from Calabria with tomato sugo, mozzarella and evoo',
                    price: 9,
                    image: null
                },
                {
                    id: 5,
                    title: 'Number 5',
                    description: 'Prosciutto cotto (Italian cooked ham) with mushrooms, tomato sugo, mozzarella and evoo',
                    price: 8,
                    image: null
                },
                {
                    id: 6,
                    title: 'Number 6',
                    description: 'Roasted red peppers with spinach, tomato sugo, mozzarella, ricotta and evoo',
                    price: 8,
                    image: null
                },
                {
                    id: 7,
                    title: 'Number 7',
                    description: 'Fresh Tuscan Fennel sausage with sugo, mozzarella and evoo',
                    price: 9,
                    image: null
                },
                {
                    id: 8,
                    title: 'Number 8',
                    description: 'Mushroom, spinach, mozzarella, ricotta, oregano, garlic and evoo (no tomato)',
                    price: 8.5,
                    image: null
                },
                {
                    id: 9,
                    title: 'Number 9',
                    description: 'Grilled aubergine with tomato sugo, garlic and fresh Parmesan',
                    price: 7,
                    image: null
                },

            ]},
    ]

    //wagamama
   static menu1 = [
       {
           title: 'Curry',
           data: [
               {
                   id: 1,
                   title: 'chicken katsu curry',
                   description: 'aromatic katsu curry sauce. chicken in crispy panko breadcrumbs. sticky white rice. side salad. japanese pickles',
                   price: 12.99,
                   image: null,
               },
           {
               id: 2,
               title: 'raisukaree tofu',
               description: 'mild + citrusy. coconut. mangetout. peppers. red + spring onion. sesame seeds. chilli. coriander. fresh lime. white rice',
               price: 11.99,
               image: null,
           },
           {
               id: 3,
               title: 'firecracker tofu',
               description: 'bold + fiery. tofu. mangetout. red + green peppers. onion. hot red chillies. sesame seeds. shichimi.fresh lime. white rice',
               price: 9.99,
               image: null,
           }]
       }, {
            title: 'Ramen',
            data: [
                {
                    id: 4,
                    title: 'chilli prawn + kimchee ramen',
                    description: 'marinated tail-on prawns. beansprouts. spring onion. kimchee. fresh lime. coriander',
                    price: 10.99,
                    image: require('../Images/Menus/menu1/menu1-id4.png'),
                },
                {
                    id: 5,
                    title: 'miso-glazed cod ramen',
                    description: 'with bok choi. menma. spring onion. chilli oil. light vegetable broth',
                    price: 9.99,
                    image: null,
                },

           ]
       }
   ]

    //starbucks
    static menu2 = [
        {
            title: 'Drinks',
            data: [
                {
                    id: 5,
                    title: 'Latte',
                    description: 'Our dark, rich espresso is balanced with steamed milk and topped with a light layer of foam. A perfect milk-forward warm up.',
                    price: 2.39,
                    image: require('../Images/Menus/menu2/menu2-id5.png'),
                },
                {
                    id: 6,
                    title: 'Oat Milk Latte',
                    description: "Our iconic latte now in Vegan-friendly version.",
                    price: 2.39,
                    image: require('../Images/Menus/menu2/menu2-id6.png'),
                },
                {
                    id: 7,
                    title: 'Espresso',
                    description: 'A shot of espresso with a rich flavour and caramel-like sweetness.',
                    price: 1.59,
                    image: require('../Images/Menus/menu2/menu2-id7.png'),
                },
                {
                    id: 8,
                    title: 'Caramel Macchiato',
                    description: 'Freshly steamed milk with vanilla-flavoured syrup, marked with espresso and finished with caramel sauce.',
                    price: 3.39,
                    image: require('../Images/Menus/menu2/menu2-id8.png'),
                },
                {
                    id: 9,
                    title: 'White Chocolate Mocha',
                    description: 'Espresso with white chocolate flavoured sauce and steamed milk, topped with whipped cream.\n',
                    price: 3.19,
                    image: require('../Images/Menus/menu2/menu2-id9.png'),
                },
                {
                    id: 10,
                    title: 'Cold Brew',
                    description: 'Our Cold Brew coffee is handcrafted in small batches, slow-steeped in cool water for 20 hours, without touching heat, to give a super-smooth flavour.',
                    price: 1.99,
                    image: require('../Images/Menus/menu2/menu2-id10.png'),
                },
                {
                    id: 11,
                    title: 'Java Chip Frappuccino',
                    description: 'Mocha sauce, Frappuccino® chips combined with coffee and milk, blended with ice, topped with whipped cream and mocha drizzle to bring you endless java joy.\n',
                    price: 3.59,
                    image:  require('../Images/Menus/menu2/menu2-id11.png'),
                },
                {
                    id: 12,
                    title: 'English Breakfast Tea',
                    description: 'Full-bodied black tea with rich, malty undertones.',
                    price: 2.69,
                    image: require('../Images/Menus/menu2/menu2-id12.png'),
                },
            ]},
        {
            title: 'Cakes',
            data: [
                {
                    id: 1,
                    title: 'Lemon Loaf Cake',
                    description: 'A moist buttery lemon loaf cake topped with a lemon icing glaze and caramelised lemon zest.',
                    price: 3.29,
                    image: null,
                },
                {
                    id: 2,
                    title: 'Banana Bread',
                    description: 'Banana loaf bread with pecans and walnuts.',
                    price: 3.29,
                    image: null,
                },
                {
                    id: 3,
                    title: 'Vegan Chocolate and Raspberry Mini Loaf Cake',
                    description: 'A mini vegan chocolate loaf cake injected with raspberry jam, and topped with pink icing and dried raspberry pieces.\n',
                    price: 1.89,
                    image: null,
                },
                {
                    id: 4,
                    title: 'Chocolate Truffle Loaf Cake',
                    description: 'A moist chocolate loaf cake with dark chocolate chips and topped with a milk chocolate buttercream.',
                    price: 3.29,
                    image: null,
                }
                ]
        }
    ]

    //picnic
    static menu3 = [
        {   title: 'Soups',
            data: [
                {
                    id: 1,
                    title: 'Soup of the Day',
                    description: 'Served with bread or gluten free oatcakes.',
                    price: 4,
                    image: null,
                },
                {
                    id: 2,
                    title: 'Tomato and Basil',
                    description: 'Served with bread or gluten free oatcakes.',
                    price: 4.25,
                    image: null,
                },
                {
                    id: 3,
                    title: 'Vegetable Stew',
                    description: 'Served with bread or gluten free oatcakes.',
                    price: 4.25,
                    image: null,
                },
            ]
        },
        {   title: 'Hot Dishes',
            data: [
                {
                    id: 4,
                    title: 'Curry of the Day',
                    description: 'A delicious, authentic Indian curry, served with brown rice.',
                    price: 7.50,
                    image: null,
                },
                {
                    id: 5,
                    title: 'Baked Sweet Potato',
                    description: 'Baked sweet potato topped with hummus, sun-dried tomatoes, pesto & rocket or topped with our Curry of the Day (add £1).',
                    price: 6,
                    image: null,
                }
                ]
        },
        {   title: 'Sandwiches',
            data: [
                {
                    id: 6,
                    title: 'Mediterranean Vegetable Focaccia',
                    description: 'Mediterranean vegetables with homemade pesto and cheese in Italian bread, served toasted.',
                    price: 5.75,
                    image: null,
                },
                {
                    id: 7,
                    title: 'Bagel with Hummus',
                    description: 'A toasted bagel filled with hummus, red pepper, lambs lettuce and cucumber.',
                    price: 5,
                    image: null,
                },
                {
                    id: 8,
                    title: 'Pastramheat Salad Sandwich',
                    description: 'Locally made, award winning pastramheat, combined with cashew creme, spinach, tomatoes and sauerkraut in a toasted sourdough sandwich.',
                    price: 6,
                    image: null,
                },
                {
                    id: 9,
                    title: 'Tuno Melt Wrap',
                    description: 'Tasty homemade vegan ‘tuna’ mayo with Sheese cheddar and cos lettuce in a toasted wrap.',
                    price: 5.75,
                    image: null,
                },
            ]
        },

    ]

    //indian
    static menu4 = [
        {title: 'Traditional Main Dishes',
        data: [
            {
                id: 0,
                title: 'KORMA',
                description: 'A traditional, mild North Indian recipe. An unforgettable dish when served on a bed of pilau rice with some Peshwari naan.',
                price: 11,
                image: null,
            },
            {
                id: 1,
                title: 'JAIPURI',
                description: 'A potent fusion of peppers, onions, garlic, ginger and tomato with a touch of tangy sweet "n" sour simmered in exotic jaipuri spices.',
                price: 10,
                image: null,
            },
            {
                id: 2,
                title: 'TANDOORI MASALA',
                description: 'Made with capsicums,onion and medium tandoori masala sauce. Medium Hot.',
                price: 12,
                image: null,
            },
            {
                id: 3,
                title: 'SOUTH INDIAN GARLIC CHILLI',
                description: 'Garlicky and spicy, chicken chilli garlic has to be one of all time favourites.',
                price: 10,
                image: null,
            },
            {
                id: 4,
                title: 'BALTI',
                description: 'Fragrant and full of flavour, this easy, warming vegetable, chicken or lamb balti is healthy, too.',
                price: 12,
                image: null,
            },
            {
                id: 5,
                title: 'JALFREZI',
                description: 'A medium spice dish cooked with thick sauce.',
                price: 11,
                image: null,
            },
            {
                id: 6,
                title: 'CHASNI',
                description: 'A sweet and sour dish, smooth and tangy, prepared with fresh cream and mango chutney.',
                price: 13,
                image: null,
            },
            {
                id: 7,
                title: 'NAINTARA',
                description: 'Cooked with fresh spring onion, garlic and ginger mix with medium hot spicy sauce.',
                price: 10,
                image: null,
            },
        ]},
        {title: 'Sides',
            data: [
                {
                    id: 8,
                    title: 'Plain Rice',
                    description: '',
                    price: 2.5,
                    image: null,
                },
                {
                    id: 9,
                    title: 'Mushroom Fried Rice',
                    description: '',
                    price: 0,
                    image: null,
                },
                {
                    id: 10,
                    title: 'Plain Naan',
                    description: '',
                    price: 2.5,
                    image: null,
                },
                {
                    id: 11,
                    title: 'Chilli Naan',
                    description: '',
                    price: 3,
                    image: null,
                }
            ]}
    ]

    //yo sushi
    static menu5 = [
        {title: 'Maki',
        data: [
            {
                id: 1,
                title: 'Avocado Maki',
                description: 'Avocado & vegan mayo wrapped in a nori roll.',
                price: 1.59,
                image: require('../Images/Menus/menu5/menu5-id1.png'),
            },
            {
                id: 2,
                title: 'Mixed Maki Plate',
                description: 'The best of both worlds, 3 salmon maki & 3 avocado maki.',
                price: 1.59,
                image: require('../Images/Menus/menu5/menu5-id2.png'),
            },
            {
                id: 3,
                title: 'Crunchy California Roll',
                description: 'Surimi and avocado roll, topped with mayo, teriyaki & crunchy onion.',
                price: 1.99,
                image: require('../Images/Menus/menu5/menu5-id3.png'),
            },
            {
                id: 4,
                title: 'Dragon Roll',
                description: 'California Roll topped with fresh salmon, shichimi powder & spring onion.',
                price: 1.99,
                image: require('../Images/Menus/menu5/menu5-id4.png'),
            },
            {
                id: 5,
                title: 'YO! Roll',
                description: 'Our signature roll! Fresh salmon, avocado & mayo, rolled in orange masago.',
                price: 1.99,
                image: require('../Images/Menus/menu5/menu5-id5.png'),
            }
        ]
        },
        {title: 'Nigiri',
            data: [
                {
                    id: 6,
                    title: 'Salmon Nigiri',
                    description: 'Fresh, hand cut salmon on sushi rice. Try it with wasabi & soy sauce!',
                    price: 2.19,
                    image: require('../Images/Menus/menu5/menu5-id6.png'),
                },
                {
                    id: 7,
                    title: 'Tuna Nigiri',
                    description: 'Yellowfin tuna with sushi rice.',
                    price: 2.19,
                    image: null,
                }
            ]
        },
        {title: 'Sashimi',
            data: [
                {
                    id: 8,
                    title: 'Salmon Sashimi',
                    description: 'Our freshest cuts of thick-sliced salmon, with wakame seaweed and lemon.',
                    price: 2.09,
                    image: require('../Images/Menus/menu5/menu5-id8.png'),
                },
                {
                    id: 9,
                    title: 'Tuna Sashimi',
                    description: 'Thick cut slices of yellowfin tuna, with wakame seaweed and lemon.',
                    price: 2.09,
                    image: require('../Images/Menus/menu5/menu5-id9.png'),
                },
            ]
        }
    ]



}
