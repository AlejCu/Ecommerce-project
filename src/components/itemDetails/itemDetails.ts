import styled from 'styled-components';

export const ItemDetailsStyles = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    overflow-x: hidden;

    .itemDetails_main-container {
        display: flex;
        flex-direction: row;
        margin: 20px 0 20px 0;
        align-items: center;
    }

    .itemDetails_container-left {
        background-color: #f0f0f0ff;
        border-radius: 25px;

        img {
            width: 600px;
            image-rendering: pixelated;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05) rotate(2deg);
                transition: transform 0.3s ease;
            }
        }
    }

    .itemDetails_container-right {
        display: flex;
        flex-direction: column;
        margin-left: 40px;

        h1 {
            font-size: 27px;
        }

        .itemDetails_price {
            font-size: 20px;
            font-weight: 600;
            margin: 10px 0;
        }

        .itemDetails_description {
            font-size: 16px;
            line-height: 1.5;
            max-width: 600px;
            color: #555;
        }

        .itemDetails_price {
            font-family: "Roboto", sans-serif;
        }

        button {
            margin-top: 20px;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            font-size: 18px;
            border-radius: 25px;
            transition: all 0.2s ease;
            background-color: #ffff;
            width: 150px;

            &:hover {
                background-color: #333;
                color: #ffff;
                transition: all 0.2s ease;
            }

            &:active {
                transform: scale(0.95);
                transition: transform 0.2s ease;
            }
        }
    }

    .itemDetails_buttons-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            color: #333;
            margin-bottom: 5px;
            font-family: "Roboto", sans-serif;
            font-weight: 600;
        }
    }

    .itemDetails_buttons-section {
        font-family: "Roboto", sans-serif;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-top: 20px;
        gap: 15px;
        
        select, input {
            align-items: center;
            border-radius: 25px;
            padding: 8px 12px;
            background-color: #dbdbdb;

            &:hover {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffff;
                cursor: pointer;
            }

            &:focus {
                background-color: #333;
                transition: background-color 0.4s ease;
                color: #ffff;
            }
        }
    }

    .itemDetails_recommendations-section {
        width: 100%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-radius: 25px;
        background-color: #dbdbdb;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding-top: 20px;

        h2 {
            font-size: 28px;
        }
    }

    .itemDetails_recommendations-title {
        display: flex;
        justify-content: flex-start;
        width: 97%;
        
        h2 {
            font-family: "Roboto", sans-serif;
            margin-left: 10px;
        }
    }

    .itemDetails_recommendations-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 97%;
        overflow-x: auto;
        padding: 10px;
        gap: 15px;
        scrollbar-width: thin;
        scrollbar-color: #dbdbdb #dbdbdb;
        overscroll-behavior: contain;
        scroll-behavior: smooth;

        img {
            width: 200px;
            image-rendering: pixelated;
            transition: transform 0.3s ease;
        }
    }

    .recommendation_card {
        border-radius: 25px;
        padding: 10px;
        transition: all 0.2s ease;

        p {
            font-family: "Roboto", sans-serif;
            font-size: 14px;
            margin-top: 3px;
        }

        &:hover {
            background-color: #ffff;
            color: #080808ff;
            transform: scale(1.05);
            transition: all 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    @media (max-width: 900px) {
        .itemDetails_main-container {
            flex-direction: column;
        }

        .itemDetails_container-right {
            margin-top: 20px;
            margin-left: 0;
            align-items: center;
            text-align: center;
        }

        .itemDetails_container-left {
            img {
                width: 300px;
            }
        }

    }

    @media (max-width: 500px) {
        .itemDetails_recommendations-container {
            flex-direction: column;
            align-items: center;
        }

        .itemDetails_recommendations-section {
            height: 500px;
        }

    }
`;