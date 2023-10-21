import { useTranslation } from 'react-i18next';

function ContactSection() {
  const { t } = useTranslation();

  return (
    <div className="w3-padding-32 w3-content w3-text-grey" id="contact">
      <h2>{t("contact-me")}</h2>
      <hr className="w3-opacity" />

      <div className="w3-section">
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Barcelona, 08017</p>
        <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> {t("phone")}: +34 677 246 546</p>
        <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: nacho.albiol88@gmail.com</p>
      </div>

      <img src="img/map.jpg" className="w3-image w3-greyscale" id="mapImg" alt="Map with the location"/>

      <h2>Work in progress, sorry...</h2>
      <p>{t("get-in-touch")}</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t("name")} required name="Name" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t("email")} required name="Email" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t("subject")} required name="Subject" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t("message")} required name="Message" /></p>
        <p>
          <button className="w3-button" id="messageBtn" type="submit">
            <i className="fa fa-paper-plane"></i> {t("send-message")}
          </button>
        </p>
      </form>
    </div>
  );
}

export default ContactSection;