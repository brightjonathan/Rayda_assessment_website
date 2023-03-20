import React from 'react'
import {notification_icon} from '../Components/Icons/Icons_component'


const Header_component = () => {
  return (
    <div className='sm:mt-[3vh]' >
      <div className=' pl-[2%] sm:flex h-full w-screen sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

<div>
    <h2 className='font-bold text-xl sm:text-3xl text-[#101828]'> Welcome  </h2>
    <h2 className='mt-1 text-[#9fa5b3] sm:text-xl'> Your current sales auction and activity. </h2> 
</div>

<div className=' flex mt-2'> 

<div className="notification">
  <span className=''>{notification_icon}</span>
  <span className="badge">2</span>
</div>

</div>
</div>
    </div>
  )
}

export default Header_component
