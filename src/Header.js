import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebasecon';
function Header() {
    const [focus, setFocus] = useState(false);
    // const [styles, setstyles] = useState({display:'block'})
    const showHandler=()=>{
        // setstyles({display:'none'}) 
        setFocus(false)
        
    }
    const [state,]=useStateValue();
    const handleAuthentication=()=>{
        if(state.user)
        {
            auth.signOut();
        }
    }
    return (
        
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>
            <div className='header__search' style={{border: focus? '4px solid #cd9042':'none' }}>
                <input type='text' className='header__searchinput' onFocus={()=> setFocus(true)} />
                <SearchIcon className='header__searchicon'/>
            </div>
            <div className='header__nav'>
                <Link to={'/login'} className='header__link'>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionone'>Hello {
                        (state?.user != null)?
    
                            state?.user.email.substring(0, state?.user.email. lastIndexOf("@"))  :'Guest'  
                        },</span>
                        <span className='header__optiontwo'>{state?.user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionone'>Returns,</span>
                        <span className='header__optiontwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionone'>Your</span>
                        <span className='header__optiontwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                    
                        <ShoppingCartIcon />
                        <span className='header__optiontwo'>{state?.basket?.length}</span>
                        
                    </div>
                </Link>

            </div>
            {focus && <div className='header__cover' onClick={showHandler} style={focus? {display:'block'}: {display:'none'}}></div>}
            
        </div>
    )
}

export default Header
