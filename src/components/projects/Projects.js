import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../../assets/data/data';
import './Projects.css';

const Projects = () => {
  const people = data;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2 className="text-[#413C6A] font-bold">PORTFOLIO</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {
            id, image, name, quote, repo, live,
          } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === -1
            || (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img m-auto" />
              <h4>{name}</h4>
              <div className="flex justify-center m-auto gap-4">
                <a
                  href={repo}
                  className="border-solid border-2 px-2 py-1 rounded-lg mt-4 bg-[#7000FF] text-white hover:bg-[#010105] hover:text-white"
                >
                  Source
                </a>
                <a
                  href={live}
                  className="border-solid border-2 px-2 py-1 rounded-lg mt-4 bg-[#7000FF] text-white hover:bg-[#010105] hover:text-white"
                >
                  Live Demo
                </a>
              </div>
              <p className="text text-[#413C6A]">{quote}</p>
              <FaQuoteRight className="icon mb-14" />
            </article>
          );
        })}
        <button type="button" className="prev" onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
