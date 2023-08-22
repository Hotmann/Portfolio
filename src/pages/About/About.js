import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import styles from "./styles.module.css";

import Image from "../../assets/images/my_img.jpeg";
import { personalDetails } from "../../assets/myData/myData";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <motion.section
        className={styles.aboutPage}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className={styles.pageTitle}>
          <p class={styles.subtext}>Get to know me better</p>
          <h1 class={styles.heading}>About Me</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.about}>
            <h2 className={styles.name}>
              Hey there! <br /> I'm {personalDetails.name},
            </h2>
            <p className={styles.details}>{personalDetails.about}</p>
            <p className={styles.quote}>
              "Turning ideas into elegant solutions."
            </p>
            <motion.div
              className={styles.links}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                className={styles.link}
                to={`mailto:${personalDetails.email}`}
              >
                Hire Me
              </Link>
              <Link className={styles.link} to="/">
                Resume
              </Link>
            </motion.div>
          </div>
          <div className={styles.container}>
            <img className={styles.img} src={Image} alt="Ogunbowale Uthman" />
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;
