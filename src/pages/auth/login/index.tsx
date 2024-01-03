import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Card from '@/components/Card';
import LoginForm from '@/components/LoginForm';

function Login() {
  return (
    <>
      <Head>
        <title>K48 | Login</title>
      </Head>
      <div className="flex justify-between pt-8">
        <Image
          className="w-6/12 object-contain max-xl:w-5/12 max-lg:hidden max-lg:w-full md:shrink-0"
          src="/login-logo.png"
          width={600}
          height={600}
          alt="login logo"
        />
        <Card className="flex w-5/12 flex-col gap-6 max-xl:w-6/12 max-lg:w-full">
          <LoginForm />
        </Card>
      </div>
    </>
  );
}

export default Login;
