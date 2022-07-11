<<<<<<< HEAD
import React from 'react'

export const Home = () => {
  return (
    <div>Home</div>
  )
}
=======
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
>>>>>>> dce7901894ee9eb1a159ef77e80603362c128fd3
