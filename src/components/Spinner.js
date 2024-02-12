import React, { Component } from 'react'
import loading from './spinner.gif'

const HourGlass = () => {

  return (
    <div className='text-center'>
      <img src={loading} alt="Loading..." />
    </div>
  )
}

export default HourGlass
