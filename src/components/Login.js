import React, { useRef, useState } from 'react'
import Header from './Header';
import Background from '../Assests/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
       const errorMsg = checkValidData(email.current.value, password.current.value)
       setErrorMsg(errorMsg)
        console.log('email',email.current.value)
        console.log('password',password.current.value)
        console.log('error',errorMsg);
        if(errorMsg) return;
// signIn / signUp logic


    if(!isSignInForm)
        {
            // signup logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://avatars.githubusercontent.com/u/40688792?s=400&v=4"
                  })
                    .then(() => {
                        // bug fix
                        // one first sign in the display name and photo is null becuase that is not created before signin
                        //so only uid and email is sent to the store 
                        // to update the displayname and photo we need to dispatch the action from here.
                        // we get the new info from store so we get it from auth and not user.
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(
                            addUser(
                                {
                                    uid:uid, 
                                    email:email, 
                                    displayName:displayName, 
                                    photoURL:photoURL
                                }
                            )
                        )

                    // if Profile updated! go to browse page
                    navigate('/browse')
                  })
                    .catch((error) => {
                    setErrorMsg(error.message)
                  });
                console.log(user)
                navigate('/browser')
             })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + "-" + errorMessage)
            
            });
        }
    else
        {
            // signin logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage)
                });
            }

    }
    return (
        <div className='relative '>
            <Header/>
            <div >
                <img src={Background} alt='background' className='w-full h-auto'/>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
           <div className='absolute w-1/3  top-1/3 left-1/2 p-10 bg-black transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 text-white'>
            <form 
                onSubmit={(e) => e.preventDefault()}
                className=' mx-8'
            >
                <h1 className='text-3xl mb-4 font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isSignInForm && (
                        <input type='text' ref={name} placeholder='Full Name' className='p-4 mb-4 w-full bg-gray-700 rounded-md'/>
                    )
                }
                <input 
                    type='text' 
                    placeholder='Email' 
                    ref={email}
                    className='p-4 mb-4 w-full bg-gray-700 rounded-md'
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    ref={password}
                    className='p-4 mb-4 w-full bg-gray-700 rounded-md'
                />
                <p className=' py-1 text-lg text-red-900'>{errorMsg}</p>

                <button onClick={handleButtonClick} className='p-2 mb-4 bg-red-700 w-full text-xl font-medium rounded-md cursor-pointer'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-center cursor-pointer'>{isSignInForm? 'Forgot Password?' : ''}</p>
            </form>

            <p className='mt-20' onClick={toggleSignIn}>
                {
                    isSignInForm? <p>New to Netflix?<a href='#' className='underline cursor-pointer'> Sing Up</a></p> : <p>Already a User?<a href='#' className='underline cursor-pointer'> Sing In</a></p>
                }
            </p>
            </div>
        </div>
    )
}

export default Login;
