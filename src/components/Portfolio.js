import React from 'react';
import data from '../assets/data/data';

const Portfolio = () => {
  const projects = data;
  return (
    <>
      <section id="portfolio">
        <h2 className="text-center">Portfolio</h2>
        <div className="flex flex-col m-10 gap-3 md:grid md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#010105] text-[#FBFBFB] p-20 rounded-xl">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <div>
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
