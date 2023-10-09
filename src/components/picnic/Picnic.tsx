import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { ArrangementsType } from "../../data";
import { ArrangementCard } from "../currentOffers/ArrangementCard";
import { ArrangementsContext } from "../../context/ArrangementsContext";
import styles from "./picnik.module.css";
import { PicnicDetails } from "./PicnicDetails";

interface Props {
  filteredArrangements: ArrangementsType[];
  showCarousel: boolean;
  setShowCarousel: any;
}

export const Picnic = ({
  filteredArrangements,
  showCarousel,
  setShowCarousel,
}: Props) => {
  const { setSelectedArrangement } = useContext(ArrangementsContext);

  return (
    <>
      {showCarousel && (
        <Carousel
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={25}
          className={`container ${styles.carouselWrapper}`}
        >
          {filteredArrangements.map((arrangement) => (
            <ArrangementCard
              key={arrangement.id}
              arrangement={arrangement}
              setSelectedArrangement={setSelectedArrangement}
            />
          ))}
        </Carousel>
      )}
      <div className={styles.carouselButtonWrapper}>
        <button
          className={styles.carouselButton}
          onClick={() => setShowCarousel(!showCarousel)}
        >
          {showCarousel ? "See more >>" : "Back"}
        </button>
      </div>
    </>
  );
};
