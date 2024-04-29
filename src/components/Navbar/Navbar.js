import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[70px] flex items-center p-[30px] justify-between'> 
      <h1 className='text-[18px] ml-[159px]'>HIDEVA GROUP</h1>
      <div className='flex items-center space-x-[20px] mr-[120px]'>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <button className='w-[120px] h-[37px] bg-[#EC9706] text-white rounded-[12px]'>Contact us</button>
      </div>
    </div>
  )
}

export default Navbar
