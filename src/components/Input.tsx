import React from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
};

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="mb-2 block text-sm font-bold text-gray-700">
          {label}
        </label>
      )}
      <input
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
