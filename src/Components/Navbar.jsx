"use client";

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { TrainContext } from '@/context/TrainContext';
import { usePathname } from 'next/navigation'; // Added for active link styling

const Navbar = () => {
    const { plan, saved } = useContext(TrainContext);
    const pathname = usePathname(); // Get current URL path

    // Helper function to style the desktop links based on the active route
    const getLinkClass = (path) => {
        const baseClass = "px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-200";
        return pathname === path 
            ? `${baseClass} bg-[#c5e1a5] text-[#1a1a1a]` // Active state: light green pill, dark text
            : `${baseClass} text-gray-300 hover:text-white`; // Inactive state
    };

    return (
        <div className="bg-[#1a1a1a] text-white border-b border-gray-800 w-full">
            <div className="navbar container mx-auto max-w-7xl px-4">
                
                {/* --- LEFT: LOGO & MOBILE MENU --- */}
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-[#2a2a2a] rounded-box z-[50] mt-3 w-52 p-2 shadow-xl border border-gray-700">
                            <li><Link href='/trainingList' className={pathname === '/trainingList' ? 'bg-[#c5e1a5] text-black' : ''}>Workouts</Link></li>
                            <li><Link href='/trainingList/MyPlan' className={pathname === '/trainingList/MyPlan' ? 'bg-[#c5e1a5] text-black' : ''}>My Plan</Link></li>
                        </ul>
                    </div>
                    
                    {/* Logo Section */}
                    <Link href="/" className='flex gap-2 items-center cursor-pointer'>
                        <Image src={logo} alt='logo' width={24} height={24} className="object-contain" />
                        <h2 className='text-xl font-extrabold tracking-widest uppercase'>FITLOG</h2>
                    </Link>
                </div>

                {/* --- CENTER: DESKTOP LINKS --- */}
                <div className="navbar-center hidden lg:flex gap-2">
                    <Link href='/trainingList' className={getLinkClass('/trainingList')}>
                        Workouts
                    </Link>
                    <Link href='/trainingList/MyPlan' className={getLinkClass('/trainingList/MyPlan')}>
                        My Plan
                    </Link>
                </div>

                {/* --- RIGHT: DYNAMIC COUNTERS --- */}
                <div className="navbar-end gap-5">
                    {/* Plan Counter */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-200">Plan</span>
                        <span className="bg-[#fde047] text-black text-xs font-extrabold rounded-full w-6 h-6 flex items-center justify-center">
                            {plan?.length || 0}
                        </span>
                    </div>
                    
                    {/* Saved Counter */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-200">Saved</span>
                        <span className="text-sm font-extrabold text-white">
                            {saved?.length || 0}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;