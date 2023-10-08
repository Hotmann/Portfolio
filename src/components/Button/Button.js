import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, to, download }) => {
  return (
    <Link className={styles.link} to={to} download={download}>
      {children}
    </Link>
  );
};

export default Button;
