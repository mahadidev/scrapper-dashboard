"use client";
import React from "react";
import { Label, TextInput as FbTextInput } from "flowbite-react";

const SelectInput = ({
  label,
  name,
  id,
  onChange,
  type,
  placeholder,
  required,
  children,
}: {
  label: string;
  id?: string;
  name?: string;
  onChange?: CallableFunction;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children: any;
}) => {
  return (
    <div className="w-full mb-2">
      <div className="mb-2 block">
        <Label htmlFor={label} value={label} />
      </div>
      <select
        id={label}
        required={required}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
      >
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
