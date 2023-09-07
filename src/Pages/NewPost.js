import React, { useState, useContext } from 'react'
import api from '../api/posts'
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import  DataProvider from '../context/DataContext'
const NewPost = () => {
  const {posts, setPosts} = useContext(DataProvider)
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const navigate = useNavigate()

  const addTask=async (e)=>{
    e.preventDefault()
    const date = new Date()
    const dateTime = format(date, "MMMM dd, yyyy hh:mm:ss a")
    console.log(dateTime)
    const newBlog = {
      id: posts.length + 1,
      title: postTitle,
      dateTime: dateTime ,
      body: postBody
    }

    try {
      // localStorage.setItem('postDetails', JSON.stringify(newBlogList))  //When we are adding posts in localStorage
      const response = await api.post( '/postData',  newBlog )            //When we are adding posts in JSON server 
        const newBlogList = [...posts, response.data]
      setPosts(newBlogList)
      setPostBody("")
      setPostTitle("")
      navigate('/')
    } catch (error) {
      console.log(`Error is : ${error.message}`)
    }
   

  }
  return (
    <div className='bg-blue-300 flex justify-center items-center flex-1'>
       <form className='flex-1 flex flex-col justify-center' onSubmit={(e)=>{ addTask(e)}}>
          <section className='flex px-32 sm:px-2'>
            <label htmlFor="title" className="form-label absolute -left-52">BlogTitle</label>
            <input type="text" 
            name="title" 
            id="title" 
            value={postTitle}
            onChange={(e)=>{setPostTitle(e.target.value)}}
            className='flex-1 px-3 h-10 outline-none rounded-sm'
            aria-describedby="helpId" 
            placeholder="Bolgtitle"
            required/>
           </section>
           <section className='flex px-32  sm:px-2'>
            <label htmlFor="title" className="form-label absolute -left-52">Name</label>
            <input type="text" 
            name="body" 
            id="body" 
            value={postBody}
            onChange={(e)=>{setPostBody(e.target.value)}}
            className='flex-1 px-3 h-10 my-3 outline-none rounded-sm'
            aria-describedby="helpId" 
            placeholder="BolgBody"
            required/>
           </section>
           <button type='submit' className=' bg-blue-700 text-white px-5 py-2 rounded-sm mx-auto'>Add Blog</button>
       </form>
    </div>
  )
}

export default NewPost