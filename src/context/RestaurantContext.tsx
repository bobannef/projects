import React, { ReactNode, createContext, useEffect, useState } from "react";
import { RestaurantType, ReviewType } from "../interfaces/Types";

export interface RestaurantContext {
  restaurants: RestaurantType[];
  handleReview: (id: string, newReview: ReviewType) => void;
  calculateAverageRating: (reviewList: ReviewType[]) => number | string;
  handleFilter: (query: string) => void;
  filtered: RestaurantType[];
  handleFavRestaurant: (id: string) => void;
  favRestaurants: RestaurantType[];
}

export const RestaurantContext = createContext<RestaurantContext>({
  restaurants: [],
  handleReview: () => {},
  calculateAverageRating: () => 0,
  handleFilter: () => {},
  filtered: [],
  handleFavRestaurant: () => {},
  favRestaurants: [],
});

type Props = {
  children: ReactNode;
};

export const RestaurantContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<RestaurantType[]>([]);
  const [filtered, setFiltered] = useState<RestaurantType[]>([]);
  const [favRestaurants, setFavRestaurants] = useState<RestaurantType[]>(() => {
    const storedRes = localStorage.getItem("favRestaurants");
    return storedRes ? JSON.parse(storedRes) : [];
  });

  useEffect(() => {
    fetch(`http://localhost:5001/restaurants`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const handleReview = async (id: string, newReview: ReviewType) => {
    try {
      const updatedData = data.map((restaurant) => {
        if (restaurant.id === id) {
          const updatedReviewsList = [
            ...restaurant.reviewsList,
            {
              id: Date.now(),
              author: newReview.author,
              comment: newReview.comment,
              stars: newReview.stars,
            },
          ];

          const updatedReviews = updatedReviewsList.length;
          const averageRating = calculateAverageRating(updatedReviewsList);

          return {
            ...restaurant,
            reviews: updatedReviews,
            reviewsList: updatedReviewsList,
            rating: averageRating,
          };
        }
        return restaurant;
      });

      const updatedRestaurant = updatedData.find(
        (restaurant) => restaurant.id === id
      );

      setData(updatedData);

      if (updatedRestaurant) {
        await fetch(`http://localhost:5001/restaurants/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRestaurant),
        });
      }
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  const calculateAverageRating = (
    reviewList: ReviewType[]
  ): number | string => {
    const totalStars = reviewList.reduce(
      (acc, review) => acc + review.stars,
      0
    );
    const averageRating = totalStars / reviewList.length;
    return parseInt(averageRating.toFixed(1));
  };

  const handleFilter = (query: string) => {
    const filteredByType = data.filter((rest) => rest.restauranttype === query);
    setFiltered(filteredByType);
  };

  const handleFavRestaurant = (id: string) => {
    const newRestaurant = data.find((rest) => rest.id === id);
    if (newRestaurant) {
      const favRest = favRestaurants.some((rest) => rest.id === id);

      if (favRest) {
        setFavRestaurants((prevState) =>
          prevState.filter((rest) => rest.id !== id)
        );
      } else {
        setFavRestaurants((prevState) => [...prevState, newRestaurant]);
      }
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: data,
        handleReview,
        calculateAverageRating,
        handleFilter,
        filtered,
        handleFavRestaurant,
        favRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
