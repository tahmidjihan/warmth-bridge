import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div class='hero bg-base-200 min-h-screen'>
      <div class='hero-content flex-col lg:flex-row-reverse'>
        <div class='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form class='card-body'>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                name='name'
                class='input input-bordered'
                required
              />
              <label class='label'>
                <span class='label-text'>profile Url</span>
              </label>
              <input
                type='text'
                placeholder='profile url'
                class='input input-bordered'
                required
              />
              <label class='label'>
                <span class='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                class='input input-bordered'
                required
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                class='input input-bordered'
                required
              />
              <label class='label'>
                <a href='#' class='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div class='form-control mt-6'>
              <button class='btn bg-warm'>Sign up</button>
              <p className='text-center text-sm '>
                Already have an account?{' '}
                <span>
                  <Link to={'/login'}>Login</Link>
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
