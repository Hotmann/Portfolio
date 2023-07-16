import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const NavLinks = ({ show }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={show}></div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NavLink to="/" onClick={show}>
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/about" onClick={show}>
              About
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/projects" onClick={show}>
              Projects
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/contact" onClick={show}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
