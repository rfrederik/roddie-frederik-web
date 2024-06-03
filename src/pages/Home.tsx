import React from 'react';
import ugotcigs from '../assets/ugotcigs.webp';

const Home: React.FC = () => {
  return (
    <div className="p-4">
        <img src={ugotcigs} alt="Ugotcigs" className="mx-auto md:w-1/4 w-full" />
    </div>
  );
}

export default Home;
