import React, { createContext, useContext } from 'react';

export const authContext = createContext();

function AuthProvider({ children }) {
  const [campaigns, setCampaigns] = React.useState([]);
  function campaignsData() {
    fetch(
      'https://gist.githubusercontent.com/tahmidjihan/9a2b08b4b416a605c88fcfe24462f5c3/raw/13bad95f1d35bc29abccbb5f94c568f06e69d9a2/warm-bridge'
    )
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
    return campaigns;
  }
  // const value = {
  //   campaigns,
  // };
  return (
    <>
      <authContext.Provider value={authContext}>
        {children}
      </authContext.Provider>
    </>
  );
}

export default AuthProvider;
