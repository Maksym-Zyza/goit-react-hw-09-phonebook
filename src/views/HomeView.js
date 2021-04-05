import React from "react";
import homePageImg from "../img/home.jpg";

const HomeView = () => (
  <div className="wrapper">
    <h1 className="home-view-title">Phonebook</h1>
    <h2 className="home-view-subtitle">
      Your contacts in one place{" "}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h2>
    <img className="home-view-img" src={homePageImg} alt="home_view_img" />
  </div>
);

export default HomeView;
