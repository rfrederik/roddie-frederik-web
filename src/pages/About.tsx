import React from 'react';
import roddie from '../assets/roddie.webp';

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-2 mx-auto">Roddie Frederik</h1>
      <div className="md:flex md:items-center max-w-7xl">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <img src={roddie} alt="Roddie" className="mx-auto md:mx-0" />
        </div>
        <div className="md:w-3/4 md:pl-4">
          <p className="mb-4">
            Roddie Frederik is an adaptable full-stack software engineer with extensive experience in a variety of technologies, including TypeScript, Node.js, PHP/Laravel, .NET/C#, Vue, React, and more. He thrives in fast-paced startup environments, embodying a work-hard, play-hard culture.
          </p>
          <p className="mb-4">
            When not coding, Roddie enjoys skateboarding with friends and chess.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
