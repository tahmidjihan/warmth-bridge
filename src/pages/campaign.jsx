import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider';
import { useParams } from 'react-router-dom';

function Campaign() {
  const { user, toasts } = useContext(authContext);
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = React.useState([]);
  const { id } = useParams();
  useEffect(() => {
    function campaignsData() {
      fetch(
        'https://gist.githubusercontent.com/tahmidjihan/9a2b08b4b416a605c88fcfe24462f5c3/raw/13bad95f1d35bc29abccbb5f94c568f06e69d9a2/warm-bridge'
      )
        .then((res) => res.json())
        .then((data) => {
          const filteredCampaign = data.filter(
            (campaign) => parseInt(campaign.id) === parseInt(id)
          );
          setCampaigns(filteredCampaign[0]);
        });
    }
    campaignsData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toasts.success('Thank you ! We will reach your destination soon');
  };
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/campaign' } });
    }
  }, [user, navigate]);
  if (!user) {
    return null;
  }

  const { contactInfo, description, division, title } = campaigns;
  return (
    <>
      <h1 className='text-5xl font-bold text-center py-10'>Donate Now!</h1>

      <div className='container mx-auto py-10 flex justify-around flex-col-reverse md:flex-row'>
        <form
          className='max-w-md mx-auto md:mx-0 p-4 bg-gray-100 rounded-3xl shadow-md'
          onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-warm '
            required
          />
          <div className='md:flex items-center gap-4 mb-4'>
            <input
              type='text'
              name='product'
              placeholder='Product e.g. blanket, jacket, sweater'
              required
              className='md:flex-grow p-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-warm '
            />

            <select className='md:w-28 p-3 md:mt-0 mt-4 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-warm'>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <input
            type='text'
            name='location'
            placeholder='Pickup location e.g. 12 no house, 3rd street, Andarkilla, CTG'
            className='w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-warm '
            required
          />
          <textarea
            name='notes'
            placeholder='Additional notes (optional)'
            className='w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-warm '
          />
          <button
            type='submit'
            className='w-full bg-warm text-white py-2 px-4 rounded-full hover:bg-orange-600 transition'>
            SUBMIT{' '}
          </button>
        </form>
        <div>
          <div className='max-w-[300px] mb-10 flex flex-col gap-2 mx-auto md:mx-0'>
            <h1 className='text-4xl mb-4 font-extrabold'>Info:</h1>
            <h1 className='text-3xl font-extrabold'>{title}</h1>
            <span className='font-bold text-lg'>
              {division} <span className='text-sm font-normal'>(division)</span>
            </span>
            <p>{description}</p>
            <p>
              <span className='font-bold'> Contact:</span> {contactInfo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign;
