import React from 'react'
import { Button } from './button'

const Header = () => {
  return (
    <div>
        <nav className='py-4 flex justify-between items-center'>
            <Link>
               <img src='/logo.png' className='h-20'/>           
            </Link>
            <Button variant="outline"></Button>
        </nav>
    </div>
  )
}

export default Header