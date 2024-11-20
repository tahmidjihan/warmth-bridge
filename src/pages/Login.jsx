import React, { useRef } from 'react';
import Signup from './Signup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { authContext } from './../authProvider';

function Login() {
  const [loginCompleted, setLoginCompleted] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const { loginUser, signInWithGoogle, user } = React.useContext(authContext);
  const [seePassword, setSeePassword] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: '/' };

  function HandleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
    setLoginCompleted(true);
  }

  React.useEffect(() => {
    if (user && !loginCompleted) {
      setLoginCompleted(true);
    } else if (loginCompleted) {
      navigate(from);
    }
  }, [user, loginCompleted, navigate, from]);

  if (user || loginCompleted) {
    return null;
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
                onChange={(e) => setEmail(e.target.value)}
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
                  name='password'
                  required
                />
                <span
                  className='text-2xl absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                  onClick={() => setSeePassword(!seePassword)}>
                  {!seePassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <label className='label'>
                <Link
                  to={'/login/forgot-password'}
                  state={{ email }}
                  className='label-text-alt link link-hover'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6 flex flex-col gap-2'>
              <button className='btn bg-warm'>Log in</button>
              <span
                className='btn bg-warm'
                onClick={() => {
                  signInWithGoogle();
                  setLoginCompleted(true);
                }}>
                Log in with Google
              </span>
              <p className='text-center text-sm '>
                New to WarmthBridge?{' '}
                <span>
                  <Link
                    to={'/signup'}
                    state={{ email }}
                    className='text-warm hover:underline'>
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
