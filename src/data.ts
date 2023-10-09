export interface Location {
  Country: {
    [Country: string]: {
      City?: string;
      Region?: string;
    };
  };
}
  
export interface Image {
  url: string;
  Thumbnail: {
    image1: {
      url: string;
    };
    image2: {
      url: string;
    };
    image3: {
      url: string;
    };
    image4: {
      url: string;
    };
  };
  Location: Location;
  Description: string;
}
  
  type State = "Free" | "Reserved" | "Busy";
  
  export interface PricesType {
    id: string
    date: string
    nights: string
    singleRoom: string
    doubleRoom:string
    standardApartment:string
    luxuryApartment: string
  }
  
  export interface ArrangementsType {
    id:string;
    Name: string;
    ApartmentDescription:string;
    Description: string;
    Distance:string;
    Location: Location;
    TransportationDescription: string;
    Gallery: Image[];
    Type: string;
    Prices: {
      id:number,
      Prices:number,
      LastMinutePrices:number
    } []
  
    AvailabilityDates: Date[];
    PriceForNights: number;
    State: State[];
    isPublished: boolean;
    IsLastMinute: boolean;
    Rating?: number;
    miscellanies?: string[];
  }
  
 