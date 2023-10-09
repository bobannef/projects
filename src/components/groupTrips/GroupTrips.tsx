import React from "react";
import styles from "./groupTrips.module.css";
import { Link } from "react-router-dom";

export const GroupTrips = () => {
  return (
    <div className={`container-fluid ${styles.groupTripsContainer}`}>
      <div className={styles.groupTripsInner}>
        <div className="row">
          <div className={`${styles.groupImg1}`}>
            <img src="/images/group-trips-img1.png" alt="group-trips-img" />
          </div>
          <div className={`${styles.bgImage}`}>
            <img
              className={styles.groupImg2}
              src="/images/group-trips-img2.png"
              alt="group-trips-img"
            />
            <img
              className={styles.groupImg3}
              src="/images/group-trips-img3.png"
              alt="group-trips-img"
            />
            <img
              className={styles.istanbulImage}
              src="/images/istanbul-img.png"
              alt="istanbul-img"
            />
            <img
              className={styles.londonImage}
              src="/images/london-img.png"
              alt="london-img"
            />
          </div>

          <div className={styles.bgImage2}>
            <div className={styles.whiteBgImgContainer}>
              <img src="/images/white-bg-img.png" alt="" />
              <div className={styles.innerContent}>
                <h3 className={styles.innerContentTitle}>Групни патувања</h3>
                <p className={styles.subTitle}>
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                </p>
                <Link to="grupni-patuvanja">
                  <button className={styles.innerContentBtn}>повеќе</button>
                </Link>
              </div>
            </div>
            <img
              className={styles.purpleLinesImg}
              src="/images/purpleLines-img.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.whiteInfoBanner}>
        <img
          className={styles.violetImgUp}
          src="/images/violet-img.png"
          alt=""
        />
        <div className={styles.bannerContent}>
          <div className={`row ${styles.row}`}>
            <div className={`col-4 ${styles.rowItem}`}>
              <img src="/images/whiteBannerImg1.png" alt="white-banner-img" />
              <p>
                1000+патувања <br /> Започнете ја вашата <br /> авантура
              </p>
            </div>
            <div className={`col-4 ${styles.rowItem}`}>
              <img src="/images/whiteBannerImg2.png" alt="white-banner-img" />
              <p>
                15000+патници годишно <br />
                Бидете дел од нашите <br /> задоволни патници
              </p>
            </div>
            <div className={`col-4 ${styles.rowItem}`}>
              <img src="/images/whiteBannerImg3.png" alt="white-banner-img" />
              <p>
                Одберете ја вашата <br /> дестинација
              </p>
            </div>
          </div>
        </div>
        <img
          className={styles.violetImgDown}
          src="/images/violet-img.png"
          alt=""
        />
      </div>
    </div>
  );
};
