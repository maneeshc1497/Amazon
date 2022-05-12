import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import React,{useEffect} from 'react';
import Checkout from './Checkout';
import Header from './Header';
import Login from './Login';
import CreateAccount from './CreateAccount';
import { auth } from './firebasecon'
import { useStateValue } from './StateProvider';

function App() {
  const [,dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ',authUser);
      if(authUser)
      {
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<div><Header/> <Home/></div>}/>
          <Route path='/checkout' element={<div><Header/> <Checkout/></div>}/>
          <Route path='/login' element={<Login/>}/>            
          <Route path='/createaccount' element={<CreateAccount/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
