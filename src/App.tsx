import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Moments } from "./components/moments/Moments";
import { NewsletterForm } from "./components/newsletter/NewsletterForm";
import { CurrentOffers } from "./components/currentOffers/CurrentOffers";
import { Testimonial } from "./components/testimonials/Testimonial";
import { GroupTrips } from "./components/groupTrips/GroupTrips";
import { GroupTripsDetails } from "./components/groupTripsDetails/GroupTripsDetails";
import { ContactForm } from "./components/contactForm/ContactForm";
import { AvioCards } from "./components/avioCards/AvioCards";
import { ArrangementsContextProvider } from "./context/ArrangementsContext";
import { ArrangementDetails } from "./components/ArrangamentDetails/ArrangementDetails";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Generals } from "./components/generals/Generals";
import { TravelInsurance } from "./components/traveling/TravelInsurance";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ArrangementsContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header image="/images/banner-img.png" />
                  <CurrentOffers />
                  <GroupTrips />
                  <Testimonial />
                  <Moments />
                  <NewsletterForm />
                </>
              }
            />

            <Route
              path="/details/:id"
              element={
                <>
                  <Header image="/images/banner-img4.png" />
                  <ArrangementDetails />
                  <NewsletterForm />
                </>
              }
            />

            <Route
              path="/greece"
              element={
                <>
                  <Header image="/images/banner-img4.png" />
                  <CurrentOffers />
                  <NewsletterForm />
                </>
              }
            />

            <Route
              path="/macedonia"
              element={
                <>
                  <Header image="/images/banner-img7.png" />
                  <CurrentOffers />
                  <NewsletterForm />
                </>
              }
            />

            <Route
              path="/egzotic"
              element={
                <>
                  <Header image="/images/banner-img6.png" />
                  <CurrentOffers />
                  <NewsletterForm />
                </>
              }
            />

            <Route
              path="/grupni-patuvanja"
              element={
                <>
                  <Header image="/images/banner-img2.png" />
                  <GroupTripsDetails />
                  <ContactForm />
                </>
              }
            />

            <Route
              path="/avio-karti"
              element={
                <>
                  <Header image="/images/banner-img3.png" />
                  <AvioCards />
                  <NewsletterForm />
                </>
              }
            />
            <Route
              path="/za-nas"
              element={
                <>
                  <Header image="/images/banner-img5.png" />
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/opsti-uslovi"
              element={
                <>
                  <Header image="/images/banner-img5.png" />
                  <Generals />
                </>
              }
            />

            <Route
              path="/patnicko-osiguruvanje"
              element={
                <>
                  <Header image="/images/banner-img5.png" />
                  <TravelInsurance />
                </>
              }
            />
          </Routes>

          <Footer />
        </ArrangementsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
