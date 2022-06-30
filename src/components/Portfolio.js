import React from 'react';
import data from '../assets/data/data';

const Portfolio = () => {
  const projects = data;
  return (
    <>
      <section id="portfolio">
        <h2 className="text-center font-bold text-4xl text-[#0E0842]">
          Portfolio
        </h2>
        <div className="flex flex-col m-10 gap-3 md:grid md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#010105] text-[#FBFBFB] pt-10 px-10 pb-16 rounded-xl"
            >
              <img
                className="rounded mb-4"
                src={project.image}
                alt={project.title}
              />
              <h4>{project.title}</h4>
              <div className="flex gap-6 justify-center">
                <a href={project.repo}>Source</a>
                <a href={project.live}>Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
