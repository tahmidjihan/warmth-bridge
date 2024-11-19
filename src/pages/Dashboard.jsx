import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider';

function Dashboard() {
  const { user, logout } = useContext(authContext);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  if (!user) {
    return null;
  }
  return (
    <>
      <div>
        <h1 className='text-5xl font-extrabold text-center py-10'>Dashboard</h1>
        <h1 className='text-3xl font-extrabold text-center py-10'>
          Hello welcome, {user?.displayName}
        </h1>
        <div>
          <div className='card bg-warm max-w-96 shadow-xl mx-auto my-20'>
            <figure className='px-10 pt-10'>
              <img src={user?.photoURL} className='rounded-full' />
            </figure>
            <div className='card-body items-center text-center'>
              <div className='text-center'>
                <p
                  type='text'
                  className='text-4xl font-bold bg-transparent w-full border-none '>
                  {user?.displayName}
                </p>

                <p type='text' className='bg-transparent w-full border-none '>
                  {user?.email}
                </p>
                <Link to={'/dashboard/updateProfile'}>
                  <button className='btn bg-white rounded-full px-16'>
                    Edit
                  </button>
                </Link>
              </div>
              <div className='card-actions flex-col'>
                <button
                  className='btn btn-ghost btn-sm mx-auto text-white hover:underline rounded-full'
                  onClick={logout}>
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
