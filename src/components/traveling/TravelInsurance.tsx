import React from "react";
import styles from "./travelInsurance.module.css";
import { Headings } from "../headings/Headings";
import { NewsletterForm } from "../newsletter/NewsletterForm";

export const TravelInsurance = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <Headings text="Патничко осигурување" />
      </div>
      <div className="container mt-5">
        <div className={styles.innerWrapper}>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
          </p>
        </div>
        <div className={styles.innerWrapper}>
          <h3>Lorem ipsum dolor sin amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor tation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
          </p>
        </div>
        <div className={styles.innerWrapper}>
          <h3>Lorem ipsum consectetur adipiscing elit, sed do eiusmo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor tation u
          </p>
        </div>
      </div>
      <div className="pt-5">
        <NewsletterForm />
      </div>
    </>
  );
};
