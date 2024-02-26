import React, { useState } from 'react'
import Header from './Header';
import Background from '../Assests/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div className='relative '>
            <Header/>
            <div >
                <img src={Background} alt='background' className='w-full h-auto'/>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
           <div className='absolute w-1/3  top-1/3 left-1/2 p-10 bg-black transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 text-white'>
            <form className=' mx-8'>
                <h1 className='text-3xl mb-4 font-bold '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isSignInForm && (
                        <input type='text' placeholder='Full Name' className='p-4 mb-4 w-full bg-gray-700 rounded-md'/>
                    )
                }
                <input type='text' placeholder='Email' className='p-4 mb-4 w-full bg-gray-700 rounded-md'/>
               
                <input type='password' placeholder='Password' className='p-4 mb-4 w-full bg-gray-700 rounded-md'/>
                <button className='p-2 mb-4 bg-red-700 w-full text-xl font-medium rounded-md'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-center'>{isSignInForm? 'Forgot Password' : ''}</p>
            </form>

            <p className='mt-20' onClick={toggleSignIn}>
                {
                    isSignInForm? <p>New to Netflix?<a href='#' className='underline'> Sing Up</a></p> : <p>Already a User?<a href='#' className='underline'> Sing In</a></p>
                }
            </p>
            </div>
        </div>
    )
}

export default Login;
