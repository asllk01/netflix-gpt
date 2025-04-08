import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NET_LOGO, SMILE_LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  return (
    <div className='absolute z-50 flex justify-between items-center w-screen px-8 py-2 bg-gradient-to-b from-black'>
      <img 
      className='w-44'  
      src={NET_LOGO} alt="logo" />

      {user && (<div className='flex items-center px-8'>
        <img
        className='w-10 h-10'
         src= {SMILE_LOGO} alt="logo" />
        <button onClick={handleSignOut} className='text-white font-bold text-sm cursor-pointer'>{"Sign Out"}</button>
        </div>
      )}
    
    </div>
  )
}

export default Header