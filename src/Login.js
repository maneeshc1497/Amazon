import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebasecon'

import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn= e=>{
        e.preventDefault();
        console.log(email);
         auth
         .signInWithEmailAndPassword(email,password)
         .then(auth =>{             
             navigate('/')

         })
         .catch(error => alert(error.message))
    }
    

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" alt=''/>
            </Link>
            
            <div className='login__container'>
                <h1>Sign In</h1>
                <form className='login__form'>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button className='login__signinbtn' onClick={signIn}>Sign In</button>
                    
                </form>
                <small>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</small>
                
                <h4>New to Amazon?</h4>
                <Link to='/createaccount' className='login__signup'>
                    <button  className='login__signupbtn' >Create your Amazon account</button>
                </Link>
                
                
                
            </div>
            
        </div>
    )
}

export default Login
