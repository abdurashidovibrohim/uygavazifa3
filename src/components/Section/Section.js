import React from 'react'

function Section() {
  return (
    <div>
      <p className='pt-[100px] text-center text-[#EC9706] text-[20px] font-bold'>Get in Touch</p>
      <h1 className='pt-[30px] text-center text-[30px] font-bold'>Reach out to us and let's turn your construction dreams into reality</h1>
        <div className=' mt-[30px] ml-[170px] w-[1000px] rounded-md bg-[#F5F5F5] flex flex-col'>
          <p className='pl-[100px] pt-[40px] pb-[10px] text-slate-600 text-[18px]'>Name</p>
          <input className='ml-[100px] outline-none w-[800px] h-[60px] p-[10px] bg-[#F5F5F5] border-[2px] border-slate-300 rounded-md' type='text' placeholder='Enter name'/>

          <p className='pl-[100px] pt-[40px] pb-[10px] text-slate-600 text-[18px]'>Email</p>
          <input className='ml-[100px] outline-none w-[800px] h-[60px] p-[10px] bg-[#F5F5F5] border-[2px] border-slate-300 rounded-md' type='email' placeholder='Enter email'/>

          <p className='pl-[100px] pt-[40px] pb-[10px] text-slate-600 text-[18px]'>Message</p>
          <input className='ml-[100px] outline-none w-[800px] h-[200px] p-[10px] bg-[#F5F5F5] border-[2px] border-slate-300 rounded-md' type='text' placeholder=''/>

          <button className='w-[180px] h-[40px] bg-[#EC9706] ml-[100px] mb-[30px] mt-[50px] text-white rounded-md'>Send</button>
      </div>
    </div>
  )
}

export default Section
