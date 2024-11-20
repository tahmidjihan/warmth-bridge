import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider';

function UpdateProfile() {
  const { user, updateUser } = useContext(authContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    updateUser(name, photo);
  };
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  if (!user) {
    return null;
  }
  console.log(user);
  return (
    <>
      <div>
        <h1 className='text-5xl font-extrabold text-center py-10'>
          UpdateProfile;
        </h1>
        <h1 className='text-3xl font-extrabold text-center py-10'>
          Hello welcome, {user?.displayName}. Edit your profile here
        </h1>
        <div>
          <div className='card bg-warm max-w-96 shadow-xl mx-auto my-20'>
            <div className='card-body items-center text-center'>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <h1 className='text-3xl font-extrabold'>Update</h1>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='input input-bordered w-full max-w-xs'
                />

                <input
                  type='url'
                  placeholder='Photo Url'
                  name='photo'
                  className='input input-bordered w-full max-w-xs'
                />
                <button className='btn bg-white rounded-full px-16'>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
