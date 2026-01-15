import styled from 'styled-components';

export const ShopStyles = styled.section`

    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0); }
    }

    padding: 10px;

    h2 {
        font-size: 3.5em;
    }

    /*Banner Styling*/

    .banner_container {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 25px;
        margin-bottom: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .banner_text {
        position: absolute;
        top: 18%;
        left: 27%;
        z-index: 1;
        color: #ffffff;
        font-size: 1.2em;
        font-weight: 700;
        padding: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    /*Promo section*/

    .promo_container {
        display: grid;
        grid-template-columns: .5fr .4fr;
        gap: 50px;
        margin-top: 80px;
        padding: 40px;
    }

    .promo_container-right {
        width: 100%;
        border-radius: 25px;
        overflow: hidden;
        animation: float 2s ease-in-out infinite;

        img {
            object-fit: cover;
            width: 100%;
            image-rendering: pixelated;
        }
    }

    .promo_container-img {
        border-radius: 25px;
        animation: float 2s ease-in-out infinite
        overflow: hidden;
    }

    .promo_container-code {
        margin-top: 20px;
    }

    .promo_container-left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        padding: 30px;

        h1 {
            font-size: 2em;
            margin-bottom: 15px;
        }

        h2 {
            font-size: 1.3em;
            margin-bottom: 15px;
            color: #ff5733;
        }

        p {
            font-size: 1.2em;
            margin-bottom: 20px;
            color: #333333;
        }
    }

    /*Filter section styling*/
    .filters {
        display: flex;
        flex-direction: row;
        align-items: center;

        button {
            background-color: #ffff;
            margin-left: 10px; 
            margin-top: 20px;
            transition: background-color 0.4s ease;
            padding: 5px;
            border-radius: 25px;
            cursor: pointer;

            &:hover {
                background-color: #333;
                color: #ffff;
                transition: background-color 0.4s ease;
            }
        }

        label {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        select {
            border-radius: 15px;
            padding: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.4s ease;

            &:hover {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffff;
            }

            &:focus {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffff;
            }
        }
    }

    .filters_option-container {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }


    /*Product main container styling*/
    .product_section-cont {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        img {
            width: 250px;
            image-rendering: pixelated;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05) rotate(2deg);
                transition: transform 0.3s ease;
            }
        }
    }

    .product_container {
        padding: 25px 8px;
    }

    .product_image {
        border-radius: 25px;
        text-align: center;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #e4e4e4ff;
            transition: background-color 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    .product_info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        background-color: #dbdbdb;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .product_info-right {

        button {
            padding: 5px 8px;
            margin-left: 8px;
            border: none;
            cursor: pointer;
            font-size: 16px;
            border-radius: 25px;
            transition: background-color 0.4s ease;
            background-color: #dbdbdb;

                &:hover {
                    transition: background-color 0.4s ease;
                    background-color: #333;
                    color: #ffffffff;
                }

                &:active {
                    transform: scale(0.95);
                    transition: transform 0.1s ease;
                }

                svg {
                    width: 12px;
                }
            }

        select {
            padding: 5px;
            border-radius: 15px;
            font-size: 14px;
            cursor: pointer;
            background-color: #dbdbdb;
            font-family: "Roboto", sans-serif;
            transition: background-color 0.4s ease;

            option {
                font-size: 14px;
            }

            &:hover {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffffffff;
            }

            &:focus {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffffffff;
            }
        }
            
    }

    .product_info-left {
        font-family: "Roboto", sans-serif;

        h3 {
            font-weight: 500;
            font-size: 13px;
            margin-bottom: 5px;
        }

        p {
            color: #000000;
            font-weight: 600;
            font-size: 14px;
        }
    }


    @media (max-width: 1310px) {
        .promo_container {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2, h1 {
                font-size: 1.2em;
            }

            p {
                font-size: 1em;
            }
        }

        .promo_container-right {
            max-width: 500px;
        }

        .banner_text {
            font-size: .9em;
            left: 25%;
        }
    }

    @media (max-width: 900px) {
       .banner_text {
            left: 16%;
        }

        .product_container {
            padding: 20px 5px;
            max-width: 230px;
            min-width: 230px;

            img {
                width: 200px;
            }
        }

        .product_info {
            min-height: 75px;
        }

        .product_info-right {
            display: flex;
            flex-direction: row;
        }
    }

    @media (max-width: 710px) {
        .banner_text {
            top: 15%;
        }
    }
`;