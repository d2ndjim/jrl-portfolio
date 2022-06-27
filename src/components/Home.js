import React from 'react';
import profilepic from '../assets/orange-edit.png';

const Home = () => (
  <div>
    <div className="flex flex-col text-white bg-[#010105]">
      <div>
        <h1 className="text-3xl m-10 text-left font-bold">
          Hi, I&apos;m Lekan
          <br />
          Software Developer
        </h1>
        <p className="text-base max-w-[95%] text-left m-10">
          I&apos;m a software developer specialized in building exceptional
          digital experiences. My focus is on building accessible and human
          centered products.
        </p>
      </div>
      <div className="m-10">
        <img src={profilepic} alt="lekan" className="rounded-xl" />
      </div>
    </div>
  </div>
);

export default Home;
