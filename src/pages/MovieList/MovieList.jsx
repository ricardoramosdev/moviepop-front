import { Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import "./MovieList.scss"

export const MovieList = ({ results}) => {
  
  return (
    <>
      <Row className='card-container' gutter={8} >
        {results.map(movie=>(
          <Col className="movie-card"span={12} key={movie.show.id}>
          <img className='movie-img' src={movie.show.image.medium} alt={movie.show.name} loading="lazy"/>
          <h3 className='movie-description'>{movie.show.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  )
}
