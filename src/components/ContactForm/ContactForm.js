import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      netlify
      name="contact"
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <h4 className={styles.title}>Let's Talk</h4>

      <div className={styles.formGroup}>
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
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
      </div>

      <div className={styles.formGroup}>
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
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
      </div>

      <div className={styles.formGroup}>
        <textarea
          className={styles.formInput}
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="message"
          placeholder="Leave your Message"
          required
        ></textarea>
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
      </div>

      <button type="submit" className={styles.btn}>
        {success ? "Message Delivered" : "Send Message"}
      </button>
    </motion.form>
  );
};
export default ContactForm;
