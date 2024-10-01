import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-gray-600 p-5 w-full text-white flex justify-evenly text-2xl">
        <div className='logo'><a href="/">Ebook</a></div>
        <div>
            <a href="/add">Add</a>
        </div>

    </div>
    </>
  )
}
