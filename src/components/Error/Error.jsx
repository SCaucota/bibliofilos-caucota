import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './error.css'
import { SearchContext } from '../../context/SearchContext'

const Error = () => {

  const {handleEmptySearch} = useContext(SearchContext)

  return (
    <div className='errorContainer'>
      <div>
        <h1>Error 404</h1>
        <h3>Lo sentimos. Sitio no encontrado</h3>
        <Link onClick={handleEmptySearch} className='btn btnError' to='/'>Volver al Inicio</Link>
      </div>
    </div>
  )
}

export default Error