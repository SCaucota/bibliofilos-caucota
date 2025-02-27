import { CardActions } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = ({btnText, action, route, disabled, btnError}) => {
  return (
    <CardActions>
      {
        route ?
          <Link className='btn' to={route}>{btnText}</Link>
        : <button 
            disabled={disabled} 
            className={`btn ${btnError ? btnError : ''}`} 
            onClick={action}
          >
            {btnText}
          </button>
      }
    </CardActions>
  )
}

export default Button