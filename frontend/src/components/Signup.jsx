import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setphone] = useState()
  // const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const adduser = {name, email, password, phone}
    const response = await fetch("http://localhost:3000/api/user/signup",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(adduser)

    })
    const result = await response.json()
    console.log(result)
    if(response.ok){
      // setSuccess("User sign up successfully")
      setName("")
      setEmail("")
      setPassword()
      setphone()
      navigate("/signin",{
        state: {message: `Hello ${name}  please log in `}
      })
    }
  }
  return (
    <>
    <div className='text-2xl text-center my-5'>
    <h1>Create account</h1>
    </div>
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
    <form className="space-y-6" onSubmit={handleSubmit}>
    {/* {success && <h1>{success}</h1>} */}
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="name"   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
            <input type="text" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
            <input type="text"  name="password" value={password} onChange={(e)=> setPassword(e.target.value)}      required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2">
            <input type="text" name="phone" value={phone}  onChange={(e)=> setphone(e.target.value)}     required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup</button>
      </div>

    </form>

  </div>
      
    </>
  )
}
