import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, SMILE_LOGO } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] =useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  // using regex for validate the form
  const handleButtonClick = ()=>{
    const message = checkValidData(name?.current?.value,email.current.value,password.current.value);
    setErrorMessage(message);
    console.log(message);
    if(message) return;

    //sign In Sign Up Logic
    if(!isSignInForm){
      // sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.name, photoURL: SMILE_LOGO
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}))
        }).catch((error) => {
          // An error occurred
          // ...
        });
        
        
        console.log('Namaste');
        
        console.log(user);
        
       })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      });
    }
    else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        setErrorMessage("Invalid Credential");
        
        
        
        });
    }
    
  }


  const toogleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
    setErrorMessage(null);
    email.current.value=null;
    password.current.value=null;
  }

  return (
    <div className='overflow-hidden'>
       <Header/>

       <div className='relative'>

        <img className='h-screen min-w-[700px] w-screen scale-135 brightness-50' src={BG_URL} alt="bg" />

        <form onSubmit={(e)=> e.preventDefault()} className='absolute  bg-black/70 rounded-lg bg-opacity-80 min-w-[300px] max-w-[400px] text-white p-12 my-26 right-0 top-0 left-0 mx-auto'>
          <h1 className='text-3xl font-bold my-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          
          {!isSignInForm && (
            <input ref={name} type="text" placeholder='Full Name' className='bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />
          )}

          <input ref={email} type="text" placeholder='Email or mobile Number' className='focus:outline-black bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />
          

          <input ref={password} type="password" placeholder='Password' className='focus:outline-black bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />
          <p className='text-red-500 text-sm py-2'>{errorMessage}</p>

          <button className='p-2 my-3 bg-red-600 w-full rounded-sm cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          {isSignInForm && (
            <>
             <div className=' my-1 w-full text-center opacity-87'>OR</div>
             <div className='p-2 bg-white/20 my-3 text-center rounded-sm cursor-pointer'>Use a sign-in code</div>
             <p className='text-center underline cursor-pointer'>Forgot password?</p>
             <div className='my-3'>
             <input type="checkbox" />
             <label htmlFor="" className='text-sl '> Remeber me</label>
             </div>
            </>
          )}
          {isSignInForm ? 
             <p>New to Netflix? <span className='font-bold cursor-pointer' onClick={toogleSignInForm}>Sign up now.</span></p>
          :
             <p>Already registered? <span className='font-bold cursor-pointer' onClick={toogleSignInForm}>Sign In now.</span></p>
          }


        </form>
       </div>
        
      

    </div>
  )
}

export default Login