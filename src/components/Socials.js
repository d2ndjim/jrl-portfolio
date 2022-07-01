import React from 'react';
import {
  FiGithub, FiTwitter, FiMail, FiLinkedin,
} from 'react-icons/fi';

const Socials = () => (
  <div className="flex m-auto md:m-5">
    <a
      className="pr-14 md:pr-5"
      href="mailto:jimohridwanlekan@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send me an email"
    >
      <FiMail className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-14 md:pr-5"
      href="https://github.com/d2ndjim?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Github profile"
    >
      <FiGithub className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      className="pr-14 md:pr-5"
      href="https://www.linkedin.com/in/lekanj/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Linkedin profile"
    >
      <FiLinkedin className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
    <a
      href="https://twitter.com/d2ndjim_"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="My Twitter profile"
    >
      <FiTwitter className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[300ms]" />
    </a>
  </div>
);

export default Socials;
