import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider';

function Campaigns() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = React.useState([]);
  useEffect(() => {
    function campaignsData() {
      fetch(
        'https://gist.githubusercontent.com/tahmidjihan/9a2b08b4b416a605c88fcfe24462f5c3/raw/13bad95f1d35bc29abccbb5f94c568f06e69d9a2/warm-bridge'
      )
        .then((res) => res.json())
        .then((data) => setCampaigns(data));
    }
    campaignsData();
  }, []);
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
      <div className='container mx-auto py-10'>
        <div className='section-header text-center py-10  mx-auto'>
          <h1 className='text-5xl font-bold text-center'>Donation Campaigns</h1>
          <p className='text-center max-w-md mx-auto'>
            Our mission is to provide winter clothing to those in need across
            Bangladesh. Join us in making a difference by donating or
            volunteering to help spread warmth and kindness.
          </p>
        </div>
        <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 align-middle my-16'>
          {campaigns.map((campaign) => (
            <div
              className='card bg-warm image-full shadow-xl'
              key={campaign.id}>
              <figure className='h-48 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={campaign.image}
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-white font-extrabold text-2xl'>
                  {campaign.title}
                </h2>
                <p>{campaign.description}</p>
                <div className='card-actions justify-end'>
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className='btn bg-warm text-white border-none rounded-full px-10'>
                    Info{' '}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Campaigns;
