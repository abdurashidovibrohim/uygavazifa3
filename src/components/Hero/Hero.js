import React from 'react'
import Image3 from '../../Images/img3.png'
import Image4 from '../../Images/img4.png'
import Image5 from '../../Images/img5.png'

function Hero() {
  return (
    <div>
      <p className='text-center pt-[50px] text-[#EC9706] text-[18px] font-bold'>Services</p>
      <h1 className='text-center pt-[15px] text-[30px] '>Building Dreams, Crafting Realities</h1>
      <div className='flex mt-[50px] space-x-[100px] mb-[90px]'>

      <div className='flex flex-col ml-[130px] rounded-md shadow-md shadow-black w-[300px] bg-[#F5F5F5]'>
        <img className='w-[full] h-[150px] ' src={Image3} alt='Image 3'/>
        <h1 className='text-[18px] font-bold pt-[15px] pl-[20px]'>Consultation Services</h1>
        <ul className='pl-[40px] pt-[15px] '>
          <li>Design & Build</li>
          <li>Cost analysis</li>
          <li>Permits & Processes</li>
          <li>Scheduling</li>
          <li>Phasing</li>
          <li>Resource management</li>
        </ul>
      </div>
      
      <div className='flex flex-col rounded-md shadow-md pb-[20px] shadow-black w-[300px] bg-[#F5F5F5]'>
        <img className='w-[full] h-[150px] ' src={Image4} alt='Image 3'/>
        <h1 className='text-[18px] font-bold pt-[15px] pl-[20px]'>General Construction</h1>
        <ul className='pl-[40px] pt-[15px] '>
          <li>New Construction</li>
          <li>Building Addition</li>
          <li>Renovation</li>
          <li>Restoration</li>
          <li>Rebuilding from Drainage</li>
          <li>Drainage</li>
        </ul>
      </div>
      
      <div className='flex flex-col rounded-md shadow-md shadow-black w-[300px] bg-[#F5F5F5]'>
        <img className='w-[full] h-[150px] ' src={Image5} alt='Image 3'/>
        <h1 className='text-[18px] font-bold pt-[15px] pl-[20px]'>Maintenance Services</h1>
        <ul className='pl-[40px] pt-[15px] '>
          <li>Windows & Doors Fitting</li>
          <li>Siding Repairs</li>
          <li>Plumbing</li>
          <li>Electrical &Solar Fitting</li>
          <li>HVAC</li>
          <li>Remodeling</li>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Hero
