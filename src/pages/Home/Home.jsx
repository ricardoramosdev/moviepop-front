import React from "react";
import popcorn from "../../assets/popcorn.svg";
import { Header } from "../../shared/Header/Header";
import "./Home.scss"

export const Home = () => {
  return (
    <>
    <Header/>

      <div className="align">
      <img src={popcorn} alt="popcorn" />
        <h1>MoviePop!</h1>

      </div>
     
    </>
  );
};
