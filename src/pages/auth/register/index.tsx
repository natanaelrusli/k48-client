import Card from '@/components/Card';
import RegisterForm from '@/components/RegisterForm';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Register = () => {
  return (
    <>
      <Head>
        <title>K48 | Register</title>
      </Head>
      <div className="flex items-center justify-between pt-8">
        <Image
          className="w-5/12 object-contain max-xl:w-5/12 max-lg:hidden max-lg:w-full md:shrink-0"
          src="/login-logo.png"
          width={600}
          height={600}
          alt="login logo"
        />
        <Card className="flex h-fit w-5/12 flex-col gap-6 max-xl:w-6/12 max-lg:w-full">
          <RegisterForm />
        </Card>
      </div>
    </>
  );
};

export default Register;
