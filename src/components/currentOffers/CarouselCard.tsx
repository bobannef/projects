import React, { useState, useContext, useEffect } from "react";
import styles from "./currentOffers.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrangementsType } from "../../data";
import { ArrangementCard } from "./ArrangementCard";
import { FilterSideBar } from "../filterBar/FilterSideBar";
import { ArrangementsContext } from "../../context/ArrangementsContext";

interface Props {
  filteredArrangements: ArrangementsType[];
  showCarousel: boolean;
  setShowCarousel: any;
}

export const CarouselCard = ({
  filteredArrangements,
  showCarousel,
  setShowCarousel,
}: Props) => {
  const {
    data,
    selectedCountry,
    selectedArrangementType,
    selectedPriceRange,
    setSelectedArrangement,
  } = useContext(ArrangementsContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [centerSlidePercentage, setCenterSlidePercentage] = useState<number>(
    calculateCenterSlidePercentage()
  );

  function calculateCenterSlidePercentage() {
    return window.innerWidth <= 426 ? 100 : 25;
  }

  useEffect(() => {
    function handleResize() {
      setCenterSlidePercentage(calculateCenterSlidePercentage());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredByCountryAndType = data.filter((arrangement) => {
    const countryKey = Object.keys(arrangement.Location.Country)[0];
    const typeKey = arrangement.Type;
    const price = arrangement.Prices[0]?.Prices || 0;
    const location = arrangement.Location.Country[countryKey];
    const region = location ? location.Region?.toLowerCase() : "";
    const searchKey = searchQuery.toLowerCase();

    return (
      (selectedCountry.length === 0 || selectedCountry.includes(countryKey)) &&
      (selectedArrangementType.length === 0 ||
        selectedArrangementType.includes(typeKey)) &&
      ((selectedPriceRange.min === 0 && selectedPriceRange.max === 0) ||
        (price >= selectedPriceRange.min && price <= selectedPriceRange.max)) &&
      (searchKey === "" || region?.includes(searchKey))
    );
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        {!showCarousel && (
          <div className="col-3">
            <FilterSideBar
              handleSearch={handleSearch}
              searchQuery={searchQuery}
            />
          </div>
        )}

        <div className={`${styles.cardsContainer}`}>
          {showCarousel ? (
            <Carousel
              autoPlay={true}
              centerMode={true}
              centerSlidePercentage={centerSlidePercentage}
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
          ) : (
            filteredByCountryAndType.map((arrangement) => (
              <ArrangementCard
                key={arrangement.id}
                arrangement={arrangement}
                setSelectedArrangement={setSelectedArrangement}
              />
            ))
          )}
        </div>
      </div>
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
