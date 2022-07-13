import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth";
import { Header } from "../../shared/Header/Header";
import { MovieList } from "../MovieList/MovieList";
import "./Favorites.scss";
export const Favorites = () => {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  let auth = useAuth();

  //Tomo el objeto de la API y pinto
  let getFavoritesMovies = () => {
    let favMovies = JSON.parse(localStorage.getItem('currentUser')).favoriteMovie
    setMovieList(favMovies);
    }
  
  
 
  // funcion de busqueda

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
   //Filtro el objeto segun parametros de busqueda
   const results = !search ? movieList : movieList.filter((el) =>
   el.name.toLowerCase().includes(search.toLowerCase()));

   
  useEffect(() => {
    getFavoritesMovies();
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
      <h2>Películas Favoritas</h2>
      
      <MovieList results={results} />
    </>
  );
};
