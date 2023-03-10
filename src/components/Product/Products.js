import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Products = (props) => {
    // console.log(props)
    const{img,name,seller,price,stock,star}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart } />
    return (
        <div className='products'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <p> By:<small> {seller}</small></p>
                <p> Price: ${price}</p>
                <p> Item left: {stock}</p>
                <Rating
                initialRating={star}
                readonly
                   emptySymbol=" fa-sharp fa-regular fa-star rating-style"
                   fullSymbol=" fa-sharp fa-solid fa-star rating-style"
                />
                
                <br />

                <button onClick={()=>props.HandleAddToCart(props.product)} className='purches-btn'>{element} add to cart </button>
            </div>
            
        </div>
    );
};

export default Products;