import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({productId,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            productId:productId
        });
    }
    
    return (
        <div className="CheckoutProduct">
            
            <img className="CheckoutProduct_image"
            src={image}
            alt="product_image"/>
            
            <div className="CheckoutProduct_info">
            <h4 className="CheckoutProduct_title">{title}</h4>
            <p><small>$</small><strong>{price}</strong></p>
            <div className="CheckoutProduct_rating">
                {Array(rating).fill().map((_)=>(<span>⭐</span>))}
            </div>
            <button 
            className="CheckoutProduct_button"
            onClick={removeFromBasket}>Remove from basket</button>
            
    </div>
        </div>
    )
}

export default CheckoutProduct
