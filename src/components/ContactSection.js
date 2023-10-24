import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <p><i className="fa fa-envelope fa-fw w3-xxlarge"></i> Email: nacho.albiol88@gmail.com</p>
        <p><i className="fa fa-phone fa-fw w3-xxlarge"></i> {t("phone")}: +34 677 246 546</p>
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge"></i> Barcelona, 08017</p>
      </div>

      <img src="img/map.jpg" className="w3-image w3-greyscale" id="mapImg" alt="Map with my location" />

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