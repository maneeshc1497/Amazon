import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product(props) {
    const [,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                price:props.price,
                rating:props.rating,
                img:props.img
            }
        })
    }
    
    return (
        <div className='product'>
        <div className='product__info'>
            <img src={props.img} alt=''/>
            <p>{props.title}</p>
            <div className='product__rating'>
                {
                    Array(props.rating)
                    .fill()
                    .map((_)=>(<p>&#9733;</p>))
                }
            </div>
            <p className='product__price'><small>&#8377;</small><strong>{props.price}</strong></p>            
        </div>
        <button className='product__btn' onClick={addToBasket}>Add to Cart</button>
        </div>
        
    )
}

export default Product
