import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'aos/dist/aos.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('mvolazwr');
  if (state.succeeded) {
    return <p>Thank you for reaching out! Will reach out soon as possible</p>;
  }
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
        onSubmit={handleSubmit}
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
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>
        <label htmlFor="email" className="block ">
          <span className="text-[#413C6A]">Your Email address</span>
          <input
            name="email"
            type="text"
            className="mt-1 mb-2 bg-[#F9F9FA] h-11 block w-full rounded-md focus:border-b focus:border-[#7000FF] focus:ring-0 outline-0 py-1 pl-6"
            placeholder=""
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label htmlFor="message" className="block ">
          <span className="text-[#413C6A]">Your Message</span>
          <textarea
            name="message"
            className="mt-1 block bg-[#F9F9FA] w-full rounded-md focus:border-b focus:border-[#7000FF] focus:ring-0 outline-0 pt-1 pl-6"
            rows="3"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button
          type="submit"
          disabled={state.submitting}
          className="border px-8 py-2 mt-6 py-1 bg-[#7000FF] rounded-lg hover:bg-[#010105] hover:text-white hover:border ease-in-out duration-700 transition-colors text-white hover:text-black font-bold w-max sticky z-[11]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
