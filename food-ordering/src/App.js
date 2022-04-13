import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from "./components/Layout/Header";
import CartProvider from './store/CartProvider';


const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => setCartIsShown(true);
    const hideCartHandler = () => setCartIsShown(false);

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};



export default App;