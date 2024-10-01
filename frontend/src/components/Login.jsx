import React from 'react'

export default function Login() {
  return (
    <>
     <div className='text-2xl text-center my-5'>
    <h1>Log in</h1>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
            <input type="text" id="email" name="email"   required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
            <input type="text" id="password" name="password"   required className="block w-full rounded-md border-0 text-xl p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>

      
     

    </form>

  </div>
    </>
  )
}
