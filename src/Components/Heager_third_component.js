import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Heager_third_component = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b')
          .then(response => {
            setData(response.data);
            //console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      
  return (
    <div className='sm:mt-[2vh]'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-1  lg:grid-cols-1 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
       <div className='p-4 rounded-lg shadow-2xl pb-10 mb-9 bg-white hover:bg-transparent hover:bg-slate-300 duration-500 '>

        
        {/*  */}
        <div className='sm:mt-[3vh]' >
      <div className=' pl-[2%] sm:flex h-full w-screen sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

<div>
    <h2 className='font-bold text-xl sm:text-3xl  text-[#101828]'> Featured Items </h2>
</div>

   <div className=' flex mt-2'> 
   <div className='pr-4'>
   <div>
   <button className='relative flex items-center border bg-transparent p-[2px] sm:p-[6px] px-2 sm:px-5 rounded'> View Auction </button>
    </div>
   </div>

</div>
</div>
    </div>
        {/*  */}

        

        {/*  */}

        <hr className='mt-6'/>

        <div className='px-[2%] sm:mt-[4vh] '>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1  lg:grid-cols-4 gap-x-6 gap-y-16'>

                {data.data?.map((item, index) => {
                    return (
                        <div className=' bg-transparent border mx-auto pb-4 rounded-xl' key={index}>
                        <div className=' p-4 py-2 m-3 bg-[#F2F4F7] rounded-xl'>
                        <img src={item.image} alt={item.title} className='rounded-xl' />
                        </div>
         
                        <div className='px-[3%] pt-6'>
                         <div>
                            <span className='bg-[#F2F4F7] rounded-full text-[14px] p-2 '> KO</span> &nbsp;  <span className='font-semibold'>{item.name}</span> <span className='text-[#344054]'>(Highest Bidder)</span>
                            <p className='pt-3 font-bold'>{item.title}...</p>
                            <p className='pt-3 font-semibold'> Current Bid: &nbsp; <span>{item.bid}</span></p>
    
                            <hr className='border mt-2'/>
    
                            <button className="bg-[#004CCC] w-[100%] mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Add to wishlist </button>
    
                         </div>
                         {/*  */}
                        </div>
    
                    </div>
                    )
                })}

            </div>
            
        </div>

        {/*  */}
        </div>
       </div>
    </div>
  )
}

export default Heager_third_component;

