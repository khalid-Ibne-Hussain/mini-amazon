import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({ cart, handleClearCart, children }) => {
    // const Cart = (props) => {  // option 3
    // const Cart = ({cart}) => {  // option 3
    // const cart =props.cart; // option 1
    // const {cart}=props;  // option 2
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        //  or
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(0)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart<FontAwesomeIcon className='' icon={faTrash} /></button>
            {children}
        </div>
    );
};

export default Cart;