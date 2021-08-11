import "../../../styles/SideBar/Contacts.scss";

const Contacts = () => (
  <div className="contactsContainer">
    <h2 className="subHeader">Contacts</h2>
    <h3 className="cityName">Kyiv, Ukraine</h3>
    <ul>
      <li>
        <a className="contactLink" href="tel:+380504942472">
          +38 (050) 494 24 72
        </a>
      </li>
      <li>
        <a className="contactLink" href="mailto:p380504942472@gmail.com">
          p380504942472@gmail.com
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          className="contactLink"
          href="https://t.me/don_pablio"
        >
          Telegram
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          className="contactLink"
          href="https://www.linkedin.com/in/pavel-bulaienko-472b0b1b8/"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          className="contactLink"
          href="https://github.com/PavelBulaienko"
        >
          My github
        </a>
      </li>
    </ul>
  </div>
);

export default Contacts;
