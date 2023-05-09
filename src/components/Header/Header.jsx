import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-[#372737] text-neutral-content flex justify-center">
           <Link ><img className='w-64' src={logo} alt="" /></Link>
        </div>
    );
};

export default Header;