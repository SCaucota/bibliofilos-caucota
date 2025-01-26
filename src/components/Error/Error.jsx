import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <div className='errorContainer'>
      <div>
        <h1>Error 404</h1>
        <h3>Lo sentimos. Sitio no encontrado</h3>
        <Link className='btn btnError' to='/'>Volver al Inicio</Link>
      </div>
    </div>
  )
}

export default Error