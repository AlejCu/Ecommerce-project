import { ShopStyles } from './shopPageStyles.ts'
import React, { useState, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Const to call each available item in the shop
const products = [
    {
        id: '1',
        name: 'Black Pants',
        price: 650,
        image: '/assets/Img/black-pants.webp',
        description: 'Black pants made from high-quality fabric with a modern and comfortable fit. Their versatile design makes them perfect for both formal occasions and casual looks. Easy to pair with any outfit and designed for an all-day flattering fit.',
        size: ['S', 'M', 'L'],
        type: 'Pants',
        color: ['Black'],     
    },

    {
        id: '11',
        name: 'White & Black Sneakers',
        price: 1300,
        image: '/assets/Img/white-blck-sneakers.webp',
        description: 'Classic white and black sneakers that offer a timeless look with modern comfort. Made from durable materials, these sneakers feature a stylish design with a cushioned sole for all-day wear. Perfect for casual outings or athletic activities, they provide excellent support and versatility.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['White', 'Black'],
    },

    {
        id: '2',
        name: 'Blue Jeans',
        price: 750,
        image: '/assets/Img/jeans.webp',
        description: 'Classic blue jeans made from durable denim fabric. Featuring a timeless design with a comfortable fit, these jeans are perfect for everyday wear. They can be easily paired with various tops and shoes for a casual yet stylish look.',
        size: ['S', 'M', 'L'],
        type: 'Pants',
        color: ['Blue'],
    },

    {
        id: '7',
        name: 'Green Shirt',
        price: 350,
        image: '/assets/Img/green-shirt.webp',
        description: 'Fresh green shirt crafted from soft and comfortable material. Its casual design makes it ideal for everyday wear, while the vibrant color adds a lively touch to your wardrobe. Easy to pair with jeans or shorts for a relaxed look.',
        size: ['S', 'M', 'L'],
        type: 'Shirt',
        color: ['Green'],
    },

    {
        id: '14',
        name: 'White & Red Sneakers',
        price: 1400,
        image: '/assets/Img/white-rd-sneakers.webp',
        description: 'Stylish white and red sneakers that offer a fresh look with modern comfort. Crafted from high-quality materials, these sneakers feature a breathable design and a cushioned sole for optimal support. Ideal for casual wear or sports activities, they add a pop of color to any outfit.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['White', 'Red'],
    },

    {
        id: '8',
        name: 'Red Shirt',
        price: 300,
        image: '/assets/Img/red-panda-shirt.webp',
        description: 'Bold red shirt made from high-quality fabric. Its eye-catching color and classic design make it a standout piece in any wardrobe. Perfect for casual outings or social gatherings, this shirt offers both style and comfort.',
        size: ['S', 'M', 'L'],
        type: 'Shirt',
        color: ['Red'],
    },

    {
        id: '9',
        name: 'Black sneakers',
        price: 1200,
        image: '/assets/Img/black-sneakers.webp',
        description: 'Sleek black sneakers designed for both style and comfort. Made from durable materials, these sneakers feature a modern design with a cushioned sole for all-day wear. Perfect for casual outings or athletic activities, they provide excellent support and a trendy look.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['Black'],
    },

    {
        id: '3',
        name: 'Green Pants',
        price: 550,
        image: '/assets/Img/green-pants.webp',
        description: 'Stylish green pants made from a soft and breathable fabric. Their vibrant color adds a pop of personality to any outfit, while the comfortable fit ensures ease of movement. Perfect for casual outings or semi-formal events.',
        size: ['S', 'M', 'L'],
        type: 'Pants',
        color: ['Green'],
    },

    {
        id: '10',
        name: 'Red Sneakers',
        price: 1100,
        image: '/assets/Img/red-sneakers.webp',
        description: 'Vibrant red sneakers that combine bold style with superior comfort. Crafted from high-quality materials, these sneakers feature a breathable design and a cushioned sole for optimal support. Ideal for casual wear or sports activities, they add a pop of color to any outfit.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['Red'],
    },

    {
        id: '4',
        name: 'Brown Pants',
        price: 600,
        image: '/assets/Img/brown-pants.webp',
        description: 'Elegant brown pants crafted from high-quality material. Featuring a classic design with a tailored fit, these pants are ideal for both professional settings and casual occasions. Their neutral color makes them easy to match with various tops and accessories.',
        size: ['S', 'M', 'L'],
        type: 'Pants',
        color: ['Brown'],
    },

    {
        id: '6',
        name: 'Blue Shirt',
        price: 400,
        image: '/assets/Img/two-clr-shirt.webp',
        description: 'Crisp blue shirt made from lightweight and breathable fabric. Perfect for both casual and formal settings, this shirt features a classic design with a comfortable fit. Its vibrant color adds a touch of freshness to any outfit.',
        size: ['S', 'M', 'L'],
        type: 'Shirt',
        color: ['Blue'],
    },

    {
        id: '12',
        name: 'Black & Blue Sneakers',
        price: 1250,
        image: '/assets/Img/blck-bl-sneakers.webp',
        description: 'Trendy black and blue sneakers that blend bold colors with exceptional comfort. Crafted from high-quality materials, these sneakers feature a breathable design and a cushioned sole for optimal support. Ideal for casual wear or sports activities, they add a stylish touch to any outfit.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['Black', 'Blue'],
    },

    {
        id: '5',
        name: 'Black Shirt',
        price: 450,
        image: '/assets/Img/black-shirt.webp',
        description: 'Sleek black shirt made from premium fabric. Its versatile design allows it to be dressed up or down, making it suitable for a variety of occasions. The comfortable fit and classic style ensure you look polished and put-together.',
        size: ['S', 'M', 'L'],
        type: 'Shirt',
        color: ['Black'],
    },

    {
        id: '13',
        name: 'Red & Blue Sneakers',
        price: 1150,
        image: '/assets/Img/white-rd-bl-sneakers.webp',
        description: 'Eye-catching red and blue sneakers that combine vibrant colors with superior comfort. Made from durable materials, these sneakers feature a breathable design and a cushioned sole for all-day wear. Perfect for casual outings or athletic activities, they provide excellent support and a trendy look.',
        size: ['7', '8', '9', '10', '11'],
        type: 'Shoes',
        color: ['Red', 'Blue'],
    },
];

function ShopPage ({ setCartCount }) {
    //Const that creates the state value for the filters
    const [filters, setFilters] = useState({
        type: 'All',
        color: 'All',
        //add option if needed
    });

    //Creates an array of types, colors, and sizes from the products list
    const types = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.type)))], []);
    const colors = useMemo(() => {
        //Makes sure there is no duplicate color values
        const allColors = products.flatMap(p => p.color || []);
        return ['All', ...Array.from(new Set(allColors))];
    }, []);
    //add option if needed

    //Handles the change of the filter state value
    const handleFilterChange = (key) => (e) => {
        setFilters(prev => ({ ...prev, [key]: e.target.value }));
    };

    //Filters the products based on the selected option
    const filteredProducts = products.filter(product => {
        const matchType = filters.type === 'All' || product.type === filters.type;
        const matchColor = filters.color === 'All' || (product.color || []).includes(filters.color);
        //add option if needed
        return matchType && matchColor;
    });

    return (
        <ShopStyles>
            <h2>Shop</h2>

            <div className="filters">

                <div className="filters_option-container">
                    <label htmlFor="type-select">Type:</label>
                    <select id="type-select" name="type" value={filters.type} onChange={handleFilterChange('type')}>
                        {types.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>

                <div className="filters_option-container">
                    <label htmlFor="color-select">Color:</label>
                    <select id="color-select" name="color" value={filters.color} onChange={handleFilterChange('color')}>
                        {colors.map(color => <option key={color} value={color}>{color}</option>)}
                    </select>
                </div>

                {/*add filter option if needed*/}

                <button type="button" onClick={() => setFilters({ size: 'All', type: 'All', color: 'All' })}>
                    <FontAwesomeIcon icon={faFilterCircleXmark} />
                </button>
            </div>

            <div className="product_section-cont">
                {/*Creates a div for each filtered product available*/}
                {filteredProducts.map(product => (
                    <div className="product_container" key={`size-select-${product.id}`}>

                        <div className="product_image">
                            <a href="">
                                <img src={product.image} alt={product.name} />
                            </a>
                        </div>

                        <div className="product_info">
                            <div className="product_info-left">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                            <div className="product_info-right">
                                {/*Sends a signal to the setCartCount state to increase the cart count number*/}
                                <select name="size">
                                    {product.size.map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))} 
                                </select>
                                <button onClick={() => setCartCount (cartCount => cartCount +1)}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ShopStyles>
    );
}

export { ShopPage };