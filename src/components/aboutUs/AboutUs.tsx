import React from "react";
import styles from "./aboutUs.module.css";

import { Headings } from "../headings/Headings";
import { ContactForm } from "../contactForm/ContactForm";

export const AboutUs = () => {
  return (
    <div className="container-fluid px-0 pt-5">
      <Headings text="За нас" />
      <div className={styles.bgImage}>
        <div className={styles.whiteBgImgContainer}>
          <img src="/images/white-bg-img.png" className="h-75" alt="" />
          <div className={styles.innerContent}>
            <h3 className={styles.innerContentTitle}>Lorem Ipsum</h3>
            <p className={styles.subTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <ContactForm />
      </div>
    </div>
  );
};
