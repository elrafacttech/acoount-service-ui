import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsCalendar4Week} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import logo from '../assets/profile.png'


const Navbar = () => {
    return (
        <div>
            <div className='pt-5 relative flex md:justify-between  justify-end item gap-2 '>
                <div className= 'hidden md:block absolute top-[24px] left-6 text-xl'>
                    <CiSearch/>
                </div>
                <input className='hidden md:block bg-[#F5F5F5] font-Inter font-normal text-sm  px-10 xl:pr-32 lg:pr-14 pr-0 md:placeholder:text-xs  placeholder:pl-5  rounded-md placeholder:text-[#787486]' type="text" placeholder='Search for anything...'/>

                <div className='flex  gap-5 '>
                    <div className='flex  items-center gap-7 text-[#787486]'>
                        <div><BsCalendar4Week/></div>
                        <div className='text-xl text-[#787486]'><BiMessageDetail/></div>
                        <div className='text-2xl relative'>
                            <div className='rounded-ful bg-[#D8727D] absolute w-1 h-1 rounded right-[6px] top-[3px]'></div>
                            <IoIosNotificationsOutline/>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className=' hidden lg:block font-Inter text-right'>
                            <h3 className='font-normal text-[#0D062D] text-sm'>Admin</h3>
                            <p className='text-[#787486] text-sm'>Germany</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-10 h-10 rounded-full object-cover ' src={logo} alt="logo"/>
                            <div className='text-[#292D32]'>
                                <IoIosArrowDown size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-px my-[18px]  -mr-12 -ml-12 bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
    )
}

export default Navbar
