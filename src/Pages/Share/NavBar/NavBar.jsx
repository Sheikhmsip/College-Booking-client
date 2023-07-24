import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import logo from '../../../assets/Img/logo.png'
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';


const NavBar = () => {
    const {user, logout} = useContext(AuthContext)

    const signOut = () => {
        logout()
        .then()
        .catch(error => {
            console.log(error)
        });
        toast.success('Logout Successful') 

    }

    const navItems = <>
    <li className=' '>
        <ActiveLink to='/'>Home</ActiveLink>
    </li>
    <li>
        <ActiveLink to='/college'>Colleges</ActiveLink>
    </li>
    <li>
        <ActiveLink to='/admission'>Admission</ActiveLink>
    </li>
   {/* {
    isAdmin?  <li>
    <ActiveLink to='/dashboard/manage-users'>Dashboard</ActiveLink>
</li> : isInstructor? <li>
    <ActiveLink to='/dashboard/instructor-class'>Dashboard</ActiveLink>
</li>  : user ?
 <li>
    <ActiveLink to='/dashboard/myclasses'>Dashboard</ActiveLink>
</li> 
: ''
   } */}
</>

    return (
        <div  className='mt-2'  >
        <div  className="navbar items-center justify-center border rounded-full shadow-slate-200 shadow-md ">
            <div className="navbar-start">
                <div data-aos="fade-up" data-aos-duration="2000" className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" gap-3  dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 font-bold text-xl">
                       {navItems}
                    </ul>
                </div>
            <div data-aos="fade-right" data-aos-duration="2000" className='flex items-center justify-center'>
            <img src={logo} alt="" className='' />
            
            </div>

            </div>
            <div data-aos="fade-down" data-aos-duration="2000" className="navbar-center hidden lg:flex">
                <ul className=" flex gap-4 px-1 font-bold text-xl">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <h3>{user?.displayName}</h3>
                }
                {
                    user && <img className=' mr-2 w-16 rounded-full h-16 ' src={user?.photoURL} alt={user?.displayName} />
                }
            
                {user ? 
                    <Link onClick={signOut}  className="btn font-bold rounded-full bg-red-300">Logout</Link> :
                    
                    <Link to='/login' className="btn font-bold rounded-full bg-red-300">Login</Link>
                }
            </div>
        </div>
    </div>
    );
};

export default NavBar;