import React from 'react'
import Login from './Login';
import Header from './Header';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

const Body = () => {
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;
