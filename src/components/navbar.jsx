import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../authProvider';

function Navbar() {
  const { user } = useContext(authContext);

  function Action() {
    return (
      <>
        {user ? (
          <>
            <Link
              to={'/dashboard'}
              className='btn rounded-full bg-warm px-10 border-none'>
              Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link
              to={'/signup'}
              className='btn rounded-full bg-warm px-10 border-none'>
              Get Started
            </Link>
          </>
        )}
      </>
    );
  }
  function Menu() {
    return (
      <>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/campaigns'}>Donation Campaigns</Link>
        </li>
        <li>
          <a>How to Help</a>
        </li>
        <li>
          <div className='md:hidden flex'>
            <Action></Action>
          </div>
        </li>
      </>
    );
  }
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
              <Menu />
            </ul>
          </div>
          <a className='btn btn-ghost text-xl flex gap-2'>
            <span className='w-[30px] h-[30px] rounded-full bg-warm'></span>
            <span className='text-black font-bold'>WarmthBridge</span>
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <Menu />
          </ul>
        </div>
        <div className='navbar-end hidden md:flex'>
          <Action></Action>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
