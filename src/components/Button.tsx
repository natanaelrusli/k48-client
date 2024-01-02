import React, { HTMLProps, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  buttonType?: 'submit' | 'reset' | 'button';
  variant?: string;
} & HTMLProps<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  buttonType,
  ...props
}: ButtonProps) => {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
      case 'secondary':
        return 'bg-white text-black hover:bg-gray-200 text-white border py-2 px-4 rounded focus:outline-none focus:shadow-outline';
      // Add more variants as needed
      default:
        return '';
    }
  };

  const buttonClasses = `transition duration-300 ease-in-out ${getButtonClasses()}`;

  return (
    <button
      {...props}
      type={buttonType}
      className={buttonClasses + ' ' + props.className}
    >
      {children}
    </button>
  );
};

export default Button;
