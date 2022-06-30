import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import './deskNav.css';

const DeskNav = () => {
  const [activeNav, setActiveNav] = useState('home');
  return (
    <nav>
      <Link
        to="home"
        smooth
        onClick={() => setActiveNav('home')}
        className={activeNav === 'home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        smooth
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        smooth
        onClick={() => setActiveNav('experience')}
        className={activeNav === 'experience' ? 'active' : ''}
      >
        <BiBook />
      </Link>
      <Link
        to="portfolio"
        smooth
        onClick={() => setActiveNav('portfolio')}
        className={activeNav === 'portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default DeskNav;
