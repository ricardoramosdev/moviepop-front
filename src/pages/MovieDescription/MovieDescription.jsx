import { faHeart, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Comment, Tooltip } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../shared/Header/Header.scss";
import { Comments } from "../Comment/Comments";
import "./MovieDescription.scss";
// import {Star, StarRating} from "./Star"
const URL = "https://api.tvmaze.com/shows";
const json = require("../../database.json");

export const MovieDescription = () => {
  let { movieID } = useParams();
  const [movie, setMovie] = useState({});
  const[image, setImage]=useState({})
  const[rating, setRating]=useState(0)
  console.log(movieID);

  const displayMovie = async () => {
    try {
      const response = await axios.get(`${URL}/${movieID}`);
      // const display = response.data.filter((el) => el.show.id === movieID);
      // setMovie(...display);
      console.log(response.data)
      console.log(response.data)
      setMovie(response.data)
      setImage(response.data.image)

      setRating(+response.data.rating.average)

      // console.log(movie.show.name);
    } catch(error) {
      console.log(json)
      const display = json.filter(el => el.show.id == movieID);
      let displayshow = {...display}
      console.log(displayshow.show);
      console.log(...display);
      
      setMovie(...display);
      console.log(movie)
      console.log(image)
      console.log("error al conectarse", error);
    }
  };
  console.log(rating)
  useEffect(() => {
    displayMovie();
  },[]);

  return (
    <>
      <header className="nav">
        <NavLink to="/catalog">
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavLink>
      </header>
      <main>
        <div className="cover">
          <img
            src={image.original}
            alt={movie.name}
            className="cover-img"
          />
          {/* <img src={movie.image.medium} alt={movie.name} className="cover-img" /> */}
        <div className="star">
          {Array.from({ length: 5 }, (v, i) => (
          <span data-star-id={i + 1}  key={`star_${i + 1}`} >
          {rating/2 >= i + 1 ? '\u2605' : '\u2606'}
          </span>
         ))}
        </div>
          
        </div>
        <div className="movie-data">
          <h2>{movie.name}<a className="favorite" role={"button"}><FontAwesomeIcon icon={faHeart}/></a></h2>
          <ul className="movie-data-list">
            <li>Lenguaje: {movie.language}</li>
            <li>Género: {movie.genres}</li>
            <li>Fecha de estreno: {movie.premiered}</li>
          </ul>
        </div>
        <div className="movie-summary">
          <h2>Sinopsis</h2>
          <div dangerouslySetInnerHTML={{__html:movie.summary}}></div>
        </div>
        <Comments movieID={{...movie}}/>
      </main>
    </>
  );
};
