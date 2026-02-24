import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './globalStyles.ts';
import { BrowserRouter, Routes, Route } from "react-router";

// Components imports
import { Footer } from './components/footer/footer.jsx';
import { Header } from './components/header/header.jsx';
import { ShopPage } from './components/shopPage/shopPage.jsx';
import { ItemDetails } from './components/itemDetails/itemDetails.jsx';
import { PaymentPage } from './components/paymentPage/paymentPage.jsx';
import { Disclaimer } from './components/disclaimer/disclaimer.jsx';

//Reducer that handles the cart logic
function cartReducer(state, action) {
  switch (action.type) {

    //Adds item to the cart with the selected cuantity and size
    case "ADD_WITH_QUANTITY":
      const existingItemQty = state.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItemQty) {
        //Calculates the new total
        const newQuantity = existingItemQty.quantity + action.payload.quantity;

        return state.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? {
                ...item,
                quantity: newQuantity > 30 ? 30 : newQuantity,
              }
            : item
        );
      } else {
        //Limits the quantity to a maximum of 30
        const safeQuantity =
          action.payload.quantity > 30 ? 30 : action.payload.quantity;

        return [...state, { ...action.payload, quantity: safeQuantity }];
      }

    //Removes item from the cart  
    case "REMOVE_ITEM":
      return state.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );

    //Increases the item quantity from the cart
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    //Decrases the item quantity from the cart
    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    
    //Sets the selected size for an item
    case "SET_SELECTED_SIZE":
      return {
        ...state,
        sizes: {
          ...state.sizes,
          [action.payload.productId]: action.payload.size
        }
      };

    default:
      return state;
  }
}

function App() {
  //State to add items to cart menu
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  //Logic that handles an item getting added to the cart with the size and quantity that was selected at the time of hitting the button
  const handleAddToCart = (product, selectedSize, quantity = 1) => {
  const size = selectedSize ?? product.size[0];
  const type = quantity > 0 ? "ADD_WITH_QUANTITY" : "INCREASE_QUANTITY";

  dispatch({ type, payload: { ...product, size, quantity } });
};

  //Handles the total count of items in the cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  //Logic to calculate the total price of the items in the cart
  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <Header cartCount={cartCount} cartItems={cartItems} cartTotal={cartTotal} dispatch={dispatch} />
          <Routes>
            <Route path="/" element={<ShopPage onAddToCart={handleAddToCart} />} />
            <Route path="/item/:id" element={<ItemDetails onAddToCart={handleAddToCart} />} />
            <Route path="/payment" element={<PaymentPage cartItems={cartItems} cartTotal={cartTotal} dispatch={dispatch}  />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
