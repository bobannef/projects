import React from "react";
import styles from "./footer.module.css";
import { FooterLists } from "../FooterLists";
import { Link } from "react-router-dom";

export const Footer = () => {
  const destinations = [
    "Грција",
    "Турција",
    "Црна Гора",
    "Хрватска",
    "Египет",
    "Италија",
    "Далечни патувања",
  ];

  const informations = [
    "Авио карти",
    "MICE Туризам",
    "Team building",
    "Tailor made",
    "Gift card",
  ];

  return (
    <div className={`${styles.footerContainer} container-fluid`}>
      <div className="container">
        <div className={`${styles.footerWrapper} row pb-3`}>
          <div className="col-3">
            <h3 className={styles.footerHeading}>Дестинации</h3>
            <ul className={styles.footerList}>
              {destinations.map((dest, idx) => {
                return <FooterLists key={idx} link={dest} text={dest} />;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h3 className={styles.footerHeading}>Информации</h3>
            <ul className={styles.footerList}>
              {informations.map((item, idx) => {
                return <FooterLists key={idx} link={item} text={item} />;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h3 className={styles.footerHeading}>Останато</h3>
            <ul className={styles.footerList}>
              <li>
                <Link className="footer-link" to="/">
                  За нас
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/opsti-uslovi">
                  Општи услови за <br></br> патување
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/patnicko-osiguruvanje">
                  Патничко <br></br>осигурување
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className={styles.footerHeading}>Контакт</h3>
            <ul className={styles.footerList}>
              <li>
                Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија
              </li>
              <li>Е-маил: contact@infinitytravel.mk</li>
              <li>Телефон: 023100360/ 072254160</li>

              <Link to="https://www.instagram.com" target="blank">
                <img
                  src="/images/instagram-icon.png"
                  className={styles.socialIcons}
                  alt="instagram-icon"
                />
              </Link>

              <Link to="https://www.facebook.com" target="blank">
                <img
                  src="/images/facebook-icon.png"
                  className={styles.socialIcons}
                  alt="facebook-icon"
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.footerTradeMark}`}>
        <div className={styles.buttonChatContainer}>
          <button className={styles.chatButton}>
            <img src="/images/speech-bubble.png" alt="live-chat icon" />
            <span className={styles.chatSpan}>Live chat</span>
          </button>
        </div>
        <p className={`my-0 ${styles.footerParagraph}`}>
          &copy; 2019 Инфинити травел. Сите права се задржани
        </p>
      </div>
    </div>
  );
};
