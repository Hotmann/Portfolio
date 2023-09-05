import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, to }) => {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
};

export default Button;
