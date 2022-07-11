import { Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.scss"
const bgImage = require("../../assets/popcorn.png")
export const Error = () => {
  return (
    <>
    <section className="error404">
        
    
        {/* <div className="error" style={{'backgroundImage':bgImage}}>
            <Typography.Title  className="error" level="2">Algun ingrediente salio mal</Typography.Title>
        </div> */}
        <button><NavLink className="button" to="/">Inicio</NavLink></button>
    </section>
    </>
  )
}
