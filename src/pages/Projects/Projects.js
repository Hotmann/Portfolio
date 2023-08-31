import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import styles from "./styles.module.css";
import Footer from "../../components/Footer/Footer";
import ProjectsData from "./projectData";
import Project from "../../components/Project/Project";

const Projects = () => {
  return (
    <Layout>
      <motion.section
        className={styles.projectPage}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className={styles.pageTitle}>
          <p className={styles.subtext}>Explore my work</p>
          <h1 className={styles.heading}>Projects</h1>
        </div>
        <div className={styles.projectsContainer}>
          {ProjectsData.map((project, id) => (
            <Project key={id} project={project} order={id} />
          ))}
        </div>
      </motion.section>
      <Footer />
    </Layout>
  );
};

export default Projects;
