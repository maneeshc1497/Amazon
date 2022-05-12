export const initalState={
    basket:[],
    user: null
}
export const getBasketTotal =(basket)=>
    basket?.reduce((amount,item)=> item.price + amount,0 );
    
function reducer(state,action){
    
    switch(action.type){
        
        case 'ADD_TO_BASKET':
            return {...state,basket:[...state.basket,action.item],};
            
        case 'REMOVE_FROM_BASKET':
            let newBasket =[...state.basket];
            const index= state.basket.findIndex((bitem)=>bitem.id===action.id)

            if(index>=0)
            {
                newBasket.splice(index,1);

            }
            else{
                console.warn('Product not found')
            }
            return {...state,basket:newBasket}
        case 'CHECKOUT':
            return{...state,basket:action.basket}
        case 'SET_USER':
                return {...state,user:action.user}
        default:
            return state;
    }
}
export default reducer;