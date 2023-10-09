import React, { useContext } from "react";
import styles from "./ArrangamentModule.module.css";
import { ArrangementsType, Image } from "../../data";
import { useParams } from "react-router-dom";
import { ArrangementsContext } from "../../context/ArrangementsContext";
import { Headings } from "../headings/Headings";
import { PriceTable } from "../prices/PriceTable";
import { Carousel } from "react-responsive-carousel";

export const ArrangementDetails = () => {
  const { data } = useContext(ArrangementsContext);

  const { id } = useParams();
  const foundArrangement = data.find((arr) => arr.id === id);

  if (!foundArrangement) {
    return <div>Arrangement not found</div>;
  }

  const locations = `${Object.keys(foundArrangement.Location.Country)}, 
  ${
    foundArrangement.Location.Country[
      Object.keys(foundArrangement.Location.Country)[0]
    ].Region
  }`;

  const thumbnailImages = Object.keys(
    foundArrangement.Gallery[0].Thumbnail
  ).map((key) => {
    const image = foundArrangement.Gallery[0].Thumbnail[key];

    return (
      <div key={key} className={styles.carouselImage}>
        <img src={`/${image.url}`} alt={image.Description} />
      </div>
    );
  });

  return (
    <div className={styles.detailsContainer}>
      <Headings text={foundArrangement.Name} />
      <div className={`container ${styles.detailsInner}`}>
        <div className={styles.navBar}>
          <div className={styles.navItems}>
            <p>Опис</p>
            <p>Галерија</p>
            <p>Цени</p>
            <p>Превоз</p>
          </div>
          <div className={styles.navLocation}>
            <p className={styles.location}>
              <img src="/images/location.png" />
              {locations}
            </p>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <h3>{foundArrangement.Name}</h3>
          <p>{foundArrangement.ApartmentDescription}</p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <Carousel
            className={styles.carouselWrapper}
            autoPlay={true}
            centerMode={true}
            centerSlidePercentage={25}
            showThumbs={false}
            showStatus={false}
          >
            {thumbnailImages}
          </Carousel>
        </div>
        <div>
          <PriceTable />
        </div>
        <h3 className="pt-5">Превоз</h3>
        <p>{foundArrangement.TransportationDescription}</p>
      </div>
    </div>
  );
};
