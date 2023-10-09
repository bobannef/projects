import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Filters } from "./components/Filters";
import { BikeCardCont } from "./components/BikeCardCont";
import { Footer } from "./components/Footer";

function App() {
  const [selectedGenderFilter, setSelectedGenderFilter] = useState("");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState("");

  const handleGenderFilter = (gender: string) => {
    setSelectedGenderFilter(gender.toUpperCase());
    setSelectedBrandFilter("");
  };

  const handleBrandFilter = (brand: string) => {
    setSelectedBrandFilter(brand.toUpperCase());
    setSelectedGenderFilter("");
  };

  const handleShowAll = () => {
    setSelectedGenderFilter("");
    setSelectedBrandFilter("");
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Filters
            onGenderFilter={handleGenderFilter}
            onBrandFilter={handleBrandFilter}
            onShowAll={handleShowAll}
          />
        </div>
        <div className="col-10">
          <BikeCardCont
            genderFilter={selectedGenderFilter}
            brandFilter={selectedBrandFilter}
          />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
