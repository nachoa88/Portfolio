function ContactSection() {
  return (
    <div className="w3-padding-32 w3-content w3-text-grey" id="contact">
      <h2>Contact Me</h2>
      <hr className="w3-opacity" />

      <div className="w3-section">
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Barcelona, 08017</p>
        <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +34 677 246 546</p>
        <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: nacho.albiol88@gmail.com</p>
      </div>

      <img src="img/map.jpg" className="w3-image w3-greyscale" id="mapImg" alt="Map with the location"/>

      <h2>Work in progress, sorry...</h2>
      <p>Lets get in touch. Send me a message:</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" /></p>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  );
}

export default ContactSection;