import React from 'react';
import ugotcigs from '../assets/ugotcigs.webp';

const Home: React.FC = () => {
  return (
    <div className="p-4">
        <img src={ugotcigs} alt="Ugotcigs" className="mx-auto" />
    </div>
  );
}

export default Home;
