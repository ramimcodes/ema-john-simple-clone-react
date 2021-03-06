import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {

    const {img, name, seller, price, stock, key} = props.productData
    return (
        <div className='product'>

            <div>
                 <img src={img} alt=""/>
            </div>
            <div className='product-info'>
                <h4 className='product-name'> 
                    <Link to = {`/product/${key}`} > {name} </Link>
                 </h4>
             
                <p> <small> by:{seller} </small> </p>
                <p>${price} </p>
                <p> only {stock} left in stock - order soon </p>
               { props.showAddToCart && <button 
                onClick={() => props.handlAddProduct(props.productData)}
                className='cart-btn'
                >
                     <FontAwesomeIcon icon={faShoppingCart} />
                      add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;