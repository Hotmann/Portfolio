import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import styles from "./styles.module.css";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <Layout>
      <motion.section
        className={styles.projectPage}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Coming Soon...
      </motion.section>
      <Footer />
    </Layout>
  );
};

export default Projects;
