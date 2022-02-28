import React, { useState } from 'react';
import headerLogo from '../images/header-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';


export default function Header() {

    const [mobileView, setMobileView] = useState<boolean>(false);

    const toggleHandler = () => {
        setMobileView((prevState => !prevState))
    }


    return (
        // className={`${mobileView? 'h-76':'h-18'} bg-black transition-all duration-1000 ease-in-out`}
        // className={`bg-black ${mobileView?'expanded':'compressed'} `}
        <nav id="navbar" className={`${mobileView? 'h-64':'h-16'} bg-black transition-all duration-300 ease-in-out`}   >
            <div className="mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex w-full">
                        <div>

                            <a href="#" className="flex items-center py-1 px-2">
                                <img src={headerLogo} alt="Logo" className="h-10 w-25 mr-2 mt-3" />
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1 w-full">
                            <div className="flex justify-around items-center w-full mx-5" >
                                <input type="text" className="h-6 w-full" />
                                <SearchIcon className="bg-yellow-400" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="" className="py-4 px-2 text-white font-semibold">Login</a>
                        <a href="" className="py-4 px-2 text-white font-semibold">Orders</a>
                        <a href="" className="py-4 px-2 text-white font-semibold">Cart</a>

                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleHandler}>
                            <MenuIcon style={{ color: 'white' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${mobileView?'': 'hidden'} mobile-menu`}>
                <ul className=''>
                    <li className="flex items-center py-2 px-6" >
                        <input type="text" />
                        <SearchIcon className="bg-yellow-400" />
                    </li>
                    <li><a href="index.html" className="block text-white text-sm px-6 py-4 font-semibold">Login</a></li>
                    <li><a href="#" className="block text-white text-sm px-6 py-4">Orders</a></li>
                    <li><a href="#" className="block text-white text-sm px-6 py-4">Cart</a></li>
                </ul>
            </div>
        </nav>
    )
}
