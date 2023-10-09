import React, { useEffect, useState } from "react";
import { ProductType } from "../Types/Types";
import axios from "axios";
import { BikeCard } from "./BikeCard";

interface Props {
  genderFilter: string;
  brandFilter: string;
}

export const BikeCardCont = ({ genderFilter, brandFilter }: Props) => {
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("https://challenges.brainster.tech/ajax_data/data.json")
      .then((response) => {
        console.log(response);
        setProductsData(response.data.products);
      });
  }, []);

  const filteredData = productsData?.filter((product) => {
    if (
      genderFilter &&
      genderFilter.toUpperCase() !== product.gender.toUpperCase()
    ) {
      return false;
    }
    if (
      brandFilter &&
      brandFilter.toUpperCase() !== product.brand.toUpperCase()
    ) {
      return false;
    }

    return true;
  });
  const showAll = genderFilter === "" && brandFilter === "";
  const dataToRender = showAll ? productsData : filteredData;

  return (
    <div className="container bikeCont">
      <div className="row">
        {dataToRender?.map((product, idx) => {
          return <BikeCard key={`product -${idx}`} {...product} />;
        })}
      </div>
    </div>
  );
};
