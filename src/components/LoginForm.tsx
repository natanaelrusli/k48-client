import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <Input placeholder={'Email Address'} />
      <Input placeholder={'Password'} />
      <Button className="w-full">Login</Button>
      <div className="w-full flex flex-col align-middle items-center gap-3 text-xs mt-3">
        <p className="font-bold text-primary cursor-pointer">Forgot Password</p>
        <p>Or login with other accounts</p>
      </div>
      <Button variant="secondary">Login with Google</Button>
      <Button variant="secondary">Login with Twitter</Button>
      <Button variant="secondary">Login with Facebook</Button>
    </div>
  );
};

export default LoginForm;
