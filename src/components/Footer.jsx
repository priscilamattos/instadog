import React from "react";
import styles from "../css/Footer.module.css";
import { ReactComponent as Dogs } from "../assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs 2023</p>
    </footer>
  );
};

export default Footer;
