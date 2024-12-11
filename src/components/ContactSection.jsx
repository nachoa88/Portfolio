import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../components/css/ContactSection.css';

function ContactSection() {
  const { t } = useTranslation();

  const form = useRef();

  // Reset the form fields
  const clearForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1b5j0qf', 'template_sl424gr', form.current, 'sgN1ERRoHV7F3wBk9')
      .then((result) => {
        console.log(result.text);
        clearForm(); // Clear the input fields
        window.alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className="w3-padding-32 w3-content" id="contact">
      <h2>{t("contact-me")}</h2>
      <hr className="w3-opacity" />
      <div className="row">
        <div className="col-lg-6 col-sm-12 contact-info order-lg-2">
          <p><a href="mailto:nacho.albiol88@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope fa-fw w3-xxlarge"></i></a>
            Email: nacho.albiol88@gmail.com
          </p>
          <p><a href="https://wa.me/34677246546" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone fa-fw w3-xxlarge"></i></a>
            {t("phone")}: +34 677 246 546
          </p>
          <p><a href="https://www.google.com/maps/search/?api=1&query=Barcelona" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-map-marker-alt fa-fw w3-xxlarge"></i></a>
            Barcelona, 08017
          </p>
        </div>

        <div className="col-lg-6 col-sm-12 order-lg-1">
          <p className="get-touch">{t("get-in-touch")}</p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <p><input className="w3-input w3-padding-14" type="text" placeholder={t("name")} required name="user_name" /></p>
            <p><input className="w3-input w3-padding-14" type="email" placeholder={t("email")} required name="user_email" /></p>
            <p><input className="w3-input w3-padding-14" type="text" placeholder={t("subject")} required name="subject" /></p>
            <p><textarea className="w3-input w3-padding-14" placeholder={t("message")} required name="message" rows="4"></textarea></p>
            <button className="normal-btn" type="submit" value="Send">
              <i className="fas fa-paper-plane"></i>
              <span className="button-text">{t("send-message")}</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ContactSection;