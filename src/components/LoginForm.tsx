import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-3">
        <h1 className="mt-3 text-3xl font-bold text-primary">Login</h1>
      </div>
      <Input placeholder={'Email Address'} />
      <Input placeholder={'Password'} />
      <Button className="w-full">Login</Button>
      <div className="mt-3 flex w-full flex-col items-center gap-3 align-middle text-xs">
        <p className="cursor-pointer font-bold text-primary">Forgot Password</p>
        <p>Or login with other accounts</p>
      </div>
      <Button variant="secondary">
        <i className="fa-brands fa-google"></i>Login with Google
      </Button>
      <Button variant="secondary">
        <i className="fa-brands fa-twitter"></i>Login with Twitter
      </Button>
      <Button variant="secondary">
        <i className="fa-brands fa-facebook"></i>Login with Facebook
      </Button>
    </div>
  );
};

export default LoginForm;
