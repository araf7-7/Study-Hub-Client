
import { Link, NavLink } from "react-router-dom";

import UseAuth from '../UseAuth';
// import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";



const Header = () => {
    const { logout, user } = UseAuth();
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme(' coffee')

        } else {
            setTheme('light')
        }
    }
    console.log(theme);
    const handleLogout = () => {
        logout(); // Invoke the logout function
    };

    return (
        <div>
            <div className="navbar text-black">
                <div className="navbar-start gap-14 lg:gap-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 font-semibold">
                            <NavLink to="/" className="hover:text-green-500 hover:border-2 hover:border-green-500 p-2 rounded-lg">Home</NavLink>
                            <NavLink to="/assignment" className="hover:text-green-500 hover:border-2 hover:border-green-500 p-2 rounded-lg">Assignments</NavLink>

                        </ul>
                    </div>
                    <div className="flex  justify-center item-center text-center">
                        <img src="https://i.ibb.co/jLsCvDH/Black-Illustrative-Education-Logo.png" alt="" className="w-[100px] h-auto" />
                        <h2 className="btn md:justify-end lg:justify-normal btn-ghost mt-6 text-2xl">StudyHub</h2>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center justify-between gap-10">
                        <NavLink to='/'>
                            <li className="group flex  cursor-pointer flex-col">
                                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </NavLink>
                        <Link to='/assignment'>
                            <li className="group flex  cursor-pointer flex-col">
                                Assignments <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to='/CreateAssignment'>
                            <li className="group flex  cursor-pointer flex-col">
                                Create Assignments <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <li className="group flex  cursor-pointer flex-col">
                            Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <label className="cursor-pointer hidden lg:grid place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox" value="coffee" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    <div className="items-center  lg:flex">
                        {user ? (
                            <div className="flex gap-3">
                                <div className="dropdown dropdown-end mx-auto flex lg:mr-10">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">

                                            {user.photoURL ? (

                                                <img src={user?.photoURL} alt={user?.displayName} />
                                            ) : (
                                                <span>{user?.displayName?.charAt(0)}</span>
                                            )}
                                            <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>

                                            </ul>
                                        </div>

                                    </label>


                                </div>
                                <button className="btn btn-ghost  rounded-xl  px-6 py-2  text-black bg-green-500 hover:bg-green-600" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <><NavLink to="/login"><button className="self-center mx-2 btn btn-ghost hidden rounded-xl  px-8 py-3  text-black bg-green-300 hover:bg-green-600 lg:flex">Login</button></NavLink>
                                <NavLink to="/register"><button className="self-center px-8 hidden py-3 btn btn-ghost  rounded-xl   text-black bg-green-300 hover:bg-green-600 lg:flex `">Register</button></NavLink></>
                        )}

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Header;
