import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

function Socials() {
  return (
    <section className="socials-section" id="socials">
      <h2> Follow Me On All Platforms  </h2>


      <div className="socials-grid">

        <a
          href="https://www.youtube.com/@3mr-Elfa7L"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaYoutube className="social-icon" />
          <span> YouTube</span>
        </a>

        <a
          href="https://www.instagram.com/3mr_malek.1/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaInstagram className="social-icon" />
          <span> Instagram</span>
        </a>

        <a
          href="https://t.me/+W5gyldtN6RwwMmY0"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaTelegramPlane className="social-icon" />
          <span> Community</span>
        </a>
        <a
          href="https://t.me/+PC1eM7bYScVhZTNk"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaTelegramPlane className="social-icon" />
          <span> Chat</span>
        </a>

        <a
          href="https://www.tiktok.com/@amrmindset"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaTiktok className="social-icon" />
          <span> TikTok</span>
        </a>

      </div>
    </section>
  );
}

export default Socials;