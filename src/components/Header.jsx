import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NET_LOGO, SMILE_LOGO } from '../utils/constant';
import { toogleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const user = useSelector((store)=> store.user)
  const handleSignOut = ()=>{


    signOut(auth)
    .then(() => {
      
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}))
            navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      return ()=> unsubscribe();
  }, [])

  const handleGPTSearchClick = ()=>{
      dispatch(toogleGptSearchView());
  }
  return (
    <div className='absolute z-50  md:flex md:justify-between items-center w-screen px-8 py-2 bg-gradient-to-b from-black'>
      <img 
      className=' m-auto w-38 md:w-44 md:m-0 '  
      src={NET_LOGO} alt="logo" />

      {user && (<div className='flex items-center w-full justify-between md:w-auto md:px-8'>
        <button className='text-white font-medium mr-6 bg-purple-700 px-2 py-1 rounded cursor-pointer ' onClick={handleGPTSearchClick} > {showGptSearch ? "🏠︎" : "GPT 🔍︎"}</button>
        <img
        className='w-10 h-10 hidden sm:hidden md:block'
         src= {SMILE_LOGO} alt="logo" />
        <button onClick={handleSignOut} className='text-white font-bold text-sm cursor-pointer'>{"Sign Out"}</button>
        </div>
      )}
    
    </div>
  )
}

export default Header