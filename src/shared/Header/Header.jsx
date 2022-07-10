import React from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom"

export const Header = () => {
    // let params= useParams();
  return (
    <>
    <div className='nav'>
    
        <NavLink exact="true" to="/"><FontAwesomeIcon icon={faHome} /></NavLink>
        
        <NavLink to="/catalog"><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
    
    

    </div>
    
    </>
  )
}
