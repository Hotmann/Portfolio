import React from "react";

import styles from "./styles.module.css";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
