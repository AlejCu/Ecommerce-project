import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { ItemDetailsStyles } from './itemDetails.ts';
import { products } from '../../data/products.ts';
import { Link } from 'react-router-dom';

function ItemDetails({ onAddToCart }) {

    //Uses the Id passed from shopPage to find the correct product from the products array
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    //States to handle the selected size and quantity values
    const [selectedSize, setSelectedSize] = useState(product?.size[0] ?? "");
    const [quantity, setQuantity] = useState(1);

    //Filters products to show recommendations based on type or color, excluding the current product
    const filteredRecommendations = products.filter(p =>
        p.id.toString() !== id &&
        (
            p.type === product.type ||
            p.color.some(c => product.color.includes(c))
        )
    );

    //Blocks vertical scrolling when hovering over the recommendations section and allows horizontal scrolling instead
    const handleRecommendationsWheel = (e) => {
      const container = e.currentTarget;

        if (container.scrollWidth > container.clientWidth) {
            e.preventDefault();
            container.scrollBy({
            left: e.deltaY * 3, // Adjust scroll speed as needed
            behavior: "smooth"
            });
        }
    };

    if (!product) return <p>Producto no encontrado</p>;

    return (
        <ItemDetailsStyles>

            <div className="itemDetails_main-container">
                <div className="itemDetails_container-left">
                    <img src={product.image} alt={product.name}/>
                </div>

                <div className="itemDetails_container-right">
                    <h1>{product.name}</h1>
                    <p className="itemDetails_price">${product.price}</p>
                    <p className="itemDetails_description">{product.description}</p>
                    <div className="itemDetails_buttons-section">
                        <div className="itemDetails_buttons-container">
                            <label htmlFor="size-select">Size:</label>
                            <select id="size-select" name="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                {product.size.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className="itemDetails_buttons-container">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                id="quantity"
                                type="number"
                                min="1"
                                max="30"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <button onClick={() => onAddToCart(product, selectedSize, quantity)}>
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="itemDetails_recommendations-section">
                <div className="itemDetails_recommendations-title">
                    <h2>Similar Products</h2>
                </div>

                <div className="itemDetails_recommendations-container" 
                onWheel={handleRecommendationsWheel}>
                    {filteredRecommendations.map(recommendation => (
                        <div className="recommendation_card" key={recommendation.id}>
                            <Link to={`/item/${recommendation.id}`} data-id={recommendation.id} key={recommendation.id}>
                                <img src={recommendation.image} alt={recommendation.name} />
                                <h3>{recommendation.name}</h3>
                                <p>${recommendation.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </ItemDetailsStyles>
    );
}

export { ItemDetails };