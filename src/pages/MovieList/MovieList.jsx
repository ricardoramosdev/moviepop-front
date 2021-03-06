import {  Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./MovieList.scss"


export const MovieList = ({ results}) => {
  
  return (
    <>
      <Row className='card-container' justify="start" gutter={8}>
        {results.map(movie=>(
          
          <Col className="movie-card"xs={12} sm={8} md={6} lg={4} key={movie.id}>
            <Link to={`/${movie.id}`} >
          <img className='movie-img' src={movie.image.medium} alt={movie.name} loading="lazy"/>
          <h3 className='movie-description'>{movie.name}</h3>
          
          </Link>
          </Col>
          
        ))}
      </Row>
    </>
  )
}
