import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({productId,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                productId:productId,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        });
    }
    
    return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_)=>(<p>⭐</p>))}
            </div>
        </div>
        <div className="product_image">
            <img 
            src={image} 
            alt={productId}/>
        </div>
        <div className="product_button">
        <button onClick={addToBasket}>Add to basket</button>  
        </div>
    </div>
    )
}

export default Product
