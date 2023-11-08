import React from 'react'
import {TbPencil} from 'react-icons/tb'
import {LuLink2} from 'react-icons/lu'
import {AiOutlineFilter, AiOutlinePlus, AiOutlineUsergroupDelete} from 'react-icons/ai'
import {CgCalendarToday} from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'
import {CiGrid41} from 'react-icons/ci'

const Subcontent = () => {
    return (
        <div className='pt-8'>
            <div className='flex lg:flex-row flex-col lg:items-center  gap-8 justify-between lg:gap-5'>
                <div className='flex  items-center  gap-5'>
                    <h1 className='font-Inter font-semibold lg:text-5xl md:text-4xl text-xl'>Mobile App</h1>
                    <div className='flex gap-4'>
                        <div className='bg-[#dcd6fa] w-6 h-6 rounded-lg flex justify-center items-center text-[#5030E5]'>
                            <TbPencil/>
                        </div>
                        <div className='bg-[#dcd6fa] w-6 h-6 rounded-lg flex justify-center items-center text-[#5030E5]'>
                            <LuLink2/>
                        </div>
                    </div>
                </div>

                <div className='flex items-center  relative pr-44'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#dcd6fa] w-4 h-4 rounded-md flex justify-center text-[10px] items-center text-[#5030E5]'>
                            <AiOutlinePlus/>
                        </div>
                        <h4 className='font-Inter text-sm text-[#5030E5]'>Invite</h4>
                    </div>
                    <div className='flex items-center '>

                        <img className='md:w-10 w-8 md:h-10 h-8  rounded-full object-cover border-2 border-white absolute z-10  left-20 md:left-20' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <img className='md:w-10 w-8 md:h-10 h-8  rounded-full object-cover border-2 border-white absolute z-20  left-[105px] md:left-28' src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <img className='md:w-10 w-8 md:h-10 h-8  rounded-full object-cover border-2 border-white absolute  z-30 left-32 md:left-[144px]' src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <img className='md:w-10 w-8 md:h-10 h-8  rounded-full object-cover border-2 border-white absolute  z-40 left-[151px] md:left-[174px]' src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div className='bg-[#F4D7DA] md:w-10 w-8 h-8 md:h-10 rounded-full border-2 border-white absolute left-[174px] md:left-[200px] z-50 text-[#D25B68] font-Inter text-center flex items-center justify-center'>+2</div>
                    </div>
                </div>
            </div>

            <div className='text-[#787486] pt-10 flex gap-3 items-center  lg:justify-between'>
                <div className='flex gap-3'>
                    <button className='flex items-center border gap-4 border-[#787486] rounded-md text-xs font-Inter md:px-3 px-1 py-1.5'>
                        <div className='flex items-center gap-1 md:text-base text-sm'>
                            <AiOutlineFilter/>
                            <h4>Filter</h4>
                        </div>
                        <div>
                            <IoIosArrowDown/>
                        </div>
                    </button>
                    <button className='flex items-center border gap-4 border-[#787486] rounded-md text-xs font-Inter md:px-3 px-1 py-1'>
                        <div className='flex items-center gap-1 md:text-base text-sm'>
                            <CgCalendarToday/>
                            <h4>Today</h4>
                        </div>
                        <div>
                            <IoIosArrowDown/>
                        </div>
                    </button>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='hidden sm:block'>
                        <button className='flex items-center border gap-4 border-[#787486] rounded-md text-xs font-Inter md:px-3 px-1 py-1.5'>
                            <div className='flex items-center md:text-base gap-1 text-sm'>
                                <AiOutlineUsergroupDelete/>
                                <h4>Share</h4>
                            </div>
                        </button>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex items-center gap-4 '>
                            <div className='flex items-center'>
                                <div className="absolute  -ml-0.5 w-[1px] h-7 bg-[#787486] opacity-50  hidden md:block"></div>
                            </div>

                            <button className='flex items-center justify-center gap-0.5 flex-col  rounded-md text-sm font-Inter px-3 py-3 bg-[#5030E5]'>
                                <hr className="w-3.5 h-1.5 mx  bg-gray-100 border-0 rounded-sm  dark:bg-gray-700"></hr>
                                <hr className="w-3.5 h-1.5 mx  bg-gray-100 border-0 rounded-sm  dark:bg-gray-700"></hr>
                            </button>
                            <div className='text-xl text-[#787486]'>
                                <CiGrid41/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subcontent
