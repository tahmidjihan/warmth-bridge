import React from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './../authProvider';

function Signup() {
  const { createUser, signInWithGoogle } = React.useContext(authContext);
  function HandleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    createUser(email, password, name, photo);
  }
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form className='card-body' onSubmit={HandleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                name='name'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <span className='label-text'>profile Url</span>
              </label>
              <input
                type='text'
                placeholder='profile url'
                className='input input-bordered'
                name='photo'
                required
              />
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                name='email'
                className='input input-bordered'
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
                name='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6 flex flex-col gap-2'>
              <button className='btn bg-warm'>Sign up</button>
              <span className='btn bg-warm' onClick={signInWithGoogle}>
                Sign up with Google
              </span>

              <p className='text-center text-sm '>
                Already have an account?{' '}
                <span>
                  <Link to={'/login'} className='text-warm hover:underline'>
                    Login
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

export default Signup;
