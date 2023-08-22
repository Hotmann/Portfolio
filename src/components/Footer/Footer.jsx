import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/uthman-ogunbowale/"
          title="Uthmans' Linkedin Profile"
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>

        <a
          className={styles.link}
          href="https://twitter.com/_Hotmann"
          title="Uthmans' Twitter Profile"
        >
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </a>

        <a className={styles.link} href="https://www.instagram.com/hotmann._">
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
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
