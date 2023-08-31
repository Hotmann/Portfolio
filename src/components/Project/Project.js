import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";

const Project = ({ project, order }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50% 0px",
  });

  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case "React":
        return <SiReact title={tech} style={{ color: "#61dafb" }} />;

      case "JavaScript":
        return <SiJavascript title={tech} style={{ color: "#f0db4f" }} />;

      case "HTML5":
        return <SiHtml5 title={tech} style={{ color: "#e34f26" }} />;

      case "CSS3":
        return <SiCss3 title={tech} style={{ color: "#2965f1" }} />;

      case "nodejs":
        return <SiNodedotjs title={tech} style={{ color: "#339933" }} />;

      case "SCSS":
        return <SiSass title={tech} style={{ color: "#c69" }} />;

      case "TypeScript":
        return <SiTypescript title={tech} style={{ color: "#007ACC" }} />;

      case "Tailwind":
        return <SiTailwindcss title={tech} style={{ color: "#38B2AC" }} />;

      // ...add other cases for additional technologies

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: 0 }}
      transition={{ duration: 0.6, delay: order * 0.1 }}
      whileHover={{ translateY: -5, scale: 1.01 }}
      className={styles.projectContainer}
      ref={ref}
    >
      <div className={styles.imgContainer}>
        <img className={styles.img} src={project.img} alt={project.title} />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <div key={tech} className={styles.techIcon}>
              {getTechnologyIcon(tech)}
            </div>
          ))}
        </div>
        <div className={styles.links}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaExternalLinkAlt /> Live Link
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
