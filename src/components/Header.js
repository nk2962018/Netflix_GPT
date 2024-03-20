import React from 'react';
import Logo from '../Assests/Netflix_Logo_PMS.png';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
const Header = () => {

    const navigate = useNavigate();
    // subscribe to store for state chagnge and get photo url
    const user = useSelector(store => store.user)

    const handleSignOut = () =>{
        
        signOut(auth)
            .then(() => {
            // if Sign-out successful.
            navigate('/')
        })
            .catch((error) => {
        // An error happened.
                navigate('/error')
        });
    }
    return (
        <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <div>
                <img 
                    src={Logo} 
                    alt='logo' 
                    className='h-11 w-32 '
                />
            </div>
            { user && (
            <div>
            
                <img 
                    src={user?.photoURL}
                    alt='loginIcon'
                    className='rounded-md h-8 w-8'
                />
                  <span 
                        className='cursor-pointer underline'
                        onClick={handleSignOut}
                        >Sign Out
                    </span>
                
            </div>
            )}
            
        </div>
    )
}

export default Header;
