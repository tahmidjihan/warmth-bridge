import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from './../authProvider';

function ForgotPassword() {
  const location = useLocation();

  const { email } = location.state || {};
  const { forgotPassword } = React.useContext(authContext);
  const [inputValue, setInputValue] = React.useState(email);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue);
    forgotPassword(inputValue);
    setTimeout(() => {
      window.location.href = 'https://mail.google.com/';
    }, 2000);
  }

  return (
    <>
      <h1 className='text-5xl font-extrabold text-center py-10'>
        Forgot Password?
      </h1>
      <div>
        <div>
          <div className='card bg-warm max-w-96 shadow-xl mx-auto my-20'>
            <div className='card-body items-center text-center'>
              <form className='text-center' onSubmit={handleSubmit}>
                <p
                  type='text'
                  className='text-4xl font-bold bg-transparent w-full border-none '>
                  Reset Password
                </p>

                <p type='text' className='bg-transparent w-full border-none '>
                  <input
                    type='email'
                    placeholder='Email'
                    className='border-none focus:ring-0 grow my-5 rounded-xl'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </p>

                <button className='btn bg-white rounded-full px-16'>
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
