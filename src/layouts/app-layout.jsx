import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
        AppLayout
        <Outlet/>
    </div>
  )
};

export default AppLayout