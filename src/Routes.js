import React from 'react'
import { Route, Routes} from 'react-router-dom'
import NewPost from './Pages/NewPost'
import Home from './Pages/Home'
import './input.css'
import PostPage from './Pages/PostPage'
import AboutPage from './Pages/AboutPage'
import Missing from './Pages/Missing'

import UpdatePost from './Pages/Updatepost'

const Navigator = () => {


// const [editTitle, setEditTitle] = useState("")
// const [editBody, setEditBody] = useState("")

// const handleDelete = async(id)=>{
//    try {
//     await api.delete(`/postData/${id}`)       //When we are trying to remove it from JSON server 
//     const postList = posts.filter(post=>(post.id)!= id)
//     setPosts(postList)
//     // localStorage.setItem('postDetails', JSON.stringify(postList))  //When we are trying to remove post from localstorage we can do that
//     history('/')
//    } catch (error) {
//     console.log(`Error is :${error.message}`)
//    } 
// }


// const handleUpdatePost = async(id)=>{
//     const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
//     const updatedPost = {id, dateTime, title:editTitle, body:editBody}

//     try {
//       const response = await api.put(`postData/${id}`, updatedPost)
//       setPosts(posts.map(post=> post.id === id ? {...response.data} : post))
//       setEditBody("")
//       setEditTitle("")
//       history('/')
//     } catch (error) {
//       console.log(`Error is : ${error.message}`)
//     }

// }


// useEffect(()=>{
//    const newList = posts.filter((item)=>{ 
//     return item.title.toLowerCase().includes(search.toLowerCase());
//    })
//    setSearchList(newList.reverse())
// },[search, posts])

  return (
    <div className='bg-white flex flex-1 flex-col overflow-y-auto '>
   
    <Routes>
        <Route path="/" element={
        <Home/>} />
        <Route exact path="/post" element={<NewPost/>} />
        <Route exact path="/UpdatePost/:id" element={<UpdatePost/>} />
        <Route exact path="/post/:id" element={<PostPage/>} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    
    </div>
  )
}

export default Navigator