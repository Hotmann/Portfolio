import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ name: "", email: "", message: "" });
    const newErrors = validateForm();

    if (Object.values(newErrors).every((value) => value === "")) {
      try {
        const response = await fetch("https://formspree.io/f/xqkvbqbw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.ok) {
          // Formspree submission was successful
          setSuccess(true);
          setFormData(initialFormData);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        } else {
          // Formspree submission failed
          setSuccess(false);
          alert("Message failed to send. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSuccess(false);
        alert(`An error occurred. Please try again later.`);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      name="contact"
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <h4 className={styles.title}>Let's Talk</h4>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={`${styles.formInput} ${
            errors.name ? styles.errorInput : ""
          }`}
          onChange={handleChange}
          value={formData.name}
          id="name"
          name="name"
          placeholder="Your Name?"
        />
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={`${styles.formInput} ${
            errors.email ? styles.errorInput : ""
          }`}
          onChange={handleChange}
          value={formData.email}
          id="email"
          name="email"
          placeholder="Your Email?"
        />
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.formGroup}>
        <textarea
          className={`${styles.formInput} ${
            errors.message ? styles.errorInput : ""
          }`}
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="message"
          placeholder="Leave your Message"
        ></textarea>
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>
      <button type="submit" className={styles.btn}>
        {success ? "Message Delivered" : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
