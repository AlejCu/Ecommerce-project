import styled from 'styled-components';

export const menuContainer = `
    background-color: #ffff;
    position: fixed;
    top: 0px;
    height: 100vh;
    padding: 10px;
    width: 20%;
    color: #000000ff;
    z-index: 3;
`;

export const menuCloseIcon =`
    display: flex;
    flex-direction: column;

    svg {
        width: 8px;
    }

    button {
        transition: all 0.2s ease;
        background-color: #bebebeff;
        color: #333;
        padding: 1px 10px;
        border-radius: 50px;

        &:hover {
            background-color: #333;
            color: #ffff;
            transition: all 0.2s ease;
        }

        &:active {
            transform: scale(0.9);
            transition: scale 0.4s ease;
        }
    }
`;

export const cartButtonStyles = `
    margin: 0 5px;
    cursor: pointer;
    font-size: 11px;
    border-radius: 50px;
    transition: all 0.2s ease;
    text-align: center;

    svg {
        font-size: 14px;
    }

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease;
    }
`;

export const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #202020;
    color: #ffffff;
    border-bottom: 1px solid #e7e7e7;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    .header_button {
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.08);
            transition: all 0.2s ease;
        }

        &:active {
            transform: scale(0.95);
            transition: scale 0.2s ease;
        }
    }

    img {
        width: 80px;
        image-rendering: pixelated;
    }

    svg {
        font-size: 25px;
    }

    .header_container-left {
        display: flex;
        align-items: center;

        span {
            position: absolute;
            top: 22px;
            right: 13px;
            background-color: #217de6ff;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
            opacity: 0.9;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        align-items: center;
    }

    /*Cart Styling*/
    .header_cart-open {
        ${menuContainer}
        right: 0px;
        transition: right 0.5s ease;
        overflow-y: scroll;
    }

    .header_cart-close {
        ${menuContainer}
        right: -1000px;
        transition: right 0.5s ease;
        overflow-y: scroll;
    }

    .header_cart-hide-icon {
        ${menuCloseIcon}
        align-items: flex-end;
    }

    .header_cart-items {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 246px;
        margin-bottom: 15px;

        img {
            width: 150px;
            image-rendering: pixelated;
        }            

        h2 {
            font-size: 16px;
            font-weight: 600;
        }

        p {
            font-size: 14.5px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            color: #333;
        }

    }

    .header_cart-items-quantity {
        display: flex;
        flex-direction: row;
        align-items: center;

        button {
            ${cartButtonStyles}
            padding: 8px;
        }
    }

    .header_cart-items-remove {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        button {
            ${cartButtonStyles}
            padding: 3px 20px;
            background-color: #333;
            color: #ffff;

            &:active {
                transform: scale(1.05);
                transition: scale 0.4s ease;
            }
        }
    }

    .header_menu-opacity-open {
        position: absolute;
        background-color: #333;
        opacity: 0.4;
        width: 100%;
        height: 100vh;
        right: 0px;
        top: 0px;
        z-index: 2;
        transition: all 0.4s ease;
    }

    .header_menu-opacity-close {
        display: none;
        transition: all 0.2s ease;
    }

    .cart-total {
        position: sticky;
        bottom: -10px;
        background-color: #333;
        color: #ffff;
        padding: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        width: 98%;
        border-radius: 15px 15px 0 0;

        p {
            font-weight: 700;
        }

        button {
            ${cartButtonStyles}
            font-size: 16px;
            padding: 10px 20px;
            background-color: #dbdbdb;
            color: #000000ff;
            margin-top: 10px;
        }
    }

    /*side Menu Styling*/

    .header_sideMenu-open {
        ${menuContainer}
        left: 0px;
        transition: left 0.5s ease;
    }

    .header_sideMenu-close {
        ${menuContainer}
        left: -1000px;
        transition: left 0.5s ease;
    }

    .header_sideMenu-hide-icon {
        ${menuCloseIcon}
        align-items: flex-start;
    }

    .header_sideMenu-container {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-top: 30px;

        nav {
            width: 100%;
        }
    }
`;