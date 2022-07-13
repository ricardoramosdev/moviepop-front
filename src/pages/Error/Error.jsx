import { Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.scss"
const bgImage = require("../../assets/popcorn.png")
export const Error = () => {
  return (
    <>
    <section className="error404">
        
    
     
        <button><NavLink className="button" to="/">Inicio</NavLink></button>
    </section>
    </>
  )
}
