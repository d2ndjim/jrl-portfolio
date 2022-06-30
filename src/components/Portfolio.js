import React from 'react';
import data from '../assets/data/data';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const projects = data;
  return (
    <>
      <section id="portfolio">
        <h2 className="text-center font-bold text-4xl text-[#0E0842]">
          Portfolio
        </h2>
        <div className="flex flex-col m-10 gap-6 md:grid md:grid-cols-2">
          {projects.map((project) => (
            <div
              data-aos="zoom-in"
              key={project.id}
              className="bg-[#010105] text-[#FBFBFB] pt-10 px-10 pb-16 rounded-xl"
            >
              <img
                className="rounded mb-4"
                src={project.image}
                alt={project.name}
              />
              <h4 className="pb-10 text-center font-bold text-xl md:text-3xl">
                {project.name}
              </h4>
              <div className="flex gap-6 justify-center">
                <a
                  href={project.repo}
                  className="border-2 px-6 md:px-10 rounded bg-[#7000FF] hover:bg-[#E8E8FF] hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check project source"
                >
                  Source
                </a>
                <a
                  href={project.live}
                  className="border-2 px-6 md:px-10 rounded hover:bg-[#E8E8FF] hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check project demo"
                >
                  Demo
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
