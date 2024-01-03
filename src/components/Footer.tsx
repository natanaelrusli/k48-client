import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 h-[331px] w-full bg-footer">
      <div className="mx-auto w-9/12 py-6">
        <Image src={'/logo.png'} width={100} height={100} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
