import styled from 'styled-components';

export const menuContainer = `
    background-color: #c5c5c5ff;
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
    align-items: flex-end;
    flex-direction: column;

    svg {
        width: 15px;
    }

    button {
        transition: scale 0.4s ease;

        &: hover {
            transform: scale(1.2);
            transition: scale 0.4s ease;
        }

        &:active {
            transform: scale(1.1);
            transition: scale 0.4s ease;
        }
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
    height: 60px;

    svg {
        font-size: 25px;
    }

    .header_container-left {
        display: flex;
        align-items: center;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        align-items: center;

        span {
            position: absolute;
            top: 9px;
            right: 13px;
            background-color: #217de6ff;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
            opacity: 0.9;
        }
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

        img {
            width: 150px;
            rendering: pixelated;
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
    }
`;