import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.css";

const SocialHandles = () => {
  return (
    <div className={styles.socialIcons}>
      <a
        className={styles.link}
        href="https://github.com/Hotmann"
        title="Uthmans' GitHub Profile"
      >
        GitHub
        <div className={styles.iconContainer}>
          <FaGithub className={styles.icon} />
        </div>
      </a>

      <a
        className={styles.link}
        href="https://www.linkedin.com/in/uthman-ogunbowale/"
        title="Uthmans' Linkedin Profile"
      >
        Linkedin
        <div className={styles.iconContainer}>
          <FaLinkedin className={styles.icon} />
        </div>
      </a>

      <a
        className={styles.link}
        href="https://twitter.com/_Hotmann"
        title="Uthmans' Twitter Profile"
      >
        Twitter
        <div className={styles.iconContainer}>
          <FaTwitter className={styles.icon} />
        </div>
      </a>

      <a className={styles.link} href="https://www.instagram.com/hotmann._">
        Instagram
        <div className={styles.iconContainer}>
          <FaInstagram className={styles.icon} />
        </div>
      </a>
    </div>
  );
};

export default SocialHandles;
