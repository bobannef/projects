import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

export const SurpriseRestaurant = () => {
  const { restaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    navigate(`/details/${randomRestaurant.id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">don't know what to eat?</h1>
          <button onClick={handleSurprise} className="btn btn-success w-100">
            Surprise me!
          </button>
        </div>
      </div>
    </div>
  );
};
