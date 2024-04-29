"use client";

import React, { useState } from "react";
import { Instagram, Mail, Phone } from "react-feather";
// import { MdOutlineMail, MdPhoneAndroid } from 'react-icons/md'
// import { RxInstagramLogo } from 'react-icons/rx'

import styles from "./Form.module.scss";
import DetailCard from "./DetailCard/DetailCard";

const iconProps = {
  size: 20,
};

const EMAIL = {
  icon: <Mail {...iconProps} />,
  info: "reg@regtables.com",
};

const INSTAGRAM = {
  icon: <Instagram {...iconProps} />,
  info: "@eat.your.regtables",
};

const PHONE = {
  icon: <Phone {...iconProps} />,
  info: "0764548241",
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try{
      const res = await fetch('/api/emails/contact', { 
        method: 'POST',
        body: JSON.stringify({ formData })
      })
    } catch (error){
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <DetailCard item={EMAIL} />
        <DetailCard item={INSTAGRAM} />
        <DetailCard item={PHONE} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.details}>
          <input
            name="name"
            placeholder="name"
            className="hover"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            name = 'email'
            placeholder="email"
            className="hover"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <textarea
          name = 'message'
          placeholder="your message"
          className="hover"
          onChange={handleChange}
          value={formData.message}
        />

        <button type="submit" className= {`hover`}>
          send
        </button>
      </form>
    </div>
  );
};

export default Form;
