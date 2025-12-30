import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
          <img src='/logo.png' className='h-20' />
        </Link>
        <Button variant="outline"></Button>
        {/* <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header> */}
      </nav>
    </div>
  )
}

export default Header