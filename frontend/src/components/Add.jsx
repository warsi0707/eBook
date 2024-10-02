import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Add() {
  const [bookTitle, setbookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [yop, setYop] = useState("")
  const navigate = useNavigate()

  const handleAdd = async(e)=>{
    e.preventDefault()
    const addBook = {bookTitle, author, genre, yop}
    const respone = await fetch("http://localhost:3000/api/user/create",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(addBook)
    })
    const result = await respone.json()
    console.log(result)
    navigate("/")
  }



  return (
    <>
       <div className='text-2xl text-center my-5'>
    <h1>Add Your Book</h1>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
    <form className="space-y-6" onSubmit={handleAdd}>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Book Title</label>
        <div className="mt-2">
            <input type="text" name="bookTitle" value={bookTitle} onChange={(e)=> setbookTitle(e.target.value)}   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Author</label>
        <div className="mt-2">
            <input type="text" id="text" name="author"  value={author} onChange={(e)=> setAuthor(e.target.value)}   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Genre</label>
        <div className="mt-2">
            <input type="text"  name="genre"  value={genre} onChange={(e)=> setGenre(e.target.value)}   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Year Of Publish</label>
        <div className="mt-2">
            <input type="text" name="yop" value={yop} onChange={(e)=> setYop(e.target.value)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
      </div>

    </form>

  </div>
    </>
  )
}
