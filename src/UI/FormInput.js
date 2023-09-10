import React from 'react';

const FormInput = ({ id, title, valueName, setValue, type }) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        value={valueName}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default FormInput;
