import React, { useContext, useState } from "react";
import styles from "./filterSideBar.module.css";
import { ArrangementsContext } from "../../context/ArrangementsContext";

interface Props {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

export const FilterSideBar = ({ handleSearch, searchQuery }: Props) => {
  const {
    data,
    selectedCountry,
    selectedArrangementType,
    setSelectedCountry,
    setSelectedArrangementType,
    selectedPriceRange,
    setSelectedPriceRange,
  } = useContext(ArrangementsContext);

  const handleFilterByCountry = (country: string) => {
    if (selectedCountry.includes(country)) {
      setSelectedCountry(selectedCountry.filter((c) => c !== country));
    } else {
      setSelectedCountry([country]);
    }
  };

  const handleFilterByArrType = (type: string) => {
    if (selectedArrangementType.includes(type)) {
      setSelectedArrangementType(
        selectedArrangementType.filter((t) => t !== type)
      );
    } else {
      setSelectedArrangementType([type]);
    }
  };

  const handleFilterByPriceRange = (minPrice: number, maxPrice: number) => {
    const filteredArrangementsByPrice = data.filter((arrangement) => {
      const price = arrangement.Prices[0]?.Prices || 0;
      return price >= minPrice && price <= maxPrice;
    });

    setSelectedPriceRange({ min: minPrice, max: maxPrice });
  };

  return (
    <>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className={`${styles.filterContainer}`}>
        <h5 className="pl-3">Дестинација</h5>
        <div className={`${styles.formGroup} pl-3`}>
          <div className={styles.filterContent}>
            <label htmlFor="macedonia">
              <input
                type="checkbox"
                id="macedonia"
                name="macedonia"
                checked={selectedCountry.includes("Macedonia")}
                onChange={() => handleFilterByCountry("Macedonia")}
              />
              <span className={styles.labelText}>Македонија</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label htmlFor="greece">
              <input
                type="checkbox"
                id="greece"
                name="greece"
                checked={selectedCountry.includes("Greece")}
                onChange={() => handleFilterByCountry("Greece")}
              />
              <span className={styles.labelText}>Грција</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label htmlFor="egzotic">
              <input
                type="checkbox"
                id="egzotic"
                name="egzotic"
                checked={selectedCountry.includes("Egzotic")}
                onChange={() => handleFilterByCountry("Egzotic")}
              />
              <span className={styles.labelText}>Егзотични дестинации</span>
            </label>
            <div />
          </div>

          <h5 className={`${styles.type}`}>Цена</h5>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 0 && selectedPriceRange.max === 200
                }
                onChange={() => handleFilterByPriceRange(0, 200)}
              />
              <span className={styles.labelText}>0-200 EUR</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 200 &&
                  selectedPriceRange.max === 400
                }
                onChange={() => handleFilterByPriceRange(200, 400)}
              />
              <span className={styles.labelText}>200-400 EUR</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 400 &&
                  selectedPriceRange.max === 600
                }
                onChange={() => handleFilterByPriceRange(400, 600)}
              />
              <span className={styles.labelText}>400-600 EUR</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 600 &&
                  selectedPriceRange.max === 800
                }
                onChange={() => handleFilterByPriceRange(600, 800)}
              />
              <span className={styles.labelText}>600-800 EUR</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 800 &&
                  selectedPriceRange.max === 1000
                }
                onChange={() => handleFilterByPriceRange(800, 1000)}
              />
              <span className={styles.labelText}>800-1000 EUR</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={
                  selectedPriceRange.min === 1000 &&
                  selectedPriceRange.max === Infinity
                }
                onChange={() => handleFilterByPriceRange(1000, Infinity)}
              />
              <span className={styles.labelText}>Над 1000 EUR</span>
            </label>
          </div>
        </div>

        <h5 className={`pl-3 ${styles.type}`}>Тип на сместување</h5>
        <div className={`${styles.formGroup}  pl-3`}>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={selectedArrangementType.includes("Hotel")}
                onChange={() => handleFilterByArrType("Hotel")}
              />
              <span className={styles.labelText}>Хотел</span>
            </label>
          </div>
          <div className={styles.filterContent}>
            <label>
              <input
                type="checkbox"
                checked={selectedArrangementType.includes("Apartment")}
                onChange={() => handleFilterByArrType("Apartment")}
              />
              <span className={styles.labelText}>Апартман</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
