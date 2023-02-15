import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Product/Products';
import './Shop.css';

const Shop = () => {
    //Data Load
    const[products,setProducts]=useState([]);

    // cart control
    const[cart,setCart]=useState([]);

    //for data load
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // sideEffect for Data Store parmanently
    useEffect(()=>{
        if(products.length){
            const savedKeys=getStoredCart();
            const productsStoredCart=[];
            for(const key in savedKeys){
                const sellectedProduct=products.find(product=>product.key===key);

                // jodi product select kora hoye thake tahole tar quantity ber kore nibo
                if(sellectedProduct){
                    const keyQuantity=savedKeys[key];
                    // select hoya product er new property hisabe quantity add kore dibo
                    sellectedProduct.quantity=keyQuantity;
                    // tar por array te push kore dibo
                    productsStoredCart.push(sellectedProduct);
                }
                
            }
            // sei arry ke cart ea pathabo
            setCart(productsStoredCart);
        }

    },[products])
    const HandleAddToCart= product=>{
        const newCart=[...cart, product];
        setCart(newCart);
        
        // Local storage ....data store
        addToDb(product.key);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Products 
                        key={product.key}
                        product={product}
                        HandleAddToCart={HandleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart  cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;