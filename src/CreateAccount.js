import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './CreateAccount.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { auth } from './firebasecon';

function CreateAccount() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [created, setCreated] = useState(false)
    
    const register= e=>{       
        e.preventDefault();
        if(password===confirmpassword)
         {
             auth.createUserWithEmailAndPassword(email,password)
             .then((auth)=>{
                 console.log('successfuly created');
                 setCreated(true);
             })
              .catch(error=> alert(error.message))
         }    
         else 
             alert('Invalid email id or password')
    }
    return (
        <div className='createacc'>
        <Link to='/'>
            <img className='createacc__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" alt=''/>
        </Link>
        <div className='createacc__container'>
        {created 
        ?(
            <div className='createacc_success' >
                <CheckCircleIcon className='createacc_successicon'/>
                <h1 >Created Successfuly</h1>
                <p>Enjoy shopping</p>
                <Link to='/'>
                    <button className='createacc_signinbtn'>Continue</button>
                </Link>
                
            </div>
        )

        :(<>
                <h1>Create Account</h1>
                <form className='createacc__form'>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>

                    <h5>Confrim Password</h5>
                    <input type='password' value={confirmpassword} onChange={e=> setConfirmPassword(e.target.value)}/>
                    <button type='submit' className='createacc__signupbtn' onClick={register}>sign in</button>
                                        
                </form>
                </>
        ) }
        </div>
    </div>
    )
}

export default CreateAccount
