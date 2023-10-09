import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { SearchBar } from "../search/SearchBar";

interface Props {
  image: string;
}
export const Header = ({ image }: Props) => {
  const headerStyle = {
    height: "60vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src="/images/logo-img.png"
          className={styles.logoImg}
          alt="logo-img"
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`${styles.navList} navbar-nav m-auto`}>
            <li className="nav-item">
              <Link to="/" className={styles.navLink}>
                Дома
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className={`${styles.navLink} dropdown-toggle`}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Дестинации
                <img
                  src="/images/fa-chevron-down.png"
                  alt="chevron-down arrow"
                />
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/greece" className="dropdown-item">
                  -Грција
                </Link>
                <Link to="/turcija" className="dropdown-item">
                  -Турција
                </Link>
                <Link to="/albanija" className="dropdown-item">
                  -Албанија
                </Link>
                <Link to="/hrvatska" className="dropdown-item">
                  -Хрватска
                </Link>
                <Link to="/crna-gora" className="dropdown-item">
                  -Црна гора
                </Link>
                <Link to="/italija" className="dropdown-item">
                  -Италија
                </Link>
                <Link to="/shpanija" className="dropdown-item">
                  -Шпанија
                </Link>
                <Link to="/egzotic" className="dropdown-item">
                  -Егзотични дестинации
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/grupni-patuvanja" className={styles.navLink}>
                Групни патувања
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/avio-karti" className={styles.navLink}>
                Авио карти
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/macedonia" className={styles.navLink}>
                Истражи ја Македонија
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/za-nas" className={styles.navLink}>
                За нас
              </Link>
            </li>
            <li className={`${styles.phone} nav-item`}>
              <img src="/images/telephone1.png" alt="telephone-icon" />
              02/3100-360
            </li>
          </ul>
        </div>
      </nav>
      <header className={styles.fullScreenHeader} style={headerStyle}>
        <div className={styles.searchBar}>
          <div className={styles.searchFrameContainer}>
            <img
              src="/images/searchbar-frame.png"
              className={styles.searchFrame}
              alt="searchbar-frame"
            />
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
};
