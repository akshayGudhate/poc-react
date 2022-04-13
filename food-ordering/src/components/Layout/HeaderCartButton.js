import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${isButtonHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) return;
        setIsButtonHighlighted(true);

        const timer = setTimeout(() => {
            setIsButtonHighlighted(false);
        }, 300);

        return () => clearTimeout(timer);

    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>
                Your Cart
            </span>

            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};



export default HeaderCartButton;