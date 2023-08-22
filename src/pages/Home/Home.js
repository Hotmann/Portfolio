import React from "react";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import ParticleAnimation from "../../components/ParticleAnimation/ParticleAnimation";
import Typewriter from "typewriter-effect";

import styles from "./styles.module.css";
import SocialHandles from "../../components/SocialHandles/SocialHandles";

const Home = () => {
  return (
    <Layout>
      <ParticleAnimation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.main}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.text}
        >
          Hi, I'm Uthman
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.typewriter}
        >
          I'm
          <Typewriter
            options={{
              strings: [
                "a Software Developer",
                "a Frontend Developer",
                "a Technical Writer",
              ],
              delay: 100,
              deleteSpeed: 100,
              loop: true,
              autoStart: true,
            }}
          />
        </motion.span>
      </motion.div>
      <SocialHandles />
    </Layout>
  );
};

export default Home;
