import React, { HTMLProps, ReactNode } from 'react';

const Card = ({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={props.className + ' border-gray-300 border rounded-md p-6'}
    >
      {children}
    </div>
  );
};

export default Card;
