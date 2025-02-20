import React from 'react'
import { CircularProgress } from '@mui/material';
import './spinner.css'

const Spinner = () => {
  return (
    <div className='spinner'>
        <CircularProgress sx={{color: '#881C3C'}} size={40}/>
    </div>
  )
}

export default Spinner