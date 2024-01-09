import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <main className="w-9/12 flex-grow max-md:w-11/12">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
