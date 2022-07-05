import React from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
  return (
    <>
    <div className='nav'>

    <a href=""><FontAwesomeIcon icon={faHome} /></a>
    <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>

    </div>
    
    </>
  )
}
