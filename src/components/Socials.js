import React from 'react';
import {
  FiGithub, FiTwitter, FiMail, FiLinkedin,
} from 'react-icons/fi';

const Socials = () => (
  <div className="flex ml-10">
    <a
      className="pr-20 md:pr-3"
      href="jimohridwanlekan@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send me an email"
    >
      <FiMail className="text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-20 md:pr-3"
      href="https://github.com/d2ndjim?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Github profile"
    >
      <FiGithub className="text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-20 md:pr-3"
      href="https://www.linkedin.com/in/lekanj/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Linkedin profile"
    >
      <FiLinkedin className="text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="md:pr-3"
      href="https://twitter.com/d2ndjim_"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Twitter profile"
    >
      <FiTwitter className="text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
  </div>
);

export default Socials;
