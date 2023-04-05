import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { name, id, img, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: {quantity}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItem;