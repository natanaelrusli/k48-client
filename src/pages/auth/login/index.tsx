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
      <div className="pt-8 flex justify-between">
        <Image
          className="max-w-2xl"
          src="/login-logo.png"
          width={600}
          height={600}
          alt="login logo"
        />
        <Card className="flex flex-col gap-6 w-4/12">
          <h1 className="mt-3 text-3xl text-primary font-bold">Login</h1>
          <LoginForm />
        </Card>
      </div>
    </>
  );
}

export default Login;
