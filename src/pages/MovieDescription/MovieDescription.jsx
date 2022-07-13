import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Modal } from "antd";
import { modalGlobalConfig } from "antd/lib/modal/confirm";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import "../../shared/Header/Header.scss";
import { Comments } from "../Comment/Comments";
import "./MovieDescription.scss";
const URL = "https://api.tvmaze.com/shows";
const dbURL = process.env.REACT_APP_API_URL
const json = require("../../database.json");

export const MovieDescription = () => {
  let navigate = useNavigate()

  let auth =useAuth()
  let { movieID } = useParams();
  const [movie, setMovie] = useState({});
  const[image, setImage]=useState({})
  const[rating, setRating]=useState(0)
 
  const displayMovie = async () => {
    try {
      const response = await axios.get(`${URL}/${movieID}`);
      
      setMovie(response.data)
      setImage(response.data.image)
      setRating(+response.data.rating.average)

    } catch(error) {
      const display = json.filter(el => el.show.id == movieID);
      let displayshow = {...display}
      setMovie(...display);
      console.log("error al conectarse", error);
    }
  };


  //Favoritos
  let favoritesMovies = auth.user?.favoriteMovie
  const [favorite, setFavorite] = useState(true)
  const [favoritesList, setFavoriteList] = useState([])
    //compruevo si existe en la base de datos
  let isOnDB = ()=>{
    let onDB = favoritesMovies?.map(el=>el.id).find(id=>id==movieID)?true:false
  setFavorite(onDB)}
  
  let user =JSON.parse(localStorage.getItem('currentUser'))
  
  //comprobar si esta en la lista de favoritos
  const refreshFavorite = ()=>{
  let isFavorite = user?.favoriteMovie.some(m=>m.id==(movieID))
  //setear el estado de favorito
  setFavorite(isFavorite)

}
//renderizado condicional del boton fav
  const toogleFavorite =  ()=>{
    
   
    //funcion toogle para cambiar estado
    handleFavoritesDB()
  }
  const handleFavoritesDB = async ()=>{
    setFavorite(!favorite)

    if(favorite){
      let updateUserFavorites = user.favoriteMovie.filter(el=>el.id!=movieID)
      let removeFavorite = await axios.put(`${dbURL}/user/${auth.user._id}`,(user,{favoriteMovie:updateUserFavorites}))
      localStorage.setItem("currentUser", JSON.stringify(removeFavorite.data))
    }else{
      try{
      let updateUserFavorites = [...user.favoriteMovie,{...movie}]
      let addFavorite = await axios.put(`${dbURL}/user/${auth.user._id}`, (user,{favoriteMovie:updateUserFavorites}));
      localStorage.setItem("currentUser", JSON.stringify(addFavorite.data))
      }catch(error){
        console.log(error)
      }
    }
  }
  const toLogin =()=>{
    Modal.info({
      title:"Login Required",
      content:"To add favorites please login",
      okText:"Ok",
      onOk:navigate("/login", { replace: false }),
      closable:true
      
   
  })}
  //eliminar o agregar favorito en base de datos
  useEffect(()=>{
    isOnDB();
  },[])
  useEffect(() => {
    displayMovie();
  },[]);
  useEffect(()=>{
    refreshFavorite();
  },[])
  return (
    <>
      <header className="nav">
       
        <NavLink to={-1} >
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
        <div className="star">
          {Array.from({ length: 5 }, (v, i) => (
          <span data-star-id={i + 1}  key={`star_${i + 1}`} >
          {rating/2 >= i + 1 ? '\u2605' : '\u2606'}
          </span>
         ))}
        </div>
          
        </div>
        <div className="movie-data">
          <h2>{movie.name}<a 
          className="favorite" 
          role={"button"} 
          onClick={auth.user?()=>toogleFavorite():()=>toLogin()} 
          
          >{favorite?<HeartFilled/>:<HeartOutlined/>}</a></h2>
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
