import { useEffect, useRef, useState } from "react";
import { PaymentPageStyles } from './paymentPageStyles.ts';
import { Link } from 'react-router-dom';
import { promoCodes } from '../../data/products.ts';

//icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function PaymentPage({ cartItems, cartTotal, dispatch }) {
    const cardNumberRef = useRef(null);
    const expDateRef = useRef(null);
    const formRef = useRef(null);
    const statusRef = useRef(null);

    //States to handle the promo code input and discount
    const [promoInput, setPromoInput] = useState("");
    const [discountPercent, setDiscountPercent] = useState(null);
    const [promoError, setPromoError] = useState("");

    //Calculate the discounted total if a valid promo code is applied
    const discountedTotal =
    discountPercent !== null
        ? cartTotal * (1 - discountPercent / 100)
        : cartTotal;

    //Effect to validate the promo code entered
    useEffect(() => {
        if (!promoInput.trim()) {
            setDiscountPercent(null);
            setPromoError("");
            return;
        }

        const promo = promoCodes.find(
            (p) => p.code === promoInput.trim().toUpperCase()
        );

        if (!promo) {
            setDiscountPercent(null);
            setPromoError("Invalid promo code");
            return;
        }

        setPromoError("");
        setDiscountPercent(promo.discountPercentage);
    }, [promoInput]);

    useEffect(() => {
        const cardNumber = cardNumberRef.current;
        const expDate = expDateRef.current;
        const form = document.getElementById("payment_method-form");
        const status = document.getElementById("status");
        const phoneInput = document.getElementById("billing-phone");

        if (!cardNumber || !expDate || !form || !status || !phoneInput) return;

        //Formats the card numbers to only allow numbers and display in groups of 4
        const handleCardInput = (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.replace(/(.{4})/g, "$1 ").trim();
            e.target.value = value;
        };

        //Formats the expiration date to MM/YY
        const handleExpInput = (e) => {
            let value = e.target.value.replace(/\D/g, "");
            
            //Makes sure the month is valid
            if (value.length >= 2) {
                let month = parseInt(value.substring(0, 2), 10);
                if (month < 1) month = 1;
                if (month > 12) month = 12;
                value = month.toString().padStart(2, "0") + value.substring(2);
            }


            if (value.length >= 3) {
                value = value.substring(0, 2) + "/" + value.substring(2, 4);
            }
            e.target.value = value;
        };

        //Formats phone number to be 10 characters long with a format of (123) 456-7890
        const handlePhoneInput = (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.substring(0, 10);

            if (value.length > 6) {
                value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
            } else if (value.length > 3) {
                value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
            } else if (value.length > 0) {
                value = `(${value}`;
            }

            e.target.value = value;
        };

        //Email Validator
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        //Phone Validator
        const validatePhone = (phone) => /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(phone);

        const handleSubmit = (e) => {
            e.preventDefault();

            const emailInput = form["billing-email"];
            const phoneInput = form["billing-phone"];

            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const statusImg = document.getElementById("status-icon");


            let hasErrors = false;

            //Function to set error messages
            const setError = (input, message) => {
                const span = input.nextElementSibling;
                if (span && span.classList.contains("payment_method-error")) {
                    span.textContent = message;
                }
            };

            //Clears all previous errors
            form.querySelectorAll(".payment_method-error").forEach((span) => {
                span.textContent = "";
            });

            //Required fields validation
            const requiredFields = form.querySelectorAll("input[required]");
            requiredFields.forEach((input) => {
                if (!input.value.trim()) {
                    setError(input, `*`);
                    hasErrors = true;
                }
            });

            //Email validation
            if (!email) {
                setError(emailInput, "*");
                hasErrors = true;
            } else if (!validateEmail(email)) {
                setError(emailInput, "Invalid email");
                hasErrors = true;
            }

            //Phone validation
            if (!phone) {
                setError(phoneInput, "*");
                hasErrors = true;
            } else if (!validatePhone(phone)) {
                setError(phoneInput, "Invalid phone");
                hasErrors = true;
            }

            //Payment status messages
            if (hasErrors) {
                status.textContent = "Please fill in the required fields marked with an asterisk (*)";
                status.style.color = "#f10000ff";

                if (statusImg) {
                    statusImg.style.display = "block";
                    statusImg.src = "./assets/Img/denied-submit.webp";
            }

        return;
    }

            status.textContent = "Payment Submitted!";
            status.style.color = "green";

            if (statusImg) {
                statusImg.style.display = "block";
                statusImg.src = "./assets/Img/success-submit.webp";
            }

            form.reset();
        };

    cardNumber.addEventListener("input", handleCardInput);
    expDate.addEventListener("input", handleExpInput);
    form.addEventListener("submit", handleSubmit);
    phoneInput.addEventListener("input", handlePhoneInput);

        return () => {
            cardNumber.removeEventListener("input", handleCardInput);
            expDate.removeEventListener("input", handleExpInput);
            phoneInput.removeEventListener("input", handlePhoneInput);
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);

    //Format currenct for cart items
    const formatCurrency = (value) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

    return (
        <PaymentPageStyles>
            <h1>Payment Page</h1>

            <div className="payment_main-container">
                <div className="payment_items-container">
                    <div className="payment_items-title">
                        <h2>Cart Items</h2>
                        <FontAwesomeIcon id="payment_items-title-cont" icon={faCartShopping} />
                    </div>
                    <div className="payment_items-card-cont">
                        {(cartItems || []).map((item) => (
                        <div className="payment_items-card" key={item.id + item.size}>
                            <Link to={`/item/${item.id}`} data-id={item.id} key={item.id}>
                                <img src={item.image} alt={item.name} fetchPriority="high"/>
                            </Link>
                            <div className="payment_items-info">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <p>Size: {item.size}</p>
                                <div className="payment_items-quantity">
                                    <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                
                                    <p>{item.quantity}</p>
                                
                                    <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}>
                                    <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                </div>
                                
                                <div className="payment_items-remove">
                                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="payment_items-total-main">
                        <div className="payment_items-total-cont">
                            <p>Total: {formatCurrency(cartTotal.toFixed(2))}</p>
                            {discountPercent !== null ? (
                                <>
                                    <p className="payment_items-disc-txt">Discount: <span>-{discountPercent}%</span></p>
                                    <p className="payment_items-disc-txt">Total: {formatCurrency(discountedTotal.toFixed(2))}</p>
                                </>
                                ) : null}
                        </div>
                    </div>
                </div>

                <div className="payment_method-container">
                    <div className="payment_method-child-container">
                        <h2>Payment Method</h2>
                        <form id="payment_method-form" autoComplete="on" noValidate ref={formRef}>
                            <div className="payment_method-billing">
                                <h3>Billing Address</h3>
                                <div className="payment_method-billing-contact">
                                    <div className="payment_method-billing-container">
                                            <label htmlFor="billing-name"></label>
                                            <input
                                                type="text"
                                                id="billing-name"
                                                name="billing-name"
                                                autoComplete="billing name"
                                                placeholder="Full Name"
                                                required
                                            />
                                            <span className="payment_method-error"></span>
                                        </div>
                                        <div className="payment_method-billing-container">
                                            <label htmlFor="billing-email"></label>
                                            <input
                                                type="email"
                                                id="billing-email"
                                                name="billing-email"
                                                autoComplete="billing email"
                                                placeholder="email@email.com"
                                            />
                                            <span className="payment_method-error"></span>
                                        </div>
                                        <div className="payment_method-billing-container">
                                            <label htmlFor="billing-phone"></label>
                                            <input
                                                type="tel"
                                                id="billing-phone"
                                                name="billing-phone"
                                                autoComplete="billing tel"
                                                placeholder="(123) 456-7890"
                                                maxLength="14"
                                            />
                                            <span className="payment_method-error"></span>
                                        </div>
                                    </div>

                                    <div className="payment_method-billing-str">
                                        <label htmlFor="billing-address"></label>
                                        <input
                                            type="text"
                                            id="billing-address"
                                            name="billing-address"
                                            autoComplete="billing address-line1"
                                            placeholder="123 Main St"
                                            required
                                        />
                                        <span className="payment_method-error"></span>
                                    </div>
                                    <div className="payment_method-billing-CityState">
                                        <label htmlFor="billing-city"></label>
                                        <input
                                            type="text"
                                            id="billing-city"
                                            name="billing-city"
                                            autoComplete="billing address-level2"
                                            placeholder="City"
                                            required
                                        />
                                        <span className="payment_method-error"></span>
                                        <label htmlFor="billing-state"></label>
                                        <input
                                            type="text"
                                            id="billing-state"
                                            name="billing-state"
                                            autoComplete="billing address-level1"
                                            placeholder="State"
                                            required
                                        />
                                        <span className="payment_method-error"></span>
                                    </div>
                                    <div className="payment_method-billing-zip">
                                        <label htmlFor="billing-zip"></label>
                                        <input
                                            type="text"
                                            id="billing-zip"
                                            name="billing-zip"
                                            autoComplete="billing postal-code"
                                            placeholder="ZIP Code"
                                            required
                                        />
                                        <span className="payment_method-error"></span>
                                    </div>
                                </div>
                            <div className="payment_method-card-info">
                                <h3>Billing Address</h3>
                                <div className="payment_method-name">
                                    <label htmlFor="cc-name"></label>
                                    <input
                                        type="text"
                                        id="cc-name"
                                        name="cc-name"
                                        autoComplete="cc-name"
                                        placeholder="Cardholder Name"
                                        required
                                    />
                                    <span className="payment_method-error"></span>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>

                                <div className="payment_method-number">
                                    <label htmlFor="cc-number"></label>
                                    <input
                                        type="text"
                                        id="cc-number"
                                        name="cc-number"
                                        autoComplete="cc-number"
                                        placeholder="1234 5678 9012 3456"
                                        maxLength="19"
                                        ref={cardNumberRef}
                                        required
                                    />
                                    <span className="payment_method-error"></span>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                </div>

                                <div className="payment_method-exp">
                                    <label htmlFor="cc-exp"></label>
                                    <input
                                        type="text"
                                        id="cc-exp"
                                        name="cc-exp"
                                        autoComplete="cc-exp"
                                        placeholder="Expiration Date: MM/YY"
                                        maxLength="5"
                                        ref={expDateRef}
                                        required
                                    />
                                    <span className="payment_method-error"></span>
                                </div>
                                <div className="payment_method-csc">
                                    <label htmlFor="cc-csc"></label>
                                    <input
                                        type="text"
                                        id="cc-csc"
                                        name="cc-csc"
                                        autoComplete="cc-csc"
                                        placeholder="CVV: 123"
                                        maxLength="4"
                                        required
                                    />
                                    <span className="payment_method-error"></span>
                                </div>
                                <div className="payment_method-discount">
                                    <label htmlFor="discount-code"></label>
                                    <input
                                        type="text"
                                        id="discount-code"
                                        name="discount-code"
                                        autoComplete="off"
                                        placeholder="Enter Promo Code"
                                        value={promoInput}
                                        onChange={(e) => setPromoInput(e.target.value)}
                                    />
                                    {promoError && (
                                        <span className="payment_method-error">{promoError}</span>
                                    )}
                                </div>
                            </div>
                        </form> 
                        <button type="submit" form="payment_method-form">Proceed to Pay</button>
                        <div className="payment_method-status">
                            <img id="status-icon" src="./assets/Img/payment-form-default.webp" alt="Status Icon" fetchPriority="high"/>
                            <p id="status" ref={statusRef}></p>
                        </div>
                    </div>
                    <div className="payment_method-disclaimer">
                        <h2>Disclaimer</h2>
                        <p>This page is for demonstration purposes only. filling in the payment form will not trigger any real payment. Feel free to test how it works!!</p>
                    </div>
                </div>
            </div>
        </PaymentPageStyles>
    );
}
export { PaymentPage };