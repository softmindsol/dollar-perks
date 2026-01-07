import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data';
import logo from "../../assets/images/logo.png";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='container max-w-screen-lg'>
      <nav className='flex justify-between items-center'>
        <img src={logo} alt="Logo" className='' />
        {/* <ul className='flex gap-4'>
          {navLinks.map(nav => (
            <li key={nav?.id}>
              <NavLink
                className={`${
                  pathname === nav.path
                    ? 'text-primary font-semibold border-b-2'
                    : 'text-black'
                }`}
                to={nav?.path}
              >
                {nav?.label}
              </NavLink>
            </li>
          ))}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
