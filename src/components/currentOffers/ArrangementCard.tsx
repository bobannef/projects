import React, { useContext, useState } from "react";
import styles from "./currentOffers.module.css";
import { ArrangementsType } from "../../data";
import { useNavigate } from "react-router-dom";
import { ArrangementsContext } from "../../context/ArrangementsContext";

interface Props {
  arrangement: ArrangementsType;
  setSelectedArrangement: (arrangement: ArrangementsType | null) => void;
}

export const ArrangementCard = ({
  arrangement,
  setSelectedArrangement,
}: Props) => {
  const path = window.location.pathname.slice(1);
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);
  console.log(capitalizedPath);
  const navigation = useNavigate();

  return (
    <div className="row">
      <div className={`card px-0 mr-5 ${styles.cardWrapper}`}>
        <div className={styles.carouselImages}>
          {arrangement.Gallery.map((image, index) => (
            <img
              key={index}
              src={`${image.url}`}
              alt={image.Description}
              className={styles.carouselImage}
            />
          ))}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h4 className="m-0 pb-2 pr-4">{arrangement.Name}</h4>
            {Array(arrangement.Rating)
              .fill(null)
              .map((_, index) => {
                return (
                  <i
                    key={`${index}`}
                    className={`fa fa-star pt-2 ${styles.stars}`}
                  ></i>
                );
              })}
          </div>

          <p className={styles.location}>
            <img src="/images/location.png" />
            {
              arrangement.Location.Country[
                capitalizedPath ? capitalizedPath : "Macedonia"
              ]?.Region
            }
          </p>
          <div className={styles.cardBody}>
            <div className={styles.left}>
              <p>{arrangement.Description}</p>
              <span>{arrangement.Distance}</span>
            </div>
            <div className={styles.right}>
              {arrangement.Prices.map((price) => {
                return (
                  <p key={price.id}>
                    <span>од</span> <br /> <br /> &euro;{price.Prices}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <button
            onClick={() => {
              setSelectedArrangement(arrangement);
              navigation(`/details/${arrangement.id}`);
            }}
            className={styles.cardButton}
          >
            Повеќе
          </button>
        </div>
      </div>
    </div>
  );
};
