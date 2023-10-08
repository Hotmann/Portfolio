import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, to, ...others }) => {
  return (
    <Link className={styles.link} to={to} {...others}>
      {children}
    </Link>
  );
};

export default Button;
