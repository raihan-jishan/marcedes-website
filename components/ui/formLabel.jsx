import React from "react";

const FormLabel = ({ label }) => {
  return (
    <label
      htmlFor="name"
      className="block text-xl font-ElmsSans font-semibold text-gray-100 mb-2"
    >
      {label}
    </label>
  );
};

export default FormLabel;
