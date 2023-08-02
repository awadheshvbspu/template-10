import React from 'react';
import head from '../assests/pexels-asad-photo-maldives-3601425.jpg'

export default function Hero() {
  return (
    <>
        <div className='w-full h-screen'>
        <img src= {head} alt='' className='top-0 left-0 w-full h-screen object-cover' />
        <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 h-full w-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='text-xl font-bold'>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Gateways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetor adipiscing elit.Quo ut quies est, id consequter sequl ipsum vitate sit non exercitationones.</p>
                <button className='bg-white text-black '>Reserved Now</button>
            </div>
        </div>
       
        </div>
    </>
  )
}
