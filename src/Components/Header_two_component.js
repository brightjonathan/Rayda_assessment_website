import React from 'react'
import {thumb_Icon, Dot_icon, avatar_icon} from '../Components/Icons/Icons_component'

const Header_two_component = () => {
  return (
    <div className='sm:mt-[1vh]'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1  lg:grid-cols-1 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
       <div className='p-4 rounded-lg shadow-xl pb-10 mb-9 bg-white hover:bg-transparent hover:bg-slate-300 duration-500 '>
       
       <div className='mb-6'>
       <div className="slider__item slider__item-01 mt0"></div>

       <div className=' pl-[2%] sm:flex h-full w-screen  sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

                <div>
                    <div className='absolute mt-[-50px] '>
                   <span className=' flex items-center p-[3px] border w-[160px] h-[160px] bg-[#f9f5ff] px-2 rounded-full'> <span className='p-[30%]'> {avatar_icon}</span> </span>
                </div>

                <div className='pt-2'>
                <span className='pl-[30vh] font-semibold'>Starts in: 3 days : 2 hours : 24 minutes </span>
                <div>
                    <h2 className=' pl-[30vh] '> <button className='relative flex items-center  bg-transparent p-[2px] sm:p-[6px] px-2 sm:px-5 rounded'> <span className='pr-4'> {Dot_icon} </span> <span className='tracking-wide '> <span className='text-[#B54708]'>Not Live</span> Layers Auction </span> </button> </h2>
                </div>
                </div>
                </div>

                <div className=' flex m-4'> 
                    <div className='pr-4'>
                        
                    </div>
                    <div>
                    <button className='relative flex items-center border bg--transparent p-[2px] sm:p-[6px] px-2 sm:px-5 rounded'> <span className='pr-4'> {thumb_Icon} </span> accept invite </button>
                    </div>
                </div>
            </div>

       </div>
       </div>
        </div>
      
    </div>
  )
}

export default Header_two_component;
