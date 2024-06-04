import React from 'react';
import Snake from '../components/Snake';

const Lounge: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">The Lounge</h1>
        <Snake />
    </div>
  );
}

export default Lounge;
