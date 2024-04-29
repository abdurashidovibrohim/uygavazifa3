import React from 'react'
import Image10 from '../../Images/img10.jpg'

function Footer() {
  return (
    <div className='flex justify-around mt-[40px] w-full p-[40px]  bg-[#FDF6E9]'>
      <h1 className='font-bold'>HIDEVA GROUP</h1>
      <div className='flex'>
        <div className='flex flex-col w-[200px] space-y-[8px]'>
          <h1 className='p-[10px] text-[16px] font-bold'>Services</h1>
          <p className='text-[14px] pl-[10px]'>New Builds</p>
          <p className='text-[14px] pl-[10px]'>Renovations</p>
          <p className='text-[14px] pl-[10px]'>Conversions</p>
          <p className='text-[14px] pl-[10px]'>Fit Out</p>
        </div>
        <div className='flex flex-col w-[200px] space-y-[8px]'>
          <h1 className='p-[10px] text-[16px] font-bold'>Information</h1>
          <p className='text-[14px] pl-[10px]'>Evants</p>
          <p className='text-[14px] pl-[10px]'>Contact us</p>
          <p className='text-[14px] pl-[10px]'>Privacy police</p>
          <p className='text-[14px] pl-[10px]'>Terms of services</p>
        </div>
        <div className='flex flex-col w-[200px] space-y-[8px]'>
          <h1 className='p-[10px] text-[16px] font-bold'>Address</h1>
          <p className='text-[14px] pl-[10px]'>Nyeri Town - Nyeri</p>
          <p className='text-[14px] pl-[10px]'>Mumbi</p>
          <p className='text-[14px] pl-[10px]'>Call us</p>
          <p className='text-[14px] pl-[10px]'>Email us</p>
        </div>
      </div>
      <img className='h-[40px]' src={Image10} alt='Image 10'/>
    </div>
  )
}

export default Footer
