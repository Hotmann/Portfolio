import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import styles from "./styles.module.css";

import { personalDetails } from "../../assets/myData/myData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <motion.section
        className={styles.contactPage}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className={styles.pageTitle}>
          <p class={styles.subtext}>Get in touch</p>
          <h1 class={styles.heading}>Contact</h1>
        </div>
        <div className={styles.main}>
          <motion.ul
            className={styles.details}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className={styles.title}>Contact Information</h4>
            <p className={styles.text}>
              Unlocking possibilities, let's collaborate and create greatness!
            </p>
            <motion.li
              className={styles.info}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <span className={styles.value}>{personalDetails.location}</span>
            </motion.li>
            <motion.li
              className={styles.info}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <a className={styles.value} href="tel:+2349074861924">
                {personalDetails.phone}
              </a>
            </motion.li>
            <motion.li
              className={styles.info}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <a className={styles.value} href="mailto:hotmann442@gmail.com">
                {personalDetails.email}
              </a>
            </motion.li>
          </motion.ul>

          <ContactForm />
        </div>
      </motion.section>
    </Layout>
  );
};

export default Contact;
