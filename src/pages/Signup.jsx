import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { authContext } from './../authProvider';
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
  const { createUser, signInWithGoogle, user } = React.useContext(authContext);
  const [seePassword, setSeePassword] = React.useState(false);
  const [errPassword, setErrPassword] = React.useState(null);
  const navigate = useNavigate();
  function HandleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (errPassword) {
      return toast.error(errPassword);
    }
    createUser(email, password, name, photo);
  }
  if (user) {
    navigate('/');
  }
  if (user) {
    return null;
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
              <div className='relative'>
                <input
                  type={seePassword ? 'text' : 'password'}
                  placeholder='password'
                  className='input input-bordered'
                  onChange={(e) => {
                    const password = e.target.value;
                    if (password.length < 6) {
                      setErrPassword('at least 6 characters');
                    } else if (!/[A-Z]/.test(password)) {
                      setErrPassword('at least one uppercase letter');
                    } else if (!/[a-z]/.test(password)) {
                      setErrPassword('at least one lowercase letter');
                    } else {
                      setErrPassword(false);
                    }
                  }}
                  name='password'
                  required
                />
                <span
                  className='text-2xl absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                  onClick={() => setSeePassword(!seePassword)}>
                  {!seePassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <label className='label text-red-500 text-[15px]'>
                {errPassword ? errPassword : ''}
              </label>
            </div>
            <div className='form-control mt-6 flex flex-col gap-2'>
              <button className='btn bg-warm'>Sign up</button>
              <span
                className='btn bg-warm'
                onClick={() => {
                  signInWithGoogle();
                }}>
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
