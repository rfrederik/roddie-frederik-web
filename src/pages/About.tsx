import React from 'react';
import roddie from '../assets/roddie.webp';

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-2">Roddie Frederik</h1>
      <img src={roddie} alt="Roddie" className="mx-auto mb-2 md:w-1/4 w-full" />
      <p className="mb-4">
        Roddie Frederik is an adaptable full-stack software engineer with extensive experience in a variety of technologies, including TypeScript, Node.js, PHP/Laravel, .NET/C#, Vue, React, and more. He thrives in fast-paced startup environments, embodying a work-hard, play-hard culture.
      </p>
      <p className="mb-4">
        When not coding, Roddie enjoys skateboarding with friends and chess.
      </p>
    </div>
  );
}

export default About;
