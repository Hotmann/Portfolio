import React from "react";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import ParticleAnimation from "../../components/ParticleAnimation/ParticleAnimation";
import Typewriter from "typewriter-effect";
import SocialHandles from "../../components/SocialHandles/SocialHandles";

import styles from "./styles.module.css";
import { personalDetails } from "../../data/myData";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <Layout>
      <ParticleAnimation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={styles.main}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.text}
        >
          Hi, I'm Uthman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.typewriter}
        >
          I'm{" "}
          <Typewriter
            component="span"
            options={{
              strings: [
                "a Software Developer",
                "a Frontend Developer",
                "passionate about coding",
                "passionate about creating exceptional digital experiences.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.p>
        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button to="/projects">Projects</Button>
          <Button to="/contact">Contact Me</Button>
        </motion.div>
      </motion.div>
      <SocialHandles />
    </Layout>
  );
};

export default Home;
