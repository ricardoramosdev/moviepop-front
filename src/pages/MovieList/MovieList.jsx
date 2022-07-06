import axios from 'axios'
import React, { useEffect, useState } from 'react'

const URL = process.env.API_URL;
export const MovieList = ({search,movieList}) => {
  
  return (
    <>
      <div className="row" >
        {movieList.map(movie=>(
          <div className="movieCard" key={movie.show.id}>
          <img src={movie.show.image.medium} alt={movie.show.name} loading="lazy"/>
          <p>{movie.show.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
