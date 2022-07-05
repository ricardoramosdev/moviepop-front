import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
  return (
    <>
    <FontAwesomeIcon icon={faHome} />
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    
    </>
  )
}
