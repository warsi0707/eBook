import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState([])
  const getData =async()=>{
    const response = await fetch("http://localhost:3000/api/user/books")
    const result = await response.json()
    setData(result.allBook)
    console.log(result.allBook)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    {data.map((book) =>(
      <div key={book._id} className="main m-10 mx-auto sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className='bg-green-600   w-[300px] mx-auto   my-8 rounded-xl text-white p-8 space-y-4'>
          <div className='text-center text-2xl h-14 w-full '> <h1>Title : {book.bookTitle}</h1></div>
          <div className='text-3xl'>By: {book.author}</div>
          <div className=' gap-2 text-start text-xl mt-10'>
            <h1>Genre: {book.genre}</h1>
            <h1>Year: {book.yop}</h1>
          </div>
          <div className='flex justify-evenly gap-5 text-2xl text-gray-600 '>
            <a href="/edit/"className='hover:text-black'><FaEdit/></a>
            <a href="#"className='hover:text-black'><FaTrash/></a>
          </div>
        </div>
      </div>
       ))}
    </>
  )
}
