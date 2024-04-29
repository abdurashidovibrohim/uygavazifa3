import React from 'react'
import Image1 from '../../Images/img1.png'
import Image2 from '../../Images/img2.jpg'

function Header() {
  return (
    <div className='flex justify-between w-full h-[500px] bg-[#FDF6E9]'>
      <div className='flex flex-col mt-[100px] ml-[160px]'>
        <p className='text-[#EC9706]'>We are Hideva Group</p>
        <h1 className='text-[40px] font-bold'>Design and  Build Cotract</h1>
        <p className='w-[500px] text-[20px] mb-[20px] h-[90px]'>With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship</p>
        <button className='w-[130px] rounded-[12px] h-[40px] bg-[#EC9706] text-white'>Get a quote</button>
        <div>
        <img className='w-[220px] h-[50px] mt-[80px]' src={Image2} alt='Image 2'/>
        </div>
      </div>
        <img className='w-[700px] h-[500px]' src={Image1} alt='Image 1'/>
    </div>
  )
}

export default Header
