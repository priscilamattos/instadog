import React from "react";

import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
