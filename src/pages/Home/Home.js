import React from "react";
import Layout from "../../components/Layout/Layout";
import Typewriter from "typewriter-effect";

import styles from "./styles.module.css";
import SocialHandles from "../../components/SocialHandles/SocialHandles";

const Home = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <h2 className={styles.text}>Hi, my name is Uthman,</h2>
        <span className={styles.typewriter}>
          I'm
          <Typewriter
            options={{
              strings: [
                "a Software Developer",
                "a Frontend Developer",
                "a Writer",
              ],
              delay: 100,
              deleteSpeed: 100,
              loop: true,
              autoStart: true,
            }}
          />
        </span>
      </div>
      <SocialHandles />
    </Layout>
  );
};

export default Home;
