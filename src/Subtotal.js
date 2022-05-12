import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import {  useNavigate } from 'react-router-dom'
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [state,dispatch]=useStateValue();
    const navigate = useNavigate();
    const handleBuy = e =>{
        e.preventDefault();
        if(state?.user)
        {
           
            alert('Your items will be delivered to your Address soon!');
            dispatch({
                type:'CHECKOUT',
                basket:[]
    
            })
        }else{
            alert('Login to Buy your Items');
            navigate('/login')
        }
        
    }
    return (
        <div className='subtotal'>
            <p>Subtotal ({state?.basket?.length} item): &#8377;<strong>{getBasketTotal(state?.basket)}</strong></p>
            <small className='subtotal__gift'><input type='checkbox' /> This order contains a gift</small>
            <button onClick={handleBuy} className='subtotal__btn'>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
