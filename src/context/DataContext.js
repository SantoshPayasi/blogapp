import{ React , createContext, useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/posts'
import useWindowSize from '../hooks/useWindowSize'
import useAxiosfetch from '../hooks/useAxiosfetch'
import format from 'date-fns/format'
const DataContext = createContext({})

export const DataProvider =({children})=>{
    const [posts, setPosts] = useState([])  //Whaen we are getting data from JSON server
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const {width} = useWindowSize()
    const [editTitle, setEditTitle] = useState("")
    const [editBody, setEditBody] = useState("")
    const history = useNavigate()
    
  
    const {data, fetchError, isLoading} = useAxiosfetch('http://localhost:3500/postData')
    
  useEffect(()=>{
    setPosts(data)
  }, [data])

  const handleDelete = async(id)=>{
    try {
     await api.delete(`/postData/${id}`)       //When we are trying to remove it from JSON server 
     const postList = posts.filter(post=>(post.id)!= id)
     setPosts(postList)
     // localStorage.setItem('postDetails', JSON.stringify(postList))  //When we are trying to remove post from localstorage we can do that
     history('/')
    } catch (error) {
     console.log(`Error is :${error.message}`)
    } 
 }
 
 
 const handleUpdatePost = async(id)=>{
     const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
     const updatedPost = {id, dateTime, title:editTitle, body:editBody}
 
     try {
       const response = await api.put(`postData/${id}`, updatedPost)
       setPosts(posts.map(post=> post.id === id ? {...response.data} : post))
       setEditBody("")
       setEditTitle("")
       history('/')
     } catch (error) {
       console.log(`Error is : ${error.message}`)
     }
 
 }

    useEffect(()=>{
        const newList = posts.filter((item)=>{ 
         return item.title.toLowerCase().includes(search.toLowerCase());
        })
        setSearchResults(newList.reverse())
     },[search, posts])

    return <DataContext.Provider value={{
           width,
           search,
           setSearch,
           searchResults,
           setSearchResults,
           posts,
           setPosts,
           data,
           fetchError,
           isLoading,
           editBody,
           setEditBody,
           editTitle,
           setEditTitle,
           handleDelete,
           handleUpdatePost
    }} >
        {children}
    </DataContext.Provider>
}


export default DataContext;