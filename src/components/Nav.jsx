import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import { useNavigate } from 'react-router-dom'
import DataProvider from '../context/DataContext'
const Nav = () => {
  const {search, setSearch} = useContext(DataProvider)
  const Navigate = useNavigate()
  return (
    <nav className='w-[100%] py-2 pl-2  bg-black flex justify-around items-center flex-wrap gap-y-2'>
    <form className='searchForm flex w-[75%] sm:w-[100%] mr-2' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search" className=' absolute -top-10'>Search Posts</label>
      <input
       type="text"
        id="search"
        className=' h-10 pl-2 rounded-md flex-1 outline-none'
        placeholder='Search Posts'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onClick={()=>{
          if(window.location.pathname!='/'){
            Navigate('/')
          }
        }}
         />
    </form>
    <ul className='flex gap-x-2'>
      <li className='navMenu'><Link to="/">Home</Link></li>
      <li className='navMenu'><Link to="/post">Post</Link></li>
      <li className='navMenu'><Link to="/about">About</Link></li>
    </ul>
    </nav>
  )
}

export default Nav