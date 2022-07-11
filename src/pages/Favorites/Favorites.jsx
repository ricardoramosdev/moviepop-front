import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../shared/Header/Header";
import { MovieList } from "../MovieList/MovieList";
import "./Favorites.scss";
const URL = process.env.REACT_APP_API_URL
export const Favorites = () => {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");


let movieDB =[]
 
  //Tomo el objeto de la API y pinto
  let getMovies = async () => {

    try{
    let response = await axios.get(`${URL}/favorites`)
    movieDB = response.data 
    setMovieList(movieDB);
    }catch(error){
      setMovieList(json)
      console.log('Error al comunicarse con la API'+ error)
    }
  };
  
 
  // funcion de busqueda

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
   //Filtro el objeto segun parametros de busqueda
   const results = !search ? movieList : movieList.filter((el) =>
   el.show.name.toLowerCase().includes(search.toLowerCase()));

   
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="search-container">
        <input
          value={search}
          className="searchBar"
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
        />
      </div>
      <h2>Películas</h2>
      
      <MovieList results={results} />
    </>
  );
};
