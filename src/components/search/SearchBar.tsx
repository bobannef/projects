import React, { useContext, useState } from "react";
import styles from "./search.module.css";
import { ArrangementsContext } from "../../context/ArrangementsContext";
import { ArrangementsType } from "../../data";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { data } = useContext(ArrangementsContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArrangements, setFilteredArrangements] = useState<
    ArrangementsType[]
  >([]);

  const navigate = useNavigate();

  const handleFilterArrangements = (query: string) => {
    const filtered = data.filter((arrangement) => {
      const countryName = Object.keys(arrangement.Location.Country)[0];

      return countryName.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredArrangements(filtered);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setSearchQuery(userInput);
    handleFilterArrangements(userInput);
  };

  const handleSearch = () => {
    navigate(`/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className={styles.searchInput}>
      <p className={styles.searchTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <span className={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </span>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        className={styles.searchInputField}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};
