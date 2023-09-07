import {React, useContext} from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import '../input.css'
import DataProvider from '../context/DataContext'
const Header = ({title}) => {
  const {width} = useContext(DataProvider)
  return (
    <div className= "w-[100%] p-2 flex justify-between items-center bg-sky-500 font-medium text-xl rounded-t-md">
      <h1>{title}</h1>
      {width<768 ? <FaMobileAlt/>
                  : width <992  ? <FaTabletAlt/>
                  :<FaLaptop/>
                  }
    </div>
  )
}

export default Header