import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Login = () => {
  return (
    <>
      <Head>
        <title>K48 | Login</title>
      </Head>
      <Navbar />
      <div className='bg-white h-screen'></div>;
    </>
  );
};

export default Login;
