import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { Link } from "react-router-dom";

export const Cuisines = () => {
  const { restaurants, handleFilter } = useContext(RestaurantContext);

  const restaurantTypes = [
    "canteen",
    "bukka",
    "eatery",
    "seafood",
    "pizza",
    "vegan",
    "pasta",
    "american",
    "japanese",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">cuisines</h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {restaurantTypes.map((type, idx) => {
          return (
            <Link key={idx} to={`/detail/${type}`}>
              <button
                className="btn btn-danger mr-3"
                onClick={() => handleFilter(type)}
              >
                {type}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
