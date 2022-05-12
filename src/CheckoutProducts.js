import React from 'react'
import './CheckoutProducts.css'
import { useStateValue } from './StateProvider';
function CheckoutProducts(props) {
    const [,dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id

        })
    }
    return (
        <div className='checkoutProducts'>
            <img src={props.img} alt=''/>
            <div className='checkoutProducts__info'>
            <p>{props.title}</p>
            <div className='checkoutProducts__rating'>
                {
                    Array(props.rating)
                    .fill()
                    .map((_)=>(<p>&#9733;</p>))
                }
            </div>
            <p className='checkoutProducts__price'><small>&#8377;</small><strong>{props.price}</strong></p>
            <button className='checkoutProducts__btn' onClick={removeFromBasket}>remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
