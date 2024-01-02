import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-24 flex align-middle items-center justify-center">
      <div className="w-9/12 h-full py-3 flex items-center justify-between gap-16">
        <Image src="/logo.png" alt="k48 logo" width={100} height={100} />
        <div className="flex-1">
          <ul className="flex flex-row gap-6">
            <li className="cursor-pointer">Home</li>
          </ul>
        </div>
        <div className="bg-primary py-2 px-4 cursor-pointer rounded-md text-white">
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
