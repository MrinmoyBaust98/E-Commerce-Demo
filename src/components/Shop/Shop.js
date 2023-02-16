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

    // search product display state
    const[displayProducts,setDisplayProducts]=useState([]);

    //for data load
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=> {
            setProducts(data);
            setDisplayProducts(data);
        });
        
    },[]);

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
    
    // search bar handle
    const handleSearchBar=event=>{
        const searchText=event.target.value;
        
        const matchProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);
    }

    return (
        
        <div>

            <div className='search-bar'>
                <input onChange={handleSearchBar} type="text" placeholder='Search Product' />

            </div>
            <div className='shop-container'>
            <div className="product-container">
                {
                    // ....> products.map...<(product..... ata general er jonne )...search bar er jonne change hoye displayProduct hobe 
                        displayProducts.map(product=><Products 
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
        </div>
    );
};

export default Shop;