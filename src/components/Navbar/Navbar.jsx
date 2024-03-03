import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () =>{
      logOut()
      .then()
      .catch(err=> {
        console.log(err.message);
      })
    }
    const navItems = <>
    <li className=' font-bold text-lg lg:me-28'><Link to='/'>Posts</Link></li>
    
    <li>
    {user ? <><p onClick={handleLogout} className="btn  btn-link
  "><Link>LOG OUT</Link></p></>: <p className="btn btn-link mr-2
  "><Link to="/login">LOGIN</Link></p>}
    </li>
    {user ? <img className="w-8 h-8 rounded-full" src={user?.photoURL
} alt="" />: <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsSYuMnSziZqiTm7N3_cuyCNbBwkLCxtgN7V6rlV4VaMUje7vpgmUDRJxQiZM7TWI7xM&usqp=CAU" alt="" />}
  </>
    return (
        <div className="navbar max-w-[1440px]  mx-auto my-auto h-28 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case h-full">
            <h1 className='text-5xl'><FaHouseChimneyMedical /></h1>
            <p className='text-4xl font-bold'>Posts</p>
          </Link>
        </div>
        <div className="navbar-end hidden  lg:items-center  lg:flex">
          <ul className="menu menu-horizontal flex  items-center px-1">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;