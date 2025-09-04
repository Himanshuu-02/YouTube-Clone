import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
 
  return (
    <div className='flex m-4'>
       <SideBar/>
       <Outlet/>
    </div>
  )
}

export default Body