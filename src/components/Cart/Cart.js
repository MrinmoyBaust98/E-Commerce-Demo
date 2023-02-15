import React from 'react';
import './Cart.css';

const Cart = (props) => {


    let totalPrice=0;
    let totalQuantity=0;
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity=totalQuantity+product.quantity;
        totalPrice=totalPrice+product.price*product.quantity;
    }
  // another calculation
     const vat=totalPrice*.05;
     const shippingCost=totalPrice>0 ?15 : 0;
     const grandTotal= totalPrice+vat+shippingCost;

    return (
        <div className='cart'>
            <div className='cart-header'>
            <h3>Oder Summary</h3>
            </div>
            

            <div className='cart-items'>
                <h4 className='total-oder'>Items odered: {totalQuantity}</h4>
                <p> Total Price: <small className='tp-sp'></small>$ {totalPrice.toFixed(2)}</p>    
                <p> Vat & Tax : <small className='vt-sp'></small>$ {vat.toFixed(2)}
                </p>
                <p> Shipping Cost : <small className='sc-sp'></small>$ {shippingCost.toFixed(2)}
                </p>   
            </div>
            <hr className='hrline' />
            <h3 className='grand-total'> Grand Total : <small className='grand-total-sp'></small>$ {grandTotal.toFixed(2)}
                </h3>
           
        </div>
    );
};

export default Cart;