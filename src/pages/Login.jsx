import React from 'react';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { authContext } from './../authProvider';

function Login() {
  const { loginUser, signInWithGoogle } = React.useContext(authContext);
  function HandleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
  }
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form className='card-body' onSubmit={HandleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                name='email'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                name='password'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6 flex flex-col gap-2'>
              <button className='btn bg-warm'>Log in</button>
              <span className='btn bg-warm' onClick={signInWithGoogle}>
                Log in with Google
              </span>
              <p className='text-center text-sm '>
                New to WarmthBridge?{' '}
                <span>
                  <Link to={'/signup'} className='text-warm hover:underline'>
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
