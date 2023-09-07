import React, { useContext, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import  DataProvider from '../context/DataContext'
const UpdatePost = () => {
    const {editBody, editTitle, setEditBody, setEditTitle, posts, handleUpdatePost} = useContext(DataProvider)
    const {id} = useParams()
    const post = posts.find(post=>post.id == id)

    useEffect(()=>{
        if(post){
            setEditBody(post.body)
            setEditTitle(post.title)
            console.log("It is executed")
        }
    },[post, setEditBody, setEditTitle])
      return (
        <div className='bg-blue-300 flex justify-center items-center flex-1'>
          <form className='flex-1 flex flex-col justify-center' onSubmit={(e)=> {e.preventDefault()}}>
              <section className='flex px-32 sm:px-2'>
                <label htmlFor="title" className="form-label absolute -left-52">BlogTitle</label>
                <input type="text" 
                name="title" 
                id="title" 
                value={editTitle}
                onChange={(e)=>{setEditTitle(e.target.value)}}
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
                value={editBody}
                onChange={(e)=>{setEditBody(e.target.value)}}
                className='flex-1 px-3 h-10 my-3 outline-none rounded-sm'
                aria-describedby="helpId" 
                placeholder="BolgBody"
                required/>
              </section>
              <button type='submit' className=' bg-blue-700 text-white px-5 py-2 rounded-sm mx-auto' onClick={()=>{handleUpdatePost(post.id)}}>Update Blog</button>
          </form>
        </div>
      )
}


export default UpdatePost