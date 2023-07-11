import React from 'react';
import {
  FiGithub,
} from 'react-icons/fi';
import {
  HiOutlineExternalLink,
} from 'react-icons/hi';
import data from '../assets/data/data';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const projects = data;
  return (
    <>
      <section id="portfolio">
        <h2 className="text-center font-bold text-4xl text-[#0E0842]">
          My Portfolio
        </h2>
        <div className="flex flex-col m-10 gap-6 md:grid md:grid-cols-2">
          {projects.map((project) => (
            <div
              data-aos="zoom-in"
              key={project.id}
              className="bg-[#010105] text-[#FBFBFB] pt-10 px-4 pb-16 rounded-xl"
            >
              <img
                className="rounded mb-4"
                src={project.image}
                alt={project.name}
              />
              <div>
                <h4 className="pb-4 text-center font-bold text-xl md:text-3xl">
                  {project.name}
                </h4>
                <p className="pb-6 text-xs md:text-base md:mx-2 italic">{project.description}</p>
              </div>
              <div className="mx-auto flex gap-8 justify-center mt-4">
                <a
                  className="md:pr-5"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My Github profile"
                >
                  <FiGithub size={35} className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[100ms]" />
                </a>
                <a
                  href={project.live}
                  className="md:pr-5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check project demo"
                >
                  <HiOutlineExternalLink size={35} className="text-[#B5B4B8] md:text-[#F9F9FA] text-lg hover:scale-[1.5] hover:transition-transform hover:ease-in-out hover:duration-[100ms]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
