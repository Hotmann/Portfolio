import React, { useState } from "react";

import styles from "./styles.module.css";

import open from "../../assets/images/open.svg";
import close from "../../assets/images/close.svg";
import NavLinks from "../NavItems/Navlinks";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  const closeNav = () => {
    setShowNav((prev) => false);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Hotmann</h1>

      <div onClick={handleNav}>
        {showNav ? (
          <img className={styles.close} src={close} alt="Close" />
        ) : (
          <img className={styles.open} src={open} alt="Open" />
        )}
      </div>
      {showNav ? <NavLinks show={closeNav} /> : ""}
    </header>
  );
};

export default Header;
