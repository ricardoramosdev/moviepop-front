import React, { useEffect, useState } from "react";
import { Header } from "../../shared/Header/Header";
import { MovieList } from "../MovieList/MovieList";
import "./Catalog.scss";
export const Catalog = () => {
  const [search, setSearch] = useState("");

  let handleChange = (e) => {
    setSearch(e.target.value);

    filterMovie(e.target.value);
  };

  const [movieList, setMovieList] = useState([]);
  let movieDB = JSON.parse(localStorage.getItem("movieDB")) || [];
  //Tomo el objeto de la API
  let getMovies = /*async*/ () => {
    // try{
    // let response = await axios.get(`${URL}`)
    // let movieDB = response.data

    setMovieList(movieDB);
    console.log(movieDB);
    // }catch(error){
    //   console.log('Error al comunicarse con la API'+ error)
    // }
  };
  
  //Filtro el objeto segun parametros de busqueda

  let filterMovie = (movie) => {
    if (movie) {
      let filteredMovie = movieDB;
      filteredMovie = movieDB.filter((el) =>
        el.show.name.toLowerCase().toString().includes(movie)
      );
      setMovieList(filteredMovie);
      console.log(filteredMovie);
    } else {
      let filteredMovie = movieDB;
      setMovieList(filteredMovie);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="search-container">
        <input
          className="searchBar"
          type="text"
          placeholder="Buscar"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <h2>Películas</h2>
      <MovieList search={search} movieList={movieList} />
    </>
  );
};
