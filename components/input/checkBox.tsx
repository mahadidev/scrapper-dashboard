"use client";
import React from "react";
import { Checkbox as FbCheckBox, Label } from "flowbite-react";

const CheckBox = ({
  label,
  name,
  id,
  onChange,
  placeholder,
  required,
  children,
  className,
}: {
  label: string;
  id?: string;
  name?: string;
  onChange?: CallableFunction;
  placeholder?: string;
  required?: boolean;
  children?: any;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={label}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        className={`${className} h-4 w-4 rounded text-primary-500 border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-primary-500`}
      />
      <Label htmlFor={label}>{children ? children : label}</Label>
    </div>
  );
};

export default CheckBox;
