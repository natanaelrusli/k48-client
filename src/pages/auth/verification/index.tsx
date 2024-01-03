import Image from 'next/image';
import React from 'react';

const Verification = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Image
        src={'/verification.svg'}
        width={300}
        height={300}
        alt="verification"
      />
      <p className="mb-4 max-w-[380px] text-center text-3xl font-bold text-primary">
        Please check your email to verify your account
      </p>
      <p className="font-logh text-gray-600">
        Click the link in the email sent by us
      </p>
    </div>
  );
};

export default Verification;
