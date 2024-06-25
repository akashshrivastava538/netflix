import React, { useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMesage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const handleButtonClick = () =>{
    //   console.log(email.current.value);
    //   console.log(password.current.value);
      const message=checkValidData(email.current.value,password.current.value);
      setErrorMesage(message);
      if(message) return;

      if(!isSignInForm){
           // sign up logic
   createUserWithEmailAndPassword(auth,email.current.value,password.current.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMesage(errorCode+"-"+errorMessage)
    
  });

      }
      else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMesage(errorCode+"-"+errorMessage)
  });

      }

    }
    const toggleSignInForm=() =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="logo"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm?"Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
            <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
            />)}
            <input 
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700"
            />
            <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700"
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm?"Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer"onClick={toggleSignInForm}>
            {isSignInForm?"New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login