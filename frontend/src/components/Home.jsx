import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function Home() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState()

  const getData =async()=>{
    const response = await fetch("https://ebook-dgdk.onrender.com/api/user/books")
    const result = await response.json()
    setData(result.allBook)
    // console.log(result.allBook)
  }
  const deleteBook =async(id)=>{
    const response = await fetch(`https://ebook-dgdk.onrender.com/api/user/delete/${id}`,{
      method: "DELETE"
    })
    // const result = await response.json()
    // console.log(result)
    if(response.ok){
      setMessage("deleted successfully") 
    }
    setTimeout(() => {
      setMessage("")
      getData()
    },2000);
  }

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
    {/* <div className="navbar bg-gray-600 p-5 w-full text-white flex justify-evenly text-2xl">
        <div className='logo'><a href="/" className='hover:text-red-500'>Ebook</a></div>
        <div className='flex gap-3'>
          {isAuthencticated? 
          <div className='flex gap-3'>
              <a href="#" className='hover:text-red-500'>Logout</a>
              <a href="/add" className='hover:text-red-500'>Add</a>
            </div> :
            <div className='flex gap-3'>
              <a href="/signup" className='hover:text-red-500'>Signup</a>
              <a href="/signin" className='hover:text-red-500'>Login</a>
            </div>
            
            }  
        </div>

    </div> */}
    {/* md:grid sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid lg:grid-cols-3  */}
    <h1 className='m-5 '>{message && <div className='bg-green-500 p-3 w-96 text-center mx-auto mt-5 rounded-md text-gray-100 text-xl'>
      {message}
    </div>}</h1>
   
      <div  className="main m-10 mx-auto md:grid sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid lg:grid-cols-3 ">
      {data.map((book) =>(
        <div key={book._id} className='bg-green-600   w-[300px] mx-auto   my-8 rounded-xl text-white p-8 space-y-4'>
          <div className='text-center text-2xl h-14 w-full '> <h1>Title : {book.bookTitle}</h1></div>
          <div className='text-3xl'>By: {book.author}</div>
          <div className=' gap-2 text-start text-xl mt-10'>
            <h1>Genre: {book.genre}</h1>
            <h1>Year: {book.yop}</h1>
          </div>
          <div className='flex justify-evenly gap-5 text-2xl text-gray-600 '>
            <NavLink to={`/edit/${book._id}`} className='hover:text-black'><FaEdit/></NavLink>
            {/* <a href="/edit/"></a> */}
            <button onClick={()=> deleteBook(book._id)} className='hover:text-black'><FaTrash/></button>
          </div>
        </div>
           ))}
      </div>
    
    </>
  )
}
