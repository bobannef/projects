import React, { useState } from "react";
import styles from "./contactForm.module.css";
import { Headings } from "../headings/Headings";
import { Link } from "react-router-dom";
import { NewsletterForm } from "../newsletter/NewsletterForm";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log("Name", name);
  console.log("Email", email);
  console.log("Message", message);

  const handleChange = (setField: any) => (event: any) => {
    setField(event.target.value);
  };

  return (
    <div className="container-fluid px-0">
      <Headings text="Контакт" />
      <div className="container">
        <div className={styles.flexContainer}>
          <form>
            <div className={`row ${styles.inputs}`}>
              <div className="col">
                <label htmlFor="name">Име</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleChange(setName)}
                />
              </div>
              <div className="col">
                <label htmlFor="e-mail">Е-маил</label>
                <input
                  type="e-mail"
                  className="form-control"
                  value={email}
                  onChange={handleChange(setEmail)}
                />
              </div>
            </div>
          </form>
          <div className={`row ${styles.contactInfo}`}>
            <div className="col-6">
              <div className={styles.formTextarea}>
                <label className="d-block" htmlFor="message">
                  Порака
                </label>
                <textarea
                  rows={20}
                  className="form-control"
                  value={message}
                  onChange={handleChange(setMessage)}
                />
              </div>
            </div>
            <div className={`col-6 ${styles.contactInfoColumn}`}>
              <h3 className={styles.footerHeading}>Контакт</h3>
              <ul className={styles.footerList}>
                <li>
                  Адреса: Бул. Даме Груев бр.14 лок.24 <br /> 1000 Скопје,
                  Македонија
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

          <div className={styles.btn}>
            <button className={styles.formButton}>прати</button>
          </div>
        </div>
      </div>
      <NewsletterForm />
    </div>
  );
};
