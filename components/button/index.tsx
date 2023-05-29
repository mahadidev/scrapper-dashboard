import React from "react";

const Button = ({
  className,
  children,
  type,
  disable,
  onClick,
}: {
  className?: string;
  children: any;
  type?: "button" | "submit" | "reset";
  disable?: boolean;
  onClick?: CallableFunction;
}) => {
  return (
    <>
      <button
        className={`${className} w-max text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        type={type}
        disabled={disable}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
