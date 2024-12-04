import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext)
    const {user} = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-blue-500 text-white pb-8">
            <nav className="w-[90%] mx-auto">
                {/* Row 1: Welcome Message */}
                <div className="text-center py-2">
                    <p className="text-lg font-semibold">{user ? `Welcome ,${user.displayName}` : ''} </p>
                </div>
                {/* Row 2: Navigation */}
                <div className="flex justify-between md:flex-row flex-col items-center px-4 py-2 gap-4">
                    {/* Logo */}
                    <div className="logo">
                        <h1 className='text-3xl md:text-5xl font-extrabold'>Chill Gamer</h1>
                    </div>
                    {/* Navigation */}
                    <div
                        onClick={() => setOpen(!open)}
                        className='block lg:hidden pb-2'>
                        <button className="px-4 py-2 bg-blue-700 rounded">
                            {
                                open ? <IoClose /> : <IoMenu />
                            }
                        </button>
                    </div>
                    <nav className={`${open ? 'flex items-baseline gap-2' : 'hidden'} lg:flex flex-col lg:flex-row space-x-4 items-center`}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/brands">All Reviews</NavLink>
                        <NavLink to="/brands">Add Review</NavLink>
                        <NavLink to="/brands">My Reviews</NavLink>
                        <NavLink to="/brands">Game WatchList</NavLink>
                       
                       {/* {
                        user &&  <NavLink to="/my-profile">👤 My Profile</NavLink>
                       } */}
                    </nav>
                    {/* Authentication */}
                    {
                        user ?
                            <div className="auth flex items-center gap-2">
                                <Link to={"/auth"} className=" border-none  rounded-full">
                                    {
                                        user &&
                                        <div className='flex flex-col items-center'>
                                            <img src={user.photoURL} alt="" className='w-8 h-8 rounded-full' />
                                            <p className='text-xs'>{user.email}</p>
                                        </div>
                                        // console.log(user.photoURL)
                                    }
                                </Link>
                                <button to={"/auth/signUp"}
                                    onClick={logOut}
                                    className="btn border-none hover:bg-blue-700 text-white bg-blue-700 rounded">Log Out</button>
                            </div>
                            :

                            <div className="auth flex items-center gap-2">
                                <Link to={"/auth"} className="btn border-none hover:bg-blue-700 text-white bg-blue-700 rounded">Login</Link>
                                <Link to={"/auth/signUp"} className="btn border-none hover:bg-blue-700 text-white bg-blue-700 rounded">Register</Link>
                            </div>
                    }

                </div>
            </nav>
        </div>

    );
};

export default Navbar;