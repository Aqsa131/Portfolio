import React from 'react'
import NavBar from './Components/Nav'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
    
  )
}

export default LayOut