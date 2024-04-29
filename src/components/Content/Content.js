import React from 'react'
import Image6 from '../../Images/img6.png'

function Content() {
  return (
    <div className='flex items-center w-full h-[450px] bg-[#FDF6E9]'>
      <img className='ml-[130px] w-[400px] h-[400px]' src={Image6} alt='Image 6'/>
      <div className='ml-[250px]'>
        <p className='text-[#EC9706] font-bold text-[20px] pb-[10px]'>About us</p>
        <h1 className='text-[31px] font-bold pb-[30px] '>Efficiency, Building, Budget & Time</h1>
        <p className='w-[515px]'>Hideva Group is a team of skilled construction professionals with a passion for building and a commitment to excellence. We provide a range of services, from small-scale renovations to large-scale commercial construction. We believe in transparency and communication, and we work closely with our clients to ensure their needs are met. Thank you for considering us for your construction needs.</p>
      </div>
    </div>
  )
}

export default Content
