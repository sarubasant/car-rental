import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import useUserStore from '../store/useUserStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className={`font-[Roboto] w-full h-16 flex items-center gap-6 justify-between px-4 sticky top-0 z-10 bg-white`}>
                <div className="left items-center h-full flex">
                    <div className="logo mb-2"><img src="/static/images/logo.png" className='w-[60px] h-[60px]' alt="" /></div>
                    <Link to="/" className='font-bold text-2xl ml-3'>Car Nepal</Link>
                </div>
                <div className='hidden md:flex'><Navitems /></div>
                <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}><RxHamburgerMenu size={24} className="hamburger cursor-pointer hoverEffect" /></button>
                {
                    menuOpen && (
                        <div className='md:hidden absolute w-full right-0 top-16 border bg-white'>
                            <Navitems />
                        </div>
                    )
                }
            </nav>
        </>
    )
}
export default Navbar

const Navitems = () => {
    const currentUser = useUserStore((state) => state.currentUser)
    const setCurrentUser = useUserStore((state)=> state.setCurrentUser)
    return (
        <>
            <div className="right flex  items-center gap-7">
                <ul className='flex flex-col md:flex-row gap-6 font-bold'>
                    <li className='hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='hover:text-gray-400 cursor-pointer'><a href="#about">About Us</a></li>
                    <li className='hover:text-gray-400 cursor-pointer'><a href="#contact">Contact Us</a></li>
                    {
                        currentUser ? <li className='hover:text-gray-400 cursor-pointer' onClick={()=>setCurrentUser(null)}>Logout</li>
                            :
                            (<>
                                <li className='hover:text-gray-400 cursor-pointer'><Link to='/login'>Login</Link></li>
                                <li className='hover:text-gray-400 cursor-pointer'><Link to="/register">Register</Link></li>
                            </>
                            )
                    }

                </ul>
            </div>

        </>
    )
}
