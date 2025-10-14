import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Components imports
import { Footer } from './components/footer/footer.jsx';
import { Header } from './components/header/header.jsx';
import { ShopPage } from './components/shopPage/shopPage.jsx';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <React.StrictMode>
      <Header cartCount={cartCount} />
      <ShopPage setCartCount={setCartCount} />
      <Footer />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
