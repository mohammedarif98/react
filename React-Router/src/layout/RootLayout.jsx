import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {

  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center h-[90vh]'>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout