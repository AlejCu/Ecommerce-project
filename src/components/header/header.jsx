import { HeaderStyles } from "./headerStyles.ts";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


//icon inmports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Header ({ cartCount, cartItems, cartTotal, dispatch }) {
    
    //LOGIC FOR THE POP-UP MENUS
    //Handles the boolean to show or hide the cart menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen(prev => !prev);

    //Closes both menus when clicking the opacity container
    const handleOverlayClick = () => {
       setIsOpen(false);
        setSideMenuOpen(false);
    };

    //Handles the boolean to show or hide the side menu
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const toggleSideMenu = () => setSideMenuOpen(prev => !prev);

    //Handles the logic to switch in between the opacity when opening a menu
    const [opacityOpen, setOpacityOpen] = useState(false);
    useEffect(() => {
        if (isOpen || sideMenuOpen) {
            setOpacityOpen(true);
        } else {
            setOpacityOpen(false);
        }
    }, [isOpen, sideMenuOpen]);


    const formatCurrency = (value) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

    return (
        <HeaderStyles>
            
        <button className="header_button" onClick={toggleSideMenu}>
            <FontAwesomeIcon icon={faBars} />
        </button>

        <Link to="/">
            <img src="./assets/Img/site-logo.webp" alt="Pandin Logo with a pixel art panda" fetchPriority="high"/>
        </Link>

        <div className="header_container-left">
            
            <button className="header_button" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <span className="cart_counter">{cartCount}</span>
            
        </div>

        {/*Cart Menu*/}
        <div className={isOpen ? "header_cart-open" : "header_cart-close"}>
            <div className="header_cart-hide-icon">
                <button onClick={toggleCart}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <div className="header_cart-items">
                <FontAwesomeIcon icon={faCartShopping} />
                <h1>My cart</h1>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                cartItems.map((item) => (
                    <div key={item.id + item.size} className="cart-item">
                        <Link to={`/item/${item.id}`} data-id={item.id} key={item.id} onClick={toggleCart}>
                            <img src={item.image} alt={item.name} loading="lazy"/>
                        </Link>
                        <div className="header_cart-items-info">
                            <h2>{item.name}</h2>
                            {/* Logic to show the price for total items in the cart */}
                            {item.quantity > 1 ? (
                                <p>
                                ${(Number(item.price) * item.quantity).toFixed(2)}
                                </p>
                            ) : (
                                <p>${Number(item.price).toFixed(2)}</p>
                            )}
                            <p>Size: {item.size}</p>

                            <div className="header_cart-items-quantity">
                                <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <p>{item.quantity}</p>

                                <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            <div className="header_cart-items-remove">
                                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                    </div>
                    ))
        )}
            {cartItems.length > 0 && (
                <div className="cart-total">
                    <p>Total: {formatCurrency(cartTotal)}</p>

                    <Link to={`/payment`} onClick={toggleCart}>
                        <button>
                            Pay Now!
                        </button>
                    </Link>
                </div>
            )}
            </div>
        </div>

        {/*Side Menu*/}
        <div className={sideMenuOpen ? "header_sideMenu-open" : "header_sideMenu-close"}>
            <div className="header_sideMenu-hide-icon">
                <button onClick={toggleSideMenu}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            <div className="header_sideMenu-container">
                <nav>
                    <ul>
                        <Link to="/" onClick={toggleSideMenu}>
                            <li>
                                Home <FontAwesomeIcon icon={faHouse} />
                            </li>
                        </Link>
                        <Link to="/" onClick={toggleSideMenu}>
                            <li>
                                Shop <FontAwesomeIcon icon={faBasketShopping} />
                            </li>
                        </Link>
                        <Link to="/disclaimer" onClick={toggleSideMenu}>
                            <li>
                                Disclaimer <FontAwesomeIcon icon={faTriangleExclamation} />
                            </li>
                        </Link>
                        <Link to="" onClick={toggleSideMenu}>
                            <li>
                                Contact us <FontAwesomeIcon icon={faPhoneVolume} />
                            </li>
                        </Link>
                    </ul>
                </nav>
                <img src="/assets/Img/site-logo.webp" alt="Pandin Logo with a pixel art panda" loading="lazy"/>
            </div>
        </div>

        {/*Container that switches in between visible or not when a menu is open*/}
        <div onClick={handleOverlayClick} className={opacityOpen ? "header_menu-opacity-open" : "header_menu-opacity-close"}></div>
    </HeaderStyles>
    );
}

export { Header };