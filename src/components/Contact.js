import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

const Contact = () => {
  const [result, showResult] = useState(false);
  const formRef = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nz1c1ys',
        'template_cut2oj8',
        formRef.current,
        '_z0jo4cRGH7tv78WO',
      )
      .then((result) => result.text);
    e.target.reset();
    showResult(true);
  }

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="bg-[#E8E8FF]">
      <div className="m-10 pt-6" data-aos="slide-up">
        <h1 className="text-3xl font-bold text-[#0E0842] md:text-4xl">
          Contact Me
        </h1>
        <p className="text-xl text-[#413C6A]">
          If you&apos;ve got a project you&apos;d like me to work on, a request
          or questions you&apos;d like me to answer, don&apos;t hesitate to
          reach out to me. I&apos;d love to hear from you.
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        ref={formRef}
        id="contact"
        className="m-10 pb-4 md:w-3/5"
        data-aos="fade-right"
      >
        <label htmlFor="name" className="block ">
          <span className="text-[#413C6A]">Your Full name</span>
          <input
            name="name"
            type="text"
            className="mt-1 mb-2 bg-[#F9F9FA] block w-full h-11 rounded-md focus:border-b focus:border-[#7000FF] focus:ring-0 outline-0 py-1 pl-6"
            placeholder=""
            required
          />
        </label>
        <label htmlFor="email" className="block ">
          <span className="text-[#413C6A]">Your Email address</span>
          <input
            name="email"
            type="email"
            className="mt-1 mb-2 bg-[#F9F9FA] h-11 block w-full rounded-md focus:border-b focus:border-[#7000FF] focus:ring-0 outline-0 py-1 pl-6"
            placeholder=""
            required
          />
        </label>
        <label htmlFor="message" className="block ">
          <span className="text-[#413C6A]">Your Message</span>
          <textarea
            name="message"
            className="mt-1 block bg-[#F9F9FA] w-full rounded-md focus:border-b focus:border-[#7000FF] focus:ring-0 outline-0 pt-1 pl-6"
            rows="3"
            required
          />
        </label>
        <button
          type="submit"
          className="border px-8 py-2 mt-6 py-1 bg-[#7000FF] rounded-lg hover:bg-[#010105] hover:text-white hover:border ease-in-out duration-700 transition-colors text-white font-bold w-max sticky z-[11]"
        >
          Send Message
        </button>
        <div className="mt-4">
          {result && (
            <h2 className="text-base md:text-xl text-[#413C6A] font-bold">
              Thanks for reaching out!. I&apos;ll get back to you within
              24 hours.
            </h2>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
