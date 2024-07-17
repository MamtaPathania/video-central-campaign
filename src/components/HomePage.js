import React from 'react'
import img from '../assets/img8.png'
function HomePage() {
  return (
    <div>
<div className='flex flex-col items-center lg:flex-row lg:items-center lg:text-left lg:h-[600px] h-[550px]'>
  <img src={img} alt="football quiz" className='lg:h-[600px] lg:w-[700px] h-[400px] w-[600px]'/>
  <div className="text-center lg:text-left">
    <h1 className='lg:text-7xl text-4xl font-bold font-sans'>To Watch</h1>
    <h1 className='lg:text-7xl text-4xl font-bold text-red-700'>Unlimited Videos</h1>
  </div>
</div>

      <div className='bg-black text-white'>
        <h2 className='flex justify-center lg:text-4xl text-2xl font-mono items-center font-bold'> About Video Central</h2>
        <div class="w-[250px] lg:w-[700px] md:w-[300px] mx-auto p-6">
  <p class="text-left lg:text-3xl text-sm">
  Video Central is your go-to source for premium video content! With a subscription fee of 100 Naira daily or 200 Naira weekly, you gain access to an array of entertaining videos, including comedy and more. Enjoying uninterrupted viewing for 24 hours with the daily plan and for 7 days with the weekly plan. Video Central gives you an immersive and diverse entertainment experience.
</p>
</div>

      </div>
    </div>
  )
}

export default HomePage
