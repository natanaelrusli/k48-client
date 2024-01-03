import React, { HTMLProps, ReactNode } from 'react';

const Card = ({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={props.className + ' rounded-md border border-gray-300 p-6'}
    >
      {children}
    </div>
  );
};

export default Card;
