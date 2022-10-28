import React from "react";

const validation = {
  email: {
    regex: /^\d{5}-?\d{3}$/,
  },
  message: "Please enter a valid email address",
};

const UseForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Please enter a valid email address");
      return false;
    } else if (validate[type] && validate[type].regex.test(value)) {
      setError(validate[type].message);
      return false;
    } else return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default UseForm;
