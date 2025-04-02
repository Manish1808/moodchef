import React from "react";

export const RadioGroup = ({ children }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};

export const Radio = ({ value, label, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="radio" value={value} onChange={onChange} className="cursor-pointer" />
      <span>{label}</span>
    </label>
  );
};
