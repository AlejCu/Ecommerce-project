import { ShopStyles } from './shopPageStyles.ts'
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'

function ShopPage ({ onAddToCart }) {

    //STATE THAT HANDLES THE SELECTED SIZE FOR EACH PRODUCT
    const [selectedSizes, setSelectedSizes] = useState({});

    const handleSizeChange = (productId, size) => {
        setSelectedSizes((prev) => ({
            ...prev,
            [productId]: size,
        }));
    };

    //LOGIC THAT HANDLES THE FILTERS FOR THE PRODUCTS
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
            <div className="banner_container">
                <img src={process.env.PUBLIC_URL + "/assets/Img/banner.webp"} alt="Clothes banner" fetchPriority='high'/>
            </div>

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

                <button type="button" onClick={() => setFilters({ type: 'All', color: 'All' })}>
                    <FontAwesomeIcon icon={faFilterCircleXmark} />
                </button>
            </div>

            <div className="product_section-cont">
                {/*Creates a div for each filtered product available*/}
                {filteredProducts.map(product => (
                    <div className="product_container" key={`size-select-${product.id}`}>

                        <div className="product_image">
                            <Link to={`/item/${product.id}`} data-id={product.id} key={product.id}>
                                <img src={product.image} alt={product.name} loading='lazy'/>
                            </Link>
                        </div>

                        <div className="product_info">
                            <div className="product_info-left">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                            <div className="product_info-right">
                                <select name="size" value={selectedSizes[product.id] || product.size[0]} 
                                    onChange={(e) => handleSizeChange(product.id, e.target.value)}>
                                    {product.size.map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))} 
                                </select>
                                {/*Sends a signal to the setCartCount state to increase the cart count number and adding the item to the cart*/}
                                <button onClick={() => onAddToCart(product, selectedSizes[product.id])}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="promo_container">
                <div className="promo_container-left">
                    <div className="promo_container-text">
                        <h1>Pandin Clothing Shop</h1>
                        <p> Find Your Style. One Pixel at a Time.</p>

                        <div className="promo_container-code">
                            <h2>Use the promo code: "PANDA20"</h2>
                            <p>20% off at checkout!!</p>
                        </div>
                    </div>
                </div>

                <div className="promo_container-right">
                    <img src={process.env.PUBLIC_URL + "/assets/Img/promo20.webp"} alt="Panda logo" fetchPriority='high'/>
                </div>
            </div>
        </ShopStyles>
    );
}

export { ShopPage };