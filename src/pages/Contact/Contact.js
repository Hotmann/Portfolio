import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "../../components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <section id="contact" className={styles.contact}>
        <p class={styles.note}>Get in touch</p>
        <h3 class={styles.heading}>Contact</h3>
        <div className={styles.main}>
          <ul className={styles.details}>
            <h4 className={styles.title}>Contact Information</h4>
            <p className={styles.text}>
              Unlocking possibilities, let's collaborate and create greatness!
            </p>
            <li className={styles.info}>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <span className={styles.value}>Lagos, Nigeria</span>
            </li>
            <li className={styles.info}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <a className={styles.value} href="tel:+2349074861924">
                +234 9074 861 924
              </a>
            </li>
            <li className={styles.info}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <a className={styles.value} href="mailto:hotmann442@gmail.com">
                hotmann442@gmail.com
              </a>
            </li>
          </ul>
          <form
            netlify
            name="contact"
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <h4 className={styles.title}>Let's Talk</h4>

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name
              </label>

              <input
                type="text"
                className={styles.formInput}
                onChange={handleChange}
                value={formData.name}
                id="name"
                name="name"
                placeholder="Your Name?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>

              <input
                type="email"
                className={styles.formInput}
                onChange={handleChange}
                value={formData.email}
                id="contactEmail"
                name="email"
                placeholder="Your Email?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                className={styles.formInput}
                onChange={handleChange}
                value={formData.message}
                name="message"
                id="message"
                placeholder="Leave your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.btn}>
              {success ? "Message Delivered" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
