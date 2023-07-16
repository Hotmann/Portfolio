import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
      </a>

      <a
        className={styles.link}
        href="https://www.linkedin.com/in/uthman-ogunbowale/"
        title="Uthmans' Linkedin Profile"
      >
        GitHub
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
      </a>

      <a
        className={styles.link}
        href="https://twitter.com/_Hotmann"
        title="Uthmans' Twitter Profile"
      >
        Twitter
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
      </a>

      <a className={styles.link} href="https://www.instagram.com/hotmann._">
        Instagram
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialHandles;
