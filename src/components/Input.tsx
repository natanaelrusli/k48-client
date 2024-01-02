import React from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
};

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
