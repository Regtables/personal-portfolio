"use client";

import React, { useState } from "react";
import { Instagram, Linkedin, Mail, Phone } from "react-feather";
import { motion } from "framer-motion";

import { useModal } from "@/app/context/ModalContext";
import styles from "./Form.module.scss";

import DetailCard from "./DetailCard/DetailCard";

const iconProps = {
  size: 20,
};

const EMAIL = {
  icon: <Mail {...iconProps} />,
  info: "reghardt7@gmail.com",
  url: 'mailto:reghardt7@gmail.com'
};

const INSTAGRAM = {
  icon: <Instagram {...iconProps} />,
  info: "@eat.your.regtables",
  url: '"https://www.instagram.com/eat.your.regtables/"'
};

const PHONE = {
  icon: <Phone {...iconProps} />,
  info: "0764548241",
};

const Linked = {
  icon: <Linkedin {...iconProps} />,
  info: "Reghardt Pienaar",
  url: "https://www.linkedin.com/in/reghardt-pienaar-617329a7/"
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleModalOpen, handleModalClose } = useModal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      handleModalOpen("loading");
      const res = await fetch("/api/emails/contact", {
        method: "POST",
        body: JSON.stringify({ formData }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      handleModalClose();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <DetailCard item={EMAIL} />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <DetailCard item={INSTAGRAM} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <DetailCard item={PHONE} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <DetailCard item={Linked} />
        </motion.div>
      </div>

      {isSubmitted ? (
        <motion.div
          className="text-center lg:w-[70%] w-full flex justify-center lg:mx-auto mt-8"
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-[38px] font-[800] text-[var(--color-font)] ">
            Thank you for getting in touch, {formData.name}. I will get back to
            you shortly
          </h2>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className={styles.details}>
            <input
              name="name"
              placeholder="name"
              className="hover"
              onChange={handleChange}
              value={formData.name}
              // required
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="hover"
              onChange={handleChange}
              value={formData.email}
              // required
            />
          </div>

          <textarea
            name="message"
            placeholder="your message"
            className="hover"
            onChange={handleChange}
            value={formData.message}
            // required
          />

          <button type="submit" className={`hover`}>
            send
          </button>
        </motion.form>
      )}
    </div>
  );
};

export default Form;
