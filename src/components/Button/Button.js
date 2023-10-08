import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, to, download }) => {
  return (
    <a download={download} className={styles.link} href={to}>
      {children}
    </a>
  );
};

export default Button;
