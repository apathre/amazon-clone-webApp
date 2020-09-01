import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"
            alt="banner_image"/>
            <div className="home_row">
            <Product
            productId="7896"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={213.45}
            rating={5}
            image="data:image/webp;base64,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"
            />
            <Product
            productId="781296"
            title="Fujifilm Instax Mini 11 Instant Camera (Blush Pink)"
            price={13.45}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41EVeXixVvL._AC_SX368_.jpg"
            />
            </div>
            <div className="home_row">
            <Product
            productId="7762826"
            title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i3 14 inch FHD Thin and Light Laptop"
            price={323.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61s7sJEpsVL._AC_UY436_FMwebp_QL65_.jpg"
            />
            <Product
            productId="2833618"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={723.45}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SX679_.jpg"
            />
            <Product
            productId="09835863"
            title="Fila Men's Spark Sneakers"
            price={29.95}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61xPyRLUkdL._UX695_.jpg"
            />  
            </div>
            <div className="home_row">
            <Product
            productId="65429926"
            title="Carrera Polarized Square Unisex Sunglasses"
            price={185.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZD8qwaJJL._UX679_.jpg"
            />
            <Product
            productId="3213373528"
            title="Ikigai: The Japanese secret to a long and happy life "
            price={12.75}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/814L%2Bvq01mL._AC_UL480_SR342,480_.jpg"
            />
            </div>
            <div className="home_row">
            <Product
            productId="772413696"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight"
            price={1223.45}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY436_FMwebp_QL65_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
