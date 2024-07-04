import React from "react";

const RadioButton = ({ id, name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-4 w-4 text-blue-500"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
