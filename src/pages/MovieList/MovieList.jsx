import axios from 'axios'
import React, { useState } from 'react'

const URL = process.env.API_URL;
export const MovieList = () => {
  const [movieList, setMovieList]= useState([])
  let getMovies = async ()=>{
    try{
      let response = await axios.get(`${URL}`)
      let movieDB = response.data
      setMovieList(movieDB)
      console.log(movieDB)
    }catch(error){
      console.log('Error al comunicarse con la API'+ error)
    }
  }
  getMovies();
  return (
    <>
      <div className="row">
        {movieList.map(movie=>(
          <div className="movieCard" key={movie.id}>
          <img src={movie.img} alt={movie.name} />
          <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}
