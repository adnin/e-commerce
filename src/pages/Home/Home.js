import React from 'react';

import './Home.scss';
import Directory from '../../components/Directory';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default Home;
