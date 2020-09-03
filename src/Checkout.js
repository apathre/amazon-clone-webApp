import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}]=useStateValue();

    return (
        <div className="checkout">
            <div className="productList">
                <img
                className="checkout_banner"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="ad_banner"/>
                
            


            <div className="checkout_items">
                {(basket.length===0)
                ?(
                    <div className="checkout_heading">
                        <h2>Your Shopping Basket is empty!!</h2>
                        <p>
                            You have no iems in your basket. To buy one or more items, click Add to basket next to items
                        </p>
                    </div>
                ):(
                    <div className="checkout_heading">
                        <h2 className="checkout_title">Your shopping basket is here</h2>
                        {basket.map(item=>(
                            <CheckoutProduct
                             productId={item.productId}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             />
                        ))}
                    </div>
                )}
                
            </div>
            </div>
            {(basket.length)&&
                (
                <div className="checkout_subtotal">
                    <Subtotal/>
                </div>
                )}
        </div>
    )
}

export default Checkout
