import React, { useEffect, useState } from "react";
import styles from "./avioCards.module.css";
import { Headings } from "../headings/Headings";

export const AvioCards = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureInput, setDepartureInput] = useState("");
  const [arrivalInput, setArrivalInput] = useState("");
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("");
  const [infants, setInfants] = useState("");
  const [classType, setClassType] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [avioData, setAvioData] = useState([]);
  console.log(avioData);

  const handleChange = (setFieldValue: any) => (event: any) => {
    setFieldValue(event.target.value);
  } 

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = {
      departureDate,
      arrivalDate,
      departureInput,
      arrivalInput,
      adults,
      kids,
      infants,
      classType,
    };

    fetch(`http://localhost:5002/avio-cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => setSuccessMessage("Data send successfully"))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5002/avio-cards`)
      .then((res) => res.json())
      .then((data) => setAvioData(data));
  }, []);

  return (
    <div className="container-fluid pt-5">
      <Headings text="Авионски карти" />
      <div className="container">
        <div className={styles.containerInner}>
          <h3 className={styles.title}>Пребарувај</h3>
          <div className={styles.inputs}>
            <input
              type="radio"
              name="ticketType"
              id="two-way-ticket"
              defaultChecked
            />
            <label htmlFor="two-way-ticket" className="pl-1">
              Повратен билет
            </label>
            <input
              type="radio"
              name="ticketType"
              id="оне-way-ticket"
              className="ml-4"
            />
            <label htmlFor="оне-way-ticket" className="pl-1">
              Еден правец
            </label>
          </div>
          <form>
            <div className="row pt-4">
              <div className="col">
                <label htmlFor="">Од</label>
                <input
                  type="date"
                  className="form-control"
                  value={departureDate}
                  onChange={handleChange(setDepartureDate)}
                />
              </div>
              <div className="col">
                <label htmlFor="">До</label>
                <input
                  type="date"
                  className="form-control"
                  value={arrivalDate}
                  onChange={handleChange(setArrivalDate)}
                />
              </div>
              <div className="col">
                <label htmlFor="">Датум на поаѓање</label>
                <input
                  type="date"
                  className="form-control"
                  value={departureInput}
                  onChange={handleChange(setDepartureInput)}
                />
              </div>
              <div className="col">
                <label htmlFor="">Датум на враќање</label>
                <input
                  type="date"
                  className="form-control"
                  value={arrivalInput}
                  onChange={handleChange(setArrivalInput)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <label htmlFor="">Возрасни</label>
                <select
                  className="custom-select"
                  value={adults}
                  onChange={handleChange(setAdults)}
                >
                  <option selected>1</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Деца</label>
                <select
                  className="custom-select"
                  value={kids}
                  onChange={handleChange(setKids)}
                >
                  <option selected>0</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Бебиња</label>
                <select
                  className="custom-select"
                  value={infants}
                  onChange={handleChange(setInfants)}
                >
                  <option selected>0</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Класа</label>
                <select
                  className="custom-select"
                  value={classType}
                  onChange={handleChange(setClassType)}
                >
                  <option selected>Економска</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </form>
          <div className={styles.btn}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.formButton}
            >
              Побарај понуда
            </button>
          </div>
          {successMessage && (
            <div className="alert alert-success mt-3">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};
