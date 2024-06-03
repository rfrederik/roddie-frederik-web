import React from 'react';
import { ReactComponent as MarkGithubIcon } from '../assets/github-icon.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin-icon.svg';
import { ReactComponent as MailIcon } from '../assets/mail.svg';

const Contact: React.FC = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Contact</h1>
      <div className="flex justify-center">
      <a href="mailto:roddiefrederik@gmail.com" className="mx-4">
          <MailIcon className="w-7 h-7" />
        </a>
        <a href="https://github.com/rfrederik" className="mx-4">
          <MarkGithubIcon className="w-7 h-7" />
        </a>
        <a href="https://www.linkedin.com/in/roddiefrederik/" className="mx-4">
          <LinkedInIcon className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
