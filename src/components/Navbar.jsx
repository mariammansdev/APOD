import { BsHeartFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';

const themes = {
  fantasy: 'fantasy',
  dark: 'dark'
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.fantasy;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { fantasy, dark } = themes;
    const newTheme = theme === fantasy ? dark : fantasy;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* Navbar Start */}
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl items-center">
            A
          </NavLink>
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">

          <button
            onClick={handleTheme}
            className="btn btn-ghost btn-circle transition-transform"
          >
            {theme === themes.dark ? (
              <BsSunFill className="h-5 w-5 text-warning" />
            ) : (
              <BsMoonFill className="h-5 w-5 text-primary" />
            )}
          </button>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsHeartFill className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">88</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
