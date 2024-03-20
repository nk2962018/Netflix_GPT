import React, { useEffect } from 'react'
import Login from './Login';
import Header from './Header';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    // step 6 :  diaptch action
    const dispatch = useDispatch();
   // const navigate = useNavigate();
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element: <Browse/>
    },
    {
        path:'/header',
        element:<Header/>
    }
    
])

// useEffect is used to setup the event listener only once
useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            //user is signed In
            const {uid, email, displayName, photoURL} = user;
            // ... Dispath action
            // adding email, uid etc to store and it changes on auth state change
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
            // we cannot use navigate here becuase it need to be written in children componenet like insideRouterProvider.
            // But that not good way .
           // navigate("/browse")
        } else {
            // User is signed out
            dispatch(removeUser());
           // navigate("/")
        }
    });

}, [])


    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;
