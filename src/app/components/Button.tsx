import React from 'react';

interface ButtonProps {
  text: string;
  className?: string; // Make className optional
}

const Button: React.FC<ButtonProps> = ({ text, className = '' }) => {
  return (
    <div className={`bg-black mb-4 px-4 py-2 text-white text-center rounded ${className}`}>
      {text}
    </div>
  );
};

export default Button;
