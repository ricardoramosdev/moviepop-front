import React from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeartbeat, faHome, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom"
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
  return (
    <>
    <div className='nav'>
    
        <NavLink exact="true" to="/"><FontAwesomeIcon icon={faHome} /></NavLink>
        
        <NavLink to="/catalog"><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
        <NavLink to="/favorites"><FontAwesomeIcon icon={faHeart} /></NavLink>
    
    

    </div>
    
    </>
  )
}
