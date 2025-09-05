import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className='w-full bg-black flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
            <div className='flex items-center justify-between w-full md:w-auto'>
                <div className='flex items-center'>
                    <img src="src/assets/logo.png" alt="logo" className='w-24 md:w-32 h-8 md:h-10' />
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-white p-2'
                    onClick={toggleMobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
                <ul className='flex items-center space-x-6 lg:space-x-8'>
                    <li>
                        <NavLink to='/' className='text-white hover:text-gray-200 transition-colors'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='text-white hover:text-gray-200 transition-colors'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='text-white hover:text-gray-200 transition-colors'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' className='text-white hover:text-gray-200 transition-colors'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' className='text-white hover:text-gray-200 transition-colors'>Service</NavLink>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='md:hidden w-full mt-4'>
                    <ul className='flex flex-col space-y-4'>
                        <li>
                            <NavLink 
                                to='/' 
                                className='text-white hover:text-gray-200 transition-colors block py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/about' 
                                className='text-white hover:text-gray-200 transition-colors block py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/contact' 
                                className='text-white hover:text-gray-200 transition-colors block py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/portfolio' 
                                className='text-white hover:text-gray-200 transition-colors block py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/service' 
                                className='text-white hover:text-gray-200 transition-colors block py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Service
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default Header