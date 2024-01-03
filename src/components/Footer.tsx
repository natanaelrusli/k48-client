import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 w-full bg-footer">
      <div className="mx-auto flex w-9/12 justify-between gap-8 py-12 max-md:flex-col md:gap-16">
        <div className="flex flex-col gap-6">
          <Image src={'/logo.png'} width={100} height={100} alt="logo" />
          <div className="flex w-7/12 gap-3">
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
              }
              width={100}
              height={100}
              alt="play store"
            />
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
              }
              width={100}
              height={100}
              alt="app store"
            />
          </div>
        </div>
        <div className="flex gap-10 md:justify-end">
          {/* Pages */}
          <div className="flex flex-col">
            <p className="text-md font-bold">Pages</p>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Demo</li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex w-3/5 flex-col">
            <p className="text-md font-bold">Contact</p>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="cursor-pointer">
                <span className="fa-solid fa-phone mr-2" />
                (021) 123-123-123
              </li>
              <li className="cursor-pointer">
                <span className="fa-solid fa-envelope mr-2" />
                nael123@gmail.com
              </li>
              <li className="cursor-pointer">
                <span className="fa-solid fa-map-pin mr-2" />
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="max-4/12 flex flex-col">
            <p className="text-md font-bold">Social Media</p>
            <ul className="mt-6 flex gap-2">
              <li className="cursor-pointer">
                <span className="fa-brands fa-facebook mr-2" />
              </li>
              <li className="cursor-pointer">
                <span className="fa-brands fa-twitter mr-2" />
              </li>
              <li className="cursor-pointer">
                <span className="fa-brands fa-instagram mr-2" />
              </li>
              <li className="cursor-pointer">
                <span className="fa-brands fa-linkedin mr-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
