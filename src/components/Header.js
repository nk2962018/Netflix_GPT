import React from 'react';
import Logo from '../Assests/Netflix_Logo_PMS.png';

const Header = () => {
    return (
        <div className='w-full absolute top-4 left-36'>
            <img src={Logo} alt='logo' className='h-20 w-44 '/>
        </div>
    )
}

export default Header;
