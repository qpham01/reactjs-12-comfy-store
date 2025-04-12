import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLinks } from '../components';
const themes = {
  light: 'light',
  dark: 'dark',
};

const getTheme = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  return theme;
};

const StoreNavbar = ({ links }) => {
  const [theme, setTheme] = useState(getTheme());
  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const numCartItems = useSelector((state) => {
    return state.cartState.itemCount;
  });

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/*TITLE*/}
          <NavLink
            to='/'
            className='lg:flex btn btn-primary text-3xl items-center gap-x-2'
          >
            C
          </NavLink>
          {/* DROPDOWN*/}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost sm:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks links={links} />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden sm:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks links={links} />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME SETUP */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* sun */}
            <BsSunFill className='swap-on w-4 h-4' />
            {/* moon */}
            <BsMoonFill className='swap-off w-4 h-4' />
          </label>
          {/* CART LINK */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numCartItems}
              </span>
            </div>
          </NavLink>
          <button className='btn btn-ghost btn-circle'></button>
        </div>
      </div>
    </nav>
  );
};
export default StoreNavbar;
