import React from 'react';
import Socials from './Socials';

const Footer = () => (
  <div className="bg-[#010105] flex gap-4 flex-col justify-center items-center px-20 pb-36 pt-6 md:hidden">
    <div>
      <Socials />
    </div>
    <div className="text-[#B5B4B8] font-bold">
      <small>&copy; JRL 2022. All rights reserved.</small>
    </div>
  </div>
);

export default Footer;
