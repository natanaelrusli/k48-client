import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex h-24 w-full items-center justify-center align-middle">
      <div className="flex  h-full w-9/12 items-center justify-between gap-16 py-3 max-md:w-11/12">
        <Image src="/logo.png" alt="k48 logo" width={100} height={100} />
        <div className="flex-1">
          <ul className="flex flex-row gap-6">
            <li className="cursor-pointer">Home</li>
          </ul>
        </div>
        <div className="cursor-pointer rounded-md bg-primary px-4 py-2 text-white">
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
