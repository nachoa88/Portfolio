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

      <div className="contact-info">
        <p><a href="mailto:nacho.albiol88@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope fa-fw w3-xxlarge"></i></a>
          Email: nacho.albiol88@gmail.com
        </p>
        <p><a href="https://wa.me/34677246546" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-phone fa-fw w3-xxlarge"></i></a>
          {t("phone")}: +34 677 246 546
        </p>
        <p><a href="https://www.google.com/maps/search/?api=1&query=Barcelona" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-map-marker fa-fw w3-xxlarge"></i></a>
          Barcelona, 08017
        </p>
      </div>
      <iframe id="mapImg" alt="Map with my location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7212831.327218925!2d-6.9392616546514825!3d42.07437280125591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1704480205423!5m2!1ses!2ses"
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <p className="get-touch">{t("get-in-touch")}</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <p><input className="w3-input w3-padding-14" type="text" placeholder={t("name")} required name="user_name" /></p>
        <p><input className="w3-input w3-padding-14" type="email" placeholder={t("email")} required name="user_email" /></p>
        <p><input className="w3-input w3-padding-14" type="text" placeholder={t("subject")} required name="subject" /></p>
        <p><textarea className="w3-input w3-padding-14" placeholder={t("message")} required name="message" rows="4"></textarea></p>
        <p>
          <button className="message-btn" type="submit" value="Send">
            <i className="fa fa-paper-plane"></i>
            <span className="button-text">{t("send-message")}</span>
          </button>
        </p>
      </form>

    </div>
  );
}

export default ContactSection;