import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.css";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          className={styles.link}
          href="https://github.com/Hotmann"
          title="Uthmans' GitHub Profile"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/uthman-ogunbowale/"
          title="Uthmans' Linkedin Profile"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          className={styles.link}
          href="https://twitter.com/_Hotmann"
          title="Uthmans' Twitter Profile"
        >
          <FaTwitter className={styles.icon} />
        </a>

        <a className={styles.link} href="https://www.instagram.com/hotmann._">
          <FaInstagram className={styles.icon} />
        </a>
      </div>
      <p className={styles.copy}>
        <span>▷</span> Designed and built by Ogunbowale Uthman &copy;
        {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
