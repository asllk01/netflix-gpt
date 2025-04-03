import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSign, setIsSignIn] =useState(true)
  
  const toogleSignForm = ()=>{
    setIsSignIn(!isSign)
  }

  return (
    <div>
       <Header/>

       <div className='relative'>

        <img className='h-screen w-screen ' src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg" alt="bg" />
        <div className='h-screen w-screen bg-black/50 absolute top-0'  alt="bg" ></div>

        <form className='absolute bg-black/70 rounded-lg bg-opacity-80 w-5/18 text-white p-12 my-26 right-0 top-0 left-0 mx-auto'>
          <h1 className='text-3xl font-bold my-3'>{isSign ? "Sign In" : "Sign Up"}</h1>
          
          {!isSign && (
            <input type="text" placeholder='Full Name' className='bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />
          )}

          <input type="text" placeholder='Email or mobile Number' className='bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />
          <input type="password" placeholder='Password' className='bg-black/30 border-1 border-white/30  rounded-sm my-2 p-4 w-full' />

          <button className='p-2 my-3 bg-red-600 w-full rounded-sm cursor-pointer'>{isSign ? "Sign In" : "Sign Up"}</button>
          {isSign && (
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
          {isSign ? 
             <p>New to Netflix? <span className='font-bold cursor-pointer' onClick={toogleSignForm}>Sign up now.</span></p>
          :
             <p>Already registered? <span className='font-bold cursor-pointer' onClick={toogleSignForm}>Sign In now.</span></p>
          }


        </form>
       </div>
        
      

    </div>
  )
}

export default Login