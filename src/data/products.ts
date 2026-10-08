import { Product } from './types';

export const products = {

    backpack: {
        productTitle: 'Backpack',
        price: 29.99,
    },

    bikeLight: {
        productTitle: 'Bike Light',
        price: 9.99,
    },

    boltTShirt: {
        productTitle: 'Bolt T-Shirt',
        price: 15.99,
    },

    fleeceJacket: {
        productTitle: 'Fleece Jacket',
        price: 49.99,
    },

    onesie: {
        productTitle: 'Onesie',
        price: 7.99,
    },

    redTShirt: {
        productTitle: 'T-Shirt (Red)',
        price: 15.99,
    },

} satisfies Record<string, Product>;