// import React, { Component } from 'react'
import Loading from './Loading.gif'

const Spinner=()=>{
    return (
      <div className='text-center'>
      <img src={Loading} alt="loading..." height="50px"/>
      </div>
    )
  }

export default Spinner
