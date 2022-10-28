import React from "react";

import styles from "./Button.module.css";

const Button = ({ label, ...props }) => {
  return (
    <div>
      <button {...props} className={styles.button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
