import React from 'react'
import Image7 from '../../Images/img7.png'
import Image8 from '../../Images/img8.png'
import Image9 from '../../Images/img9.png'

function Aside() {
  return (
    <div>
      <p className='text-center text-[20px] text-[#EC9706] font-bold pt-[50px]'>Blog</p>
      <h1 className='text-center pt-[10px] text-[30px] font-bold'>Insightful blogs about the construction industry.</h1>
      <div className='flex space-x-[100px] ml-[130px] mt-[30px]'>

        <div className='w-[300px] shadow-xl shadow-black rounded-md'>
          <img className='w-full h-[200px]' src={Image7} alt='Image 7'/>
          <p className=' pl-[15px] pt-[10px] text-slate-500 text-[17px]'>24 October 2022</p>
          <p className=' pl-[15px] pt-[10px] text-[#EC9706] text-[17px]'>What are the processes involved in putting up a building?</p>
          <p className=' w-[280px] h-[90px] pl-[15px] pt-[10px] text-[14px] text-slate-500'>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
          <button className='text-center mb-[10px] mt-[20px] ml-[15px] w-[150px] h-[35px] rounded-md text-white bg-[#EC9706]'>Read more</button>
        </div>

        <div className='w-[300px] shadow-xl shadow-black rounded-md'>
          <img className='w-full h-[200px]' src={Image8} alt='Image 7'/>
          <p className=' pl-[15px] pt-[10px] text-slate-500 text-[17px]'>3 November 2022</p>
          <p className=' pl-[15px] pt-[10px] text-[#EC9706] text-[17px]'>What is Minimalist Architecture and Minimal Design Space?</p>
          <p className=' w-[280px] h-[90px] pl-[15px] pt-[10px] text-[14px] text-slate-500'>Minimalism in architecture is a form that can be characterized using various aspects with the sole aim of reducing clutter and...</p>
          <button className='text-center mb-[10px] mt-[20px] ml-[15px] w-[150px] h-[35px] rounded-md text-white bg-[#EC9706]'>Read more</button>
        </div>

        <div className='w-[300px] shadow-xl shadow-black rounded-md'>
          <img className='w-full h-[200px]' src={Image9} alt='Image 7'/>
          <p className=' pl-[15px] pt-[10px] text-slate-500 text-[17px]'>5 January 2023</p>
          <p className=' pl-[15px] pt-[10px] text-[#EC9706] text-[17px]'>Integrating Technology for Modern Construction</p>
          <p className=' w-[280px] h-[90px] pl-[15px] pt-[10px] text-[14px] text-slate-500'>In the realm of modern construction, the integration of smart home innovations has emerged as a transformative force...</p>
          <button className='text-center mb-[10px] mt-[20px] ml-[15px] w-[150px] h-[35px] rounded-md text-white bg-[#EC9706]'>Read more</button>
        </div>

      </div>
    </div>
  )
}

export default Aside
