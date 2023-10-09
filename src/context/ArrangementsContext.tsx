import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ArrangementsType, PricesType } from "../data";

type FilterFunctionType = (
  selectedCountry: string[],
  selectedArrangementType: string[]
) => ArrangementsType[];

export interface ArrangementsContextType {
  data: ArrangementsType[];
  handleFilterArrangements: (query: any) => ArrangementsType[];
  prices: PricesType[];
  selectedArrangement: ArrangementsType | null;
  setSelectedArrangement: (arrangement: ArrangementsType | null) => void;
  selectedCountry: string[];
  selectedArrangementType: string[];
  setSelectedCountry: (selected: string[]) => void;
  selectedLocation: string;
  setSelectedLocation: (selected: string) => void;
  setSelectedArrangementType: (selected: string[]) => void;
  selectedPriceRange: { min: number; max: number };
  setSelectedPriceRange: (range: { min: number; max: number }) => void;
}

export const ArrangementsContext = createContext<ArrangementsContextType>({
  handleFilterArrangements: () => {
    return [];
  },
  data: [],
  prices: [],
  selectedArrangement: null,
  setSelectedArrangement: () => {},
  selectedCountry: [],
  selectedArrangementType: [],
  setSelectedCountry: () => {},
  setSelectedArrangementType: () => {},
  selectedPriceRange: { min: 0, max: 0 },
  setSelectedPriceRange: () => {},
  selectedLocation: "",
  setSelectedLocation: () => {},
});

interface Props {
  children: ReactNode;
}

export const ArrangementsContextProvider = ({ children }: Props) => {
  const [selectedArrangement, setSelectedArrangement] =
    useState<ArrangementsType | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedArrangementType, setSelectedArrangementType] = useState<
    string[]
  >([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const [data, setData] = useState<ArrangementsType[]>([]);
  const [prices, setPrices] = useState<PricesType[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const controller = new AbortController();

    fetch(`http://localhost:5002/arrangements`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          Promise.reject(res);
        }
      })
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const controller = new AbortController();

    fetch(`http://localhost:5002/prices`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          Promise.reject(res);
        }
      })
      .then((res) => {
        setPrices(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleFilterArrangements = (query: string) => {
    return data.filter((arrangement) => {
      for (const country of Object.values(arrangement.Location.Country)) {
        if (country.Region === query) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <ArrangementsContext.Provider
      value={{
        data,
        handleFilterArrangements,
        prices,
        selectedArrangement,
        setSelectedArrangement,
        selectedCountry,
        selectedArrangementType,
        setSelectedCountry,
        setSelectedArrangementType,
        selectedPriceRange,
        setSelectedPriceRange,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </ArrangementsContext.Provider>
  );
};
