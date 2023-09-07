import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post bg-sky-200 my-1 mx-1 px-2 rounded-md'>
        <Link to={`/post/${post.id}`}>
            <h1 className='font-semibold font-sans text-xl'>{post.title}</h1>
            <p className='postdateTime text-sm font-mono font-normal'>{post.dateTime}</p>
            <p className='postBody mt-5'>{
                (post.body).length<=25 
                ?post.body
                :`${(post.body).slice(0, 25)}...`
            }</p>
        </Link>
    </article>
  )
}

export default Post