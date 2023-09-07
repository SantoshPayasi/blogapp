import React from 'react'

const Footer = ({posts}) => {
  const currentyear = new Date()
  return (
    <div className='h-10 text-center bg-blue-200 font-semibold'>
      <p>Copyright &copy; {currentyear.getFullYear()}</p>
    </div>
  )
}

export default Footer