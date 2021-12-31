import React from 'react';
import iconCart from '../../assets/images/icons/cart.svg';

const CartWidget = () => {
    return (
        <div className="cart">
            <img src={iconCart} alt="Cart" />
        </div>
    )
}

export default CartWidget;
