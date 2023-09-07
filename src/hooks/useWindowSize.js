import { useState, useEffect } from "react";

import React from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height:undefined
    })

    useEffect(()=>{
       const HandleResize = ()=>{
        setWindowSize({
            width: window.innerWidth,
            height:window.innerHeight
        })
       }

       window.addEventListener('resize', HandleResize)

       return ()=>{ window.removeEventListener('resize', HandleResize)}
    },[])
  

    return windowSize
}

export default useWindowSize