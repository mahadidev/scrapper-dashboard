"use client";
import React from "react";
import { Label, TextInput as FbTextInput } from "flowbite-react";

const TextInput = ({
  label,
  name,
  id,
  onChange,
  type,
  value,
  placeholder,
  required,
  className,
}: {
  label?: string;
  id?: string;
  name?: string;
  onChange?: CallableFunction;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <div className="mb-2 block">
          <Label htmlFor={label} value={label} />
        </div>
      )}
      <textarea
        id={label ? label : "textarea"}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 `}
      >
        {value}
      </textarea>
    </div>
  );
};

export default TextInput;
