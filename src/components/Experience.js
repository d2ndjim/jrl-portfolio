import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import 'aos/dist/aos.css';

const Experience = () => (
  <div id="experience" className="mb-20">
    <div className="hidden md:grid md:grid-cols-2 md:gap-4">
      <div
        data-aos="zoom-out-up"
        className="bg-[#E8E8FF] text-[#0E0842] m-4 rounded-xl"
      >
        <ul className="m-10 grid grid-cols-2 gap-2">
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>JavaScript</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>React.js</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Redux</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Tailwind CSS</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Git/GitHub</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>PostgreSQL/MySQL</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Python</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Jest</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Netlify/Heroku</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Ruby</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Ruby on Rails</h4>
          </li>
          <li className="flex gap-2">
            <BsFillPatchCheckFill />
            <h4>Rspec</h4>
          </li>
        </ul>
      </div>
      <div data-aos="fade-left" className="m-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E0842]">
          Skills And Experience
        </h1>
        <p className="text-[#5C5C80] w-full max-w-md text-xl">
          I create responsive web applications that are fast, easy to use and
          built following best practices
        </p>
      </div>
    </div>
    <div className="flex flex-col md:hidden">
      <div data-aos="slide-up" className="m-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E0842]">
          Skills And Experience
        </h1>
        <p className="text-[#5C5C80] w-full max-w-md text-xl">
          I create responsive web applications that are fast, easy to use and
          built following best practices
        </p>
      </div>
      <div
        data-aos="slide-up"
        className="bg-[#E8E8FF] text-[#0E0842] m-4 rounded-xl"
      >
        <ul className="m-10 grid grid-cols-2 gap-2">
          <li className="flex gap-2">
            <h4>JavaScript</h4>
          </li>
          <li className="flex gap-2">
            <h4>React.js</h4>
          </li>
          <li className="flex gap-2">
            <h4>Redux</h4>
          </li>
          <li className="flex gap-2">
            <h4>Tailwind CSS</h4>
          </li>
          <li className="flex gap-2">
            <h4>Git/GitHub</h4>
          </li>
          <li className="flex gap-2">
            <h4>PostgreSQL/MySQL</h4>
          </li>
          <li className="flex gap-2">
            <h4>Python</h4>
          </li>
          <li className="flex gap-2">
            <h4>Jest</h4>
          </li>
          <li className="flex gap-2">
            <h4>Netlify/Heroku</h4>
          </li>
          <li className="flex gap-2">
            <h4>Ruby</h4>
          </li>
          <li className="flex gap-2">
            <h4>Ruby on Rails</h4>
          </li>
          <li className="flex gap-2">
            <h4>Rspec</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;
