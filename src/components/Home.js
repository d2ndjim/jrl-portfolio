import React from 'react';
import profilepic from '../assets/orange-edit.png';
import Socials from './Socials';

const Home = () => (
  <div>
    <div id="home" className="flex flex-col text-white bg-[#010105] md:grid md:grid-cols-2 md:gap-4 md:m-10 md:rounded-lg">
      <div>
        <h1 className="text-3xl m-10 text-left font-bold md:text-4xl">
          Hi, I&apos;m Lekan,
          <br />
          Software Developer.
        </h1>
        <p className="text-base max-w-[95%] text-left m-10 md:text-xl">
          I&apos;m a software developer specialized in building exceptional
          digital experiences. My focus is on building accessible and human
          centered products.
        </p>
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
          <a
            href="#contact"
            className="border-solid text-center border-black border-2 ml-10 mr-10 p-2 rounded-lg bg-[#7000FF] md:py-5"
          >
            Let&apos;s Chat
          </a>
          <Socials />
        </div>
      </div>
      <div className="m-10">
        <img src={profilepic} alt="lekan" className="rounded-xl" />
      </div>
    </div>
  </div>
);

export default Home;
