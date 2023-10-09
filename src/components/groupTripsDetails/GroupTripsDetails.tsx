import React from "react";
import styles from "./groupTripsDetails.module.css";
import { Headings } from "../headings/Headings";

export const GroupTripsDetails = () => {
  return (
    <div className="container-fluid pt-4">
      <Headings text="Групни патувања" />
      <div className="container pt-4">
        <div className={styles.flexContainer}>
          <section>
            <div className={`mr-5 ${styles.content}`}>
              <h3>MICE Tourism</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim.
              </p>
            </div>
            <img
              className={`ml-2 ${styles.image}`}
              src="/images/group-trips-img5.png"
              alt="group-trips-img"
            />
          </section>

          <section>
            <img
              className={`mr-5 ${styles.image}`}
              src="/images/group-trips-img6.png"
              alt="group-trips-img"
            />
            <div className={`ml-2 ${styles.content}`}>
              <h3>Team Building</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim.
              </p>
            </div>
          </section>

          <section>
            <div className={`mr-5 ${styles.content}`}>
              <h3>Tailor Made</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim.
              </p>
            </div>
            <img
              className={`ml-2 ${styles.image}`}
              src="/images/group-trips-img7.png"
              alt="group-trips-img"
            />
          </section>
        </div>
      </div>
    </div>
  );
};
