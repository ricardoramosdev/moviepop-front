import React from 'react'
import { Header } from '../../shared/Header/Header'
import { MovieList } from '../MovieList/MovieList'
import "./Catalog.scss"
export const Catalog = () => {

    let handleChange = (e)=>{
      let search = e.target.value;
      console.log(search)

    }
  return (
    <>
        <Header/>
        <div className='search-container' ><input className='searchBar' type="text" placeholder="Buscar"onChange={(e)=>handleChange(e)}/></div>
        <h2>Películas</h2>
        <MovieList />
    </>
  )
}
