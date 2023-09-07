import {React, useContext} from 'react'
import '../input.css'
import '../index.css'
import Feed from '../components/Feed'
import DataProvider  from '../context/DataContext'
const Home = () => {
  const {fetchError, isLoading, searchResults} = useContext(DataProvider)
  return (
    <main className='flex-1'>
    {
    isLoading && <p>Posts are loading</p>
    }
    {
      !isLoading && fetchError && <p className='text-red-500'>{fetchError}</p>
    }
    { 
      
      !isLoading && !fetchError && (searchResults.length ?(<Feed posts={searchResults}/>):(
        <p className='mt-12'>
          No posts to display
        </p>
        )
      )
    }

    </main>
  )
}

export default Home