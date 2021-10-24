import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Rohan',
            email: 'rohan@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Harsh',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Grand Theft Auto V',
            category: 'PC Games',
            image: '/images/product-1.jpg',
            price: 5,
            countInStock: 3,
            developer: 'Rockstar Games',
            rating: 5,
            numReviews: 7,
            description: 'CD Key for Rockstar Games'
        },

        {
            name: 'Battlefield 2042',
            category: 'PC Games',
            image: '/images/product-2.jpg',
            price: 70,
            countInStock: 10,
            developer: 'Electronic Arts',
            rating: 4,
            numReviews: 30,
            description: 'CD Key for Origin'
        },


        {
            name: 'Resident Evil Village',
            category: 'PC Games',
            image: '/images/product-3.jpg',
            price: 60,
            countInStock: 10,
            developer: 'Capcom',
            rating: 3.5,
            numReviews: 45,
            description: 'CD Key for Steam'
        },

        {
            name: 'Biomutant',
            category: 'PC Games',
            image: '/images/product-4.jpg',
            price: 30,
            countInStock: 10,
            developer: 'THQ',
            rating: 5,
            numReviews: 22,
            description: 'CD Key for Steam'
        },

        {
            name: 'Red Dead Redemption 2',
            category: 'PC Games',
            image: '/images/product-5.jpg',
            price: 45,
            countInStock: 10,
            developer: 'Rockstar Games',
            rating: 5,
            numReviews: 17,
            description: 'CD Key for Rockstar Games'
        },

        {
            name: 'Discord Nitro',
            category: 'PC App',
            image: '/images/product-6.png',
            price: 10,
            countInStock: 0,
            developer: 'Discord',
            rating: 5,
            numReviews: 66,
            description: 'CD Key for Discord'
        },
    ]
}

export default data;