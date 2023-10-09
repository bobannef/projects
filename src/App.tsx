import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AllRestaurants } from "./components/AllRestaurants";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import { RestaurantDetail } from "./components/RestaurantDetail";
import { Cuisines } from "./components/Cuisines";
import { CuisineDetail } from "./components/CuisineDetail";
import { Favorites } from "./components/Favorites";
import { SurpriseRestaurant } from "./components/SurpriseRestaurant";
import { PopularRestaurants } from "./components/PopularRestaurants ";


const App = () => {



  return <div className="App">
           
          <BrowserRouter>
             <RestaurantContextProvider>
               <Navbar/>
              <Routes>

                <Route path="/" 
                
                element = 
                
                {
                  <>
                 <SurpriseRestaurant/>
                 <PopularRestaurants/>
                 <Cuisines/>
                 <AllRestaurants/>
               
                 </>

                }
                />
                 <Route path="/details/:id" element={<RestaurantDetail/>}/>
                 <Route path="/detail/:type" element={<CuisineDetail/>}/>
                 <Route path="/favorites" element={<Favorites/>}/>


                </Routes>
              <Footer/>

            </RestaurantContextProvider>
          </BrowserRouter>


          </div>;
};

export default App;
