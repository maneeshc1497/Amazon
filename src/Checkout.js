import React from 'react'
import './Checkout.css'
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [state]=useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            {state?.basket?.length===0 ?
            <div>
             <h1>Your Amazon Cart is empty.</h1> 
             <p>You have no items in your shopping cart. To buy one or more items,click <strong>'Add to Cart'</strong> next to the item </p>
             </div>
             : 
             <div>
                 <h1>Shopping Cart</h1>
                 {state?.basket?.map(item=>(
                     <CheckoutProducts 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        img={item.img}
                     />
                 ))}
             </div>                 
            }
            </div>
            {state.basket.length > 0 && (
                <div className='checkout__right'>
                        <h1>Subtotal</h1>
                        <Subtotal/>
                </div>
            )}
            

            
        </div>
    )
}

export default Checkout
