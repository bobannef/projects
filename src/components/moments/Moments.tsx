import React, { useState } from "react";
import styles from "./moments.module.css";
import { Headings } from "../headings/Headings";

export const Moments = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");

  const handleImageClick = (
    imageName: string,
    countryName: string,
    frame: string
  ) => {
    setSelectedImage(imageName);
    setSelectedCountry(countryName);
    setSelectedFrame(frame);
  };

  return (
    <div className={styles.imageContainer}>
      <Headings text="Ваши моменти" />

      <div className={styles.gridContainer}>
        <img
          src="/images/img1.png"
          alt="img1-moments"
          onClick={() =>
            handleImageClick(
              `/images/img1.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img2.png"
          alt="img2-moments"
          onClick={() =>
            handleImageClick(
              `/images/img2.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img3.png"
          alt="img3-moments"
          onClick={() =>
            handleImageClick(
              `/images/img3.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img4.png"
          alt="img4-moments"
          onClick={() =>
            handleImageClick(
              `/images/img4.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img5.png"
          alt="img5-moments"
          onClick={() =>
            handleImageClick(
              `/images/img5.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img6.png"
          alt="img6-moments"
          onClick={() =>
            handleImageClick(
              `/images/img6.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img7.png"
          alt="img7-moments"
          onClick={() =>
            handleImageClick(
              `/images/img7.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img8.png"
          alt="img8-moments"
          onClick={() =>
            handleImageClick(
              `/images/img8.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img9.png"
          alt="img9-moments"
          onClick={() =>
            handleImageClick(
              `/images/img9.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img10.png"
          alt="img10-moments"
          onClick={() =>
            handleImageClick(
              `/images/img10.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img11.png"
          alt="img11-moments"
          onClick={() =>
            handleImageClick(
              `/images/img11.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img12.png"
          alt="img12-moments"
          onClick={() =>
            handleImageClick(
              `/images/img12.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
        <img
          src="/images/img13.png"
          alt="img13-moments"
          onClick={() =>
            handleImageClick(
              `/images/img13.png`,
              "Italy",
              `/images/imgModal2.png`
            )
          }
        />
        <img
          src="/images/img14.png"
          alt="img14-moments"
          onClick={() =>
            handleImageClick(
              `/images/img14.png`,
              "Istanbul,Turkiye",
              `/images/imgModal1.png`
            )
          }
        />
      </div>

      {selectedImage && (
        <div
          className={styles.imageOverlay}
          onClick={() => setSelectedImage("")}
        >
          <div className={styles.imageModal}>
            <div className={styles.imageContainer}>
              <div className={styles.frame}>
                <img
                  src={selectedFrame}
                  alt="frame"
                  style={{
                    width: selectedCountry === "Italy" ? "250px" : "420px",
                    height: selectedCountry === "Italy" ? "80px" : "85px",
                    position:
                      selectedCountry === "Italy" ? "absolute" : "absolute",
                    top: selectedCountry === "Italy" ? "12%" : "12%",
                    left: selectedCountry === "Italy" ? "24%" : "41%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 1,
                  }}
                />
              </div>
              <div className={styles.locationContainer}>
                <img
                  style={{
                    width: "50px",
                    height: "60px",
                    paddingBottom: "1.3rem",
                    paddingLeft: "1.5rem",
                  }}
                  className={styles.locationImg}
                  src="/images/location.png"
                  alt=""
                />
                <p className={styles.countryName}>{selectedCountry}</p>
              </div>
              <img
                src={selectedImage}
                alt="moments-image"
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
