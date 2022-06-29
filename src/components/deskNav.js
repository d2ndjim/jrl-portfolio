import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import './deskNav.css';

const DeskNav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <Link
        to="/"
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <Link
        to="/projects"
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </Link>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default DeskNav;
