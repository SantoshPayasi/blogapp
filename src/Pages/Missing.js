import React from 'react'
import '../input.css'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className='w[100%] h-screen text-center'>
         <h2 className=' font-bold text-xl text-center'>Page not Found</h2>
          <p className='postdateTime text-sm leading-10'>Well that's disappointing</p>
          <p className='postBody leading-4 font-medium text-blue-400 font-sans '><Link to='/'>Visit to the home page</Link></p>
    </div>
  )
}

export default Missing