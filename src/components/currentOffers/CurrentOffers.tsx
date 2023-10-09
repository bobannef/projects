import React, { useState, useContext, useEffect } from "react";
import { ArrangementsContext } from "../../context/ArrangementsContext";
import styles from "./currentOffers.module.css";
import { Headings } from "../headings/Headings";
import { CarouselCard } from "./CarouselCard";
import { Picnic } from "../picnic/Picnic";

export const CurrentOffers = () => {
  const { handleFilterArrangements, selectedLocation, setSelectedLocation } =
    useContext(ArrangementsContext);

  const [pathWithoutLeadingSlash, setPathWithoutLeadingSlash] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("macedonia");

  const [showCarousel, setShowCarousel] = useState(true);

  const customHeadings: any = {
    "": "Актуелни понуди",
    greece: "Грција апартмани и хотели",
    egzotic: "Егзотични дестинации",
    macedonia: "Истражи ја Македонијa",
  };

  const path = window.location?.pathname?.slice(1);

  const macedoniaDestinations = [
    "Охрид",
    "Крушево",
    "Берово",
    "Маврово",
    "Струга",
  ];
  const greeceDestinations = [
    "Касандра",
    "Ситонија",
    "Лефкада",
    "Тасос",
    "Last minute",
  ];
  const egzoticDestinations = [
    "Малдиви",
    "Доминикана",
    "Куба",
    "Дубаи",
    "Сејшели",
  ];

  const locationsMap: Record<string, string[]> = {
    macedonia: macedoniaDestinations,
    greece: greeceDestinations,
    egzotic: egzoticDestinations,
  };

  const filteredArrangements = handleFilterArrangements(selectedLocation);

  useEffect(() => {
    setPathWithoutLeadingSlash(path);

    if (path === "") {
      setSelectedCountry("greece");
      setSelectedLocation("Касандра");
    } else {
      setSelectedCountry(path);
      setSelectedLocation(locationsMap[path][0]);
    }
  }, [path]);

  const handleLocationSelected = (location: string) => {
    setSelectedLocation(location);
    handleFilterArrangements(selectedLocation);
  };

  return (
    <div className={styles.sliderContainer}>
      <Headings text={customHeadings[path]} />
      {showCarousel && (
        <div className={styles.locationButtons}>
          {locationsMap[selectedCountry].map((location) => (
            <button
              key={location}
              onClick={() => handleLocationSelected(location)}
              className={selectedLocation === location ? styles.selected : ""}
            >
              {location}
            </button>
          ))}
        </div>
      )}

      <CarouselCard
        filteredArrangements={filteredArrangements}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />

      {path === "macedonia" && (
        <>
          <Headings text="Излети" />
          <Picnic
            filteredArrangements={filteredArrangements}
            showCarousel={showCarousel}
            setShowCarousel={setShowCarousel}
          />
        </>
      )}
    </div>
  );
};
