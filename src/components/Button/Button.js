import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, to, download }) => {
  return (
    <Link download={download} className={styles.link} to={to}>
      {children}
    </Link>
  );
};

export default Button;
