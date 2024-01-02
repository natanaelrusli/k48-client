import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Navbar />
      <main className="w-9/12 flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;
