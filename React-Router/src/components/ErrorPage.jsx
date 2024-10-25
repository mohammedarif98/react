import React from 'react'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {

  const navigate = useNavigate() 

  return (
    <div>
       <h1 className='text-red-800 text-3xl font-semibold'>404 Error | Page Not Found</h1>
       <div className='p-2 my-5 flex justify-center bg-black text-slate-50'>
          <button onClick={()=>navigate('/')}> Back To Home </button>
       </div>
      </div>
  )
}

export default ErrorPage