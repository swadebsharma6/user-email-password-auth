import { NavLink } from "react-router-dom";


const Header = () => {

    const menu = <>
            <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-xl text-blue-600 underline" : ""
            }
          >
            Home
          </NavLink></li>
            <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-xl text-blue-600 underline" : ""
            }
          >
            Login
          </NavLink></li>
            <li><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-xl text-blue-600 underline" : ""
            }
          >
           Register
          </NavLink></li>
    </>

    return (
        <nav className ="mb-10">
        <div className="navbar px-5 bg-base-200 rounded ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  text-orange-500  font-bold menu-horizontal px-1">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div> 
        </nav>
    );
};

export default Header;