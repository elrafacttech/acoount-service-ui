import React from 'react'
import Sidebar from '../components/Sidebar'
import Maincontent from '../components/Maincontent'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { Dashboard } from '../components/dashboard/Dashboard'

const Layout = ({ children }) => {
    const location = useLocation();

    return (

        <div className='flex  md:h-scree '>
            <div className=' '>
                <div className='overflow-y-scroll '>
                    <Sidebar />
                    <div className="absolute w-px sm:-bottom-40 bottom-0 overscroll-y-none scrollbar-hide  sm:left-64 left-16 bg-gray-200 border-0 dark:bg-gray-700 top-0 -right-12 "></div>
                </div>
                <div className='sm:mx-12  h-screen fixed sm:left-64 left-20 right-0'>
                    <div className=''>
                        <Navbar />
                    </div>
                </div>
            </div>
            <div className='sm:mx-12  h-screen fixed sm:left-64 left-20 right-0'>
            <div className='overflow-y-scroll no-scrollbar absolute bottom-0 top-[79px] left-0 right-0 scrollbar-hide scroll-smooth pt-10'>
               {
                location.pathname === "/dashboard" ?
                <>
                {children}
                </> 
                 :
                 (location.pathname === '/organisation-details') ?
                 <>
                  {children}
                 </> 
                 :
                 (location.pathname === '/sales') ?
                 <>
                  {children}
                 </>
                 :
                 (location.pathname === '/purchase') ?
                 <>
                 {children}
                </>
                 :
                 (location.pathname === '/accounts') ?
                 <>
                  {children}
                 </>
                 :
                 (location.pathname === '/income-statements') ?
                 <>
                  {children}
                 </>
                 :
                 (location.pathname === '/report') ?
                 <>
                  {children}
                 </>
                 :
                 <>
                 
                 </>
               }
            </div>
            </div>

        </div>
    )
}

export default Layout