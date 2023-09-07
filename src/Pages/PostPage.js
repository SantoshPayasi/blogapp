import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {BsFillTrashFill} from 'react-icons/bs'
import  DataProvider from '../context/DataContext';
const PostPage = () => {
  // window.location.pathname = '/post/2'
  const {posts, handleDelete} = useContext(DataProvider)
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString()===id)
  const navigate = useNavigate()


  return (
    <div>
      <article className='px-2'>
        {post && 
        <>
          <h2 className=' font-bold text-xl text-center'>{post.title}</h2>
          <p className='postdateTime text-sm leading-10'>{post.dateTime}</p>
          <p className='postBody w-[75%] leading-5 font-medium font-sans '>{post.body}</p>
          <div className='w-24 py-2 hover:bg-red-500 transition-all duration-700 ease-out bg-red-600 flex justify-center items-center rounded-md mt-3'> <BsFillTrashFill className="text-2xl text-white" onClick={()=>{handleDelete(post.id)}}/></div>
          <div className='w-24 py-2 hover:bg-green-500 transition-all duration-700 ease-out bg-green-600 flex justify-center items-center rounded-md mt-3'> <button className="text-medium text-white" onClick={()=>{navigate(`/UpdatePost/${id}`)}}>Edit Now</button></div>
        </>
        }

        {
          !post && 
          <>
          <h2 className=' font-bold text-xl text-center'>Page not Found</h2>
          <p className='postdateTime text-sm leading-10'>Well that's disappointing</p>
          <p className='postBody w-[75%] leading-4 font-medium font-sans '><Link to='/'>Visit to the home page</Link></p>
          </>
        }
      </article>
    </div>
  )
}

export default PostPage