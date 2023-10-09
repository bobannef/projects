import React, { useState } from "react";
import styles from "./newsletter.module.css";

export const NewsletterForm = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.headingContainer}>
          <img
            src="/images/mailbox.png"
            className={styles.mailbox}
            alt="mail-box"
          />
          <h4 className={styles.headingTitle}>
            Пријави се и добивај актуелни <br></br> понуди на твојот маил
          </h4>
          {isShown ? (
            <img
              onClick={() => setIsShown((prevState) => !prevState)}
              src="/images/chevron-up.png"
              className={styles.arrowDown}
              alt="chevron-down"
            />
          ) : (
            <img
              onClick={() => setIsShown((prevState) => !prevState)}
              src="/images/chevron-down.png"
              className={styles.arrowDown}
              alt="chevron-down"
            />
          )}
        </div>

        {isShown && (
          <div>
            <div className={styles.form}>
              <form>
                <div className="row">
                  <div className="col">
                    <label htmlFor="name">Име</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <label htmlFor="name">Е-маил</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className={`col ${styles.buttonContainer}`}>
                    <button type="submit" className={styles.formButton}>
                      Пријави ме
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <p className={styles.notification}>
              Со кликнување на Пријави ме се зачленуваш за добивање на маилови
              нашите актуелни понуди и промоции
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
