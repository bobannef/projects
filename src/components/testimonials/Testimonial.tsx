import React, { useContext } from "react";
import styles from "./testimonial.module.css";
import { Headings } from "../headings/Headings";
import { ArrangementsContext } from "../../context/ArrangementsContext";

export const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <Headings text="Тестимониал" />
      <div className={styles.testimonialInner}>
        <div className={`row ${styles.testimonialContent}`}>
          <div className={`col-4 ${styles.testimonialCard}`}>
            <div className="card position-relative">
              <div className={styles.yellowTrack}>
                <img src="/images/yellowTrack.png" alt="" />
              </div>

              <img
                src="/images/test-img1.png"
                className={`${styles.testimonialImg} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h3 className={styles.testimonialTitle}>Lorem ipsum</h3>
                <img src="/images/star.png" alt="" />
                <p className={`${styles.testmonialText} card-text`}>
                  Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor
                </p>
                <p className={styles.hotelText}>Marriott Hotel</p>
                <img
                  className={styles.testLine1}
                  src="/images/testLine-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={`col-4 ${styles.testimonialCard}`}>
            <div className="card position-relative">
              <div className={styles.yellowTrack}>
                <img src="/images/yellowTrack.png" alt="" />
              </div>

              <img
                src="/images/test-img2.png"
                className={`${styles.testimonialImg} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h3 className={styles.testimonialTitle}>Lorem ipsum</h3>
                <img src="/images/star.png" alt="" />
                <p className={`${styles.testmonialText} card-text`}>
                  Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor
                </p>
                <p className={styles.hotelText}>Holiday Inn</p>
                <img
                  className={styles.testLine2}
                  src="/images/testLine-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={`col-4 ${styles.testimonialCard}`}>
            <div className="card position-relative">
              <div className={styles.yellowTrack}>
                <img src="/images/yellowTrack.png" alt="" />
              </div>

              <img
                src="/images/test-img3.png"
                className={`${styles.testimonialImg} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h3 className={styles.testimonialTitle}>Lorem ipsum</h3>
                <img src="/images/star.png" alt="" />
                <p className={`${styles.testmonialText} card-text`}>
                  Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor
                </p>
                <p className={styles.hotelText}>UTMS</p>
                <img
                  className={styles.testLine3}
                  src="/images/testLine-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
