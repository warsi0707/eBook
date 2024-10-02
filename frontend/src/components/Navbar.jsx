import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-gray-600 p-5 w-full text-white flex justify-evenly text-2xl">
        <div className='logo'><a href="/" className='hover:text-red-500'>Ebook</a></div>
        <div className='flex gap-3'>
            <a href="/add" className='hover:text-red-500'>Add</a>
            <a href="/signup" className='hover:text-red-500'>Signup</a>
            <a href="/signin" className='hover:text-red-500'>Login</a>
        </div>

    </div>
    </>
  )
}
