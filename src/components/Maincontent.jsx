import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Subcontent from './Subcontent'
import Appcontent from './Appcontent'
import {DragDropContext} from "react-beautiful-dnd"

const Maincontent = () => {
    const [completed, setCompleted] = useState([])
    const [incomplete, setIncomplete] = useState([])

    const onDragEnd = (result) => {
      const {source, destination} = result;
      console.log(result);

      if(!destination) return
      if(destination.droppableId===source.droppableId &&  destination.index===source.index ) return

     
    }
   
    return (
        <>
            <div className="absolute w-px sm:-bottom-40 bottom-0 overscroll-y-none scrollbar-hide  sm:left-64 left-16 bg-gray-200 border-0 dark:bg-gray-700 top-0 -right-12 "></div>
            <div className='sm:mx-12  h-screen fixed sm:left-64 left-20 right-0'>

                <div className=''>
                    <Navbar/>
                </div>
                <div className='overflow-y-scroll no-scrollbar absolute bottom-0 top-[77px] left-0 right-0 scrollbar-hide scroll-smooth'>
                    {/* <div>
                        <Subcontent/>
                    </div>
                    <div className=' '>
                            <Appcontent id={'123'}/>
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default Maincontent
