import React from 'react';
import Input from './Input';
import Button from './Button';

const Step1 = () => {
  return (
    <>
      <Input placeholder={'Email Address'} />
      <Button className="w-full">Continue</Button>
      <div className="mt-3 flex w-full flex-col items-center gap-3 align-middle text-xs">
        <p>Or register with other accounts</p>
      </div>
      <Button variant="secondary">Register with Google</Button>
      <Button variant="secondary">Register with Twitter</Button>
      <Button variant="secondary">Register with Facebook</Button>
      <div className="mt-3 flex w-full flex-col items-center gap-3 align-middle text-xs">
        <p>
          Already have an account? Login{' '}
          <span className="font-bold text-primary">here</span>
        </p>
      </div>
    </>
  );
};

const Step2 = () => {
  return (
    <>
      <Input placeholder={'Full Name'} />
      <Input placeholder={'Password'} />
      <Input placeholder={'Confirm Password'} />
      <Input placeholder={'Birthday'} />
      <div className="mb-4 flex gap-3">
        <Button className="w-full" variant="secondary">
          Male
        </Button>
        <Button className="w-full" variant="secondary">
          Female
        </Button>
      </div>
      <Button className="w-full">Register</Button>
    </>
  );
};

const RegisterForm = () => {
  return (
    <div className="mb-3 flex flex-col gap-2">
      <h1 className="my-4 text-3xl font-bold text-primary">Register</h1>
      <div className="flex flex-col gap-2">
        {/* <Step1 /> */}
        <Step2 />
      </div>
    </div>
  );
};

export default RegisterForm;
