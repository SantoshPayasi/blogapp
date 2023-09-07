import {React, useState, useEffect} from 'react'
import './input.css'
import postsData from './Rosources/posts';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/Nav.css'
import api from './api/posts'
import Footer from './components/Footer'
import Routes from './Routes';
import useWindowSize from './hooks/useWindowSize';
import useAxiosfetch from './hooks/useAxiosfetch';
import {DataProvider} from './context/DataContext';
function App() {
  // const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postDetails')))  //When we are getting data from localhost
  const [posts, setPosts] = useState([])  //Whaen we are getting data from JSON server
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const {width} = useWindowSize()
  

  const {data, fetchError, isLoading} = useAxiosfetch('http://localhost:3500/postData')
  
useEffect(()=>{
  setPosts(data)
}, [data])
  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //     try {
  //       const response = await api.get('/postData');
  //       console.log(response)
  //         setPosts(response.data)
        
  //     } catch (error) {
  //       // Not in the 200 response range
  //       if(error.response){
  //         console.log(error.response.data)
  //         console.log(error.response.status)
  //         console.log(error.response.headers)
  //       }
  //       else{
  //         console.log(`Error: ${error.message}`)
  //       }
        
  //     }
  //   }
  //   fetchPosts()
  // },[])

  return (
    <div className="App w-[75%] h-screen">
      <DataProvider>
       <Header title="Reactjs Blog"/>
       <Nav/>
       <Routes search={search}
        posts={posts}
          setPosts={setPosts}
          searchList={searchResults}
          setSearchList={ setSearchResults}
          fetchError = {fetchError}
          isLoading = {isLoading}
            />
        <Footer posts={posts} />
      </DataProvider>
    </div>
  );
}

export default App;
