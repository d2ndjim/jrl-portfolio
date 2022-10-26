import React from 'react';
import 'aos/dist/aos.css';

const About = () => (
  <div id="about" className="mt-20 mb-10 bg-[#E8E8FF] pt-4 px-4 pb-0">
    <div className="mt-4 md:mr-10 md:ml-10 md:mt-10 bg-[#F9F9FA] pt-0 px-0 pb-8 rounded-lg">
      <div data-aos="slide-up" className="bg-[#FFFFFF] p-2">
        <h2 className="text-center font-bold text-4xl text-[#0E0842]">
          About Me
        </h2>
      </div>
      <div data-aos="slide-up" className="m-10 w-fit">
        <p className="text-[#413C6A] font-bold md:text-base md:leading-8 md:text-center italic">
          I&apos;m a Software Developer from Lagos, Nigeria. I have a serious
          passion for building accessible and dynamic web applications that
          contribute to great user experiences. I&apos;ve spent the last several
          months in a Remote Environment working with JavaScript, CSS, React,
          and Redux, Ruby on Rails and PostgreSQL. I started out in tech doing
          data science and Machine learning. With the goal of creating special,
          niche corners of the web, I have been able to collaborate with
          talented developers from across Africa and Europe while building some
          unique projects. I&apos;m also a sports fanatic😃.
        </p>
      </div>
    </div>
  </div>
);

export default About;
