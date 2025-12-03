import styled from 'styled-components';
import { cartButtonStyles } from '../header/headerStyles.ts';

export const PaymentPageStyles = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 90vh;

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    /* Items Area */
    .payment_main-container {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        gap: 2rem;
    }

    .payment_items-card-cont {
        overflow-y: auto;
        max-height: 70vh;
        min-height: 70vh;
    }

    .payment_items-container {
        display: flex;
        flex-direction: column;
        padding-right: 10px;
    }

    .payment_items-title {
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            font-size: 15px;
            margin:0 0 15px 5px;
        }
    }

    .payment_items-card {
        display: flex;
        justify-content: flex-start;
    }

    .payment_items-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
    
        img {
            width: 270px;
            image-rendering: pixelated;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
                transition: transform 0.3s ease;
            }
        }            
    
        h2 {
            font-size: 17px;
            font-weight: 600;
        }
    
        p {
            font-size: 14.5px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            color: #333;
        }
    }
    
    .payment_items-quantity {
        display: flex;
        flex-direction: row;
        align-items: center;
    
        button {
            ${cartButtonStyles}
            padding: 8px;
            background-color: #ffff;
        }
    }
    
    .payment_items-remove {
        display: flex;
        flex-direction: row;
        align-items: center;
    
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

    .payment_items-total {
        font-size: 18px;
        font-weight: 700;
        display: flex;
        justify-content: flex-end;
        background-color: #333;
        color: #ffff;
        padding: 10px 20px;
        border-radius: 0 0 15px 15px;
    }

    /* Payment Form */
    #payment_method-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 20px;

        label {
            font-size: 16px;
            font-weight: 600;
            font-family: 'Roboto', sans-serif;
        }

        input {
            padding: 10px;
            font-size: 15px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            font-family: 'Roboto', sans-serif;

            &:focus {
                outline: none;
                border-color: #333;
            }
        }

        button {
            ${cartButtonStyles}
            padding: 12px;
            width: 150px;
            font-size: 16px;
            margin-top: 10px;
            border-radius: 5px;

            &:hover {
                background-color: #333;
                color: #fff;
            }
        }
    }

    .payment_method-error {
        color: #f10000ff;
        margin: 8px;
    }

    .payment_method-details {
        display: flex;
        flex-direction: row;
        align-items: center;
    
        input {
            width: 100px;
        }
    }

    .payment_method-Container {
        display: flex;
        flex-direction: column;
    }

    .payment_method-child-container {
        display: grid;
        grid-template-columns: 1fr .8fr;
        gap: 20px;
    }

    .payment_method-number, payment_method-name {
        input {
            width: 300px;
        }
    }

    .payment_method-container {
        padding-left: 70px;
    }

    .payment_method-billing-contact {
        display: flex;
        flex-direction: column;
    }

    .payment_method-billing {

        h3 {
            margin-bottom: 10px;
        }

        input {
            width: 300px;
            margin-bottom: 15px;
        }
    }

    .payment_method-billing-CityState {
        input {
            width: 147px;
        }
    }
`;
