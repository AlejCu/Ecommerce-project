import { useEffect, useRef } from "react";

function PaymentPage({ cartItems, cartTotal, dispatch }) {
    const cardNumberRef = useRef(null);
    const expDateRef = useRef(null);

    useEffect(() => {
        const cardNumber = cardNumberRef.current;
        const expDate = expDateRef.current;

        if (!cardNumber || !expDate) return;

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

        cardNumber.addEventListener("input", handleCardInput);
        expDate.addEventListener("input", handleExpInput);

        //Cleanup event listeners on unmount
        return () => {
            cardNumber.removeEventListener("input", handleCardInput);
            expDate.removeEventListener("input", handleExpInput);
        };
    }, []);

    return (
        <section className="payment_page">
        <h1>Payment Page</h1>
        <div className="payment_items-container">
            {(cartItems || []).map((item) => (
            <div key={item.id + item.size}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            ))}
            <p>Total: ${cartTotal.toFixed(2)}</p>
        </div>

        <div className="payment_method-container">
            <h2>Payment Method</h2>
            <form id="payment_method-form" autoComplete="on" noValidate>
            <label htmlFor="cc-name">Name on Card:</label>
            <input
                type="text"
                id="cc-name"
                name="cc-name"
                autoComplete="cc-name"
                placeholder="John Doe"
                required
            />

            <label htmlFor="cc-number">Card Number:</label>
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

            <label htmlFor="cc-exp">Expiration Date:</label>
            <input
                type="text"
                id="cc-exp"
                name="cc-exp"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                maxLength="5"
                ref={expDateRef}
                required
            />

            <label htmlFor="cc-csc">CVV:</label>
            <input
                type="text"
                id="cc-csc"
                name="cc-csc"
                autoComplete="cc-csc"
                placeholder="123"
                maxLength="4"
                required
            />

            <button type="submit">Proceed to Pay</button>
            </form>
            <p id="status"></p>
        </div>
    </section>
    );
}
export { PaymentPage };