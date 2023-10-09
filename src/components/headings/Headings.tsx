import React from "react";
import styles from "./headings.module.css";

interface Props {
  text: string;
}
export const Headings = ({ text }: Props) => {
  return (
    <div className={styles.headingContainer}>
      <img
        src="/images/Line14.png"
        alt="heading-line"
        className={styles.headingLine}
      />
      <h1 className={styles.heading}>{text}</h1>
      <img
        src="/images/Line14.png"
        alt="heading-line"
        className={styles.headingLine}
      />
    </div>
  );
};
