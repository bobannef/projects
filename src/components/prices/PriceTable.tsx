import React, { useContext } from "react";
import { ArrangementsContext } from "../../context/ArrangementsContext";
import styles from "./prices.module.css";

export const PriceTable = () => {
  const { prices } = useContext(ArrangementsContext);

  return (
    <div>
      <h3 className="pt-5">Цени</h3>
      <table
        className={`table table-bordered table-hover table-striped ${styles.pricesTable}`}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Nights</th>
            <th>SingleRoom</th>
            <th>DoubleRoom</th>
            <th>StandardApartment</th>
            <th>LuxuryApartment</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price) => {
            return (
              <tr key={price.id}>
                <td>{price.date}</td>
                <td>{price.nights}</td>
                <td>{price.singleRoom}</td>
                <td>{price.doubleRoom}</td>
                <td>{price.standardApartment}</td>
                <td>{price.luxuryApartment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
