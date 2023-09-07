import {React} from 'react'
import './input.css'

import Header from './components/Header';
import Nav from './components/Nav';
import './css/Nav.css'

import Footer from './components/Footer'
import Routes from './Routes';

import {DataProvider} from './context/DataContext';
function App() {
  // const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postDetails')))  //When we are getting data from localhost
//   const [posts, setPosts] = useState([])  //Whaen we are getting data from JSON server
//   const [search, setSearch] = useState("")
//   const [searchResults, setSearchResults] = useState([])
//   const {width} = useWindowSize()
  

//   const {data, fetchError, isLoading} = useAxiosfetch('http://localhost:3500/postData')
  
// useEffect(()=>{
//   setPosts(data)
// }, [data])

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
       <Routes/>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
