import React, { useState } from 'react'
import {BiDotsHorizontalRounded, BiMessageAltDots} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import {HiOutlinePlus} from 'react-icons/hi'
import Leaf from "../assets/Leaf.png"
import Moodboard2 from "../assets/Moodboard2.png"
import Moodboard1 from "../assets/Moodboard1.png"
import MobileDesign from "../assets/MobileDesign.png"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const ToDo = [
        {
            id: 123,
            state: "Low",
            name: "Brainstorming",
            para: "Brainstorming brings team members' diverse experience into play.",
            img1: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            comments: "12",
            files: "0"
        }, {
            id: 2,
            state: "High",
            name: "Research",
            para: "User research helps you to create an optimal product for users.",
            img1: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            comments: "10",
            files: "3"
        }, {
            id: 3,
            state: "High",
            name: "Wireframes",
            para: "Low fidelity wireframes include the most basic content and visuals.",
            img1: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            comments: "10",
            files: "3"
        }
    ]
const Appcontent = ({id}) => {

    const [state, setState] = useState([])
   

    
    // setState(ToDo)


    const OnProcess = [
        {
            id: 4,
            state: "Low",
            name: "Onboarding Illustrations",
            svg1: Leaf,
            img1: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            comments: "14",
            files: "15"
        }, {
            id: 5,
            state: "Low",
            name: "Moodboard",
            svg1: Moodboard1,
            svg2: Moodboard2,
            img1: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            comments: "9",
            files: "10"
        },
    ]

    const Done = 
    [
        {
            id: 6,
            state: "Completed",
            name: "Mobile App Design",
            svg1: MobileDesign,
         
            img1: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            

            comments: "12",
            files: "15"
        },
        {
            id: 7,
            state: "Completed",
            name: "Design System",
            svg1: MobileDesign,
            para: 'It just needs to adapt the UI from what you did before',
         
            img1: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            

            comments: "14",
            files: "15"
        }
    ]

    const [completed, setCompleted] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const[todos, settodos] = useState([])

    const onDragEnd = (result) => {
      const {source, destination} = result;
      console.log(result);

      if(!destination) return
      if(destination.droppableId===source.droppableId &&  destination.index===source.index ) return
 
     let add,
       active= ToDo,
       complete = OnProcess
      
       if(source.droppableId === "Todo") {
        add = active[source.index]
        active.splice(source.index, 1)
     } else {
        add = complete[source.index]
        complete.splice(source.index, 1)
     } 

     if(destination.droppableId === "Todo") {
       active.splice(destination.index, 0, add)
     } else {
        complete.splice(destination.index, 0, add)
     }

    //  setCompleted(complete)
    //  settodos(active)

    // if(source.droppableId === "onProgress") {
    //     add = complete[source.index]
    //     complete.splice(source.index, 1)
    //  } else {
    //     add = complete[source.index]
    //     complete.splice(source.index, 1)
    //  } 

     console.log(add);
     
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
 <div className=''>
            <div className='grid xl:grid-cols-3 lg:rid-cols-2 grid-cols-1 absolute right-0 left-0 bottom-0 lg:top-52  md:top-56 top-60 h-screen gap-4 mb-32 '>


                {/* TODO */}

                <div className='bg-[#F5F5F5]  rounded-lg  pt-5 px-6 relativ  overflow-hidde   '>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#5030E5] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>To Do</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>{}</div>
                        </div>
                        <div>
                            <div className='bg-[#dcd6fa] w-5 font-Inter  h-5 rounded-md flex justify-center text-[12px] items-center text-[#5030E5]'>
                                <HiOutlinePlus/>
                            </div>
                        </div>
                    </div>
                    <hr className="h-[2px] my-4  bg-[#5030E5] border-0 dark:bg-gray-700"/> {/* CARD */}

                  <Droppable droppableId="Todo">
                    {
                        (provided, snapshot) => (
                            <div className='flex flex-col gap-5  overflow-y- scrollbar-hide absolut bottom-0 top-[90px] right-5 left-5 mb-0.5 pb-6'
                             ref={provided.innerRef} {...provided.droppableProps}
                             idDraggingOver={snapshot.isDraggingOver}
                             >
                        {
                        ToDo.map((card, index) => (
                            <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
                                {(provided) => (
                                        <div className='  bg-[#FFFFFF] w-full  rounded-xl p-3 px-5 pb-6'
                                         {...provided.draggableProps}
                                         {...provided.dragHandleProps}
                                         ref={provided.innerRef}
                                        >
                                <div className='flex items-center justify-between pt-2 relatve'>
                                    <h3 className='font-Inter bg-[#f9eee3] text-xs rounded-[4px] py-1 px-1.5 text-[#D58D49]'>
                                        {
                                        card.state
                                    }</h3>
                                    <div className='text-xl'>
                                        <BiDotsHorizontalRounded/>
                                    </div>
                                </div>
                                <h1 className='font-Inter font-semibold text-lg pt-1'>
                                    {
                                    card.name
                                }</h1>
                                <p className=' font-Inter font-normal text-xs text-[#787486] pt-1'>
                                    {
                                    card.para
                                } </p>


                                <div className='flex items-center justify-between pt-8 relative'>
                                    <div>
                                        <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 '
                                            src={
                                                card.img1
                                            }
                                            alt=""/>
                                        <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 '
                                            src={
                                                card.img2
                                            }
                                            alt=""/> {
                                        card.img3 && <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10'
                                            src={
                                                card ?. img3
                                            }
                                            alt=""/>
                                        }
                                     </div>
                                    <div className='font-Inter flex items-center gap-3 '>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#787486] text-lg'>
                                                <BiMessageAltDots/>
                                            </div>
                                            <h4 className='text-xs text-[#787486]'>
                                                {
                                                card.comments
                                            }
                                                comments</h4>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#787486]'>
                                                <BsFiles/>
                                            </div>
                                            <h4 className='text-xs text-[#787486]'>
                                                {
                                                card.files
                                            }
                                                files</h4>
                                        </div>
                                    </div>
                                </div>
                                {provided.placeholder}
                            </div>
                                    )
                                }
                                 
                            </Draggable>
                           
                          ))
                        }
                        {provided.placeholder}
                         </div>
                        )
                    }
                     
                  </Droppable>
                   
                </div>


                {/* ON PROGRESS */}
                <div className='bg-[#F5F5F5]  rounded-t-lg  pt-5 px-6  relative '>

                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#FFA500] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>On Progress</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>3</div>
                        </div>

                    </div>
                    <hr className="h-[2px] my-4  bg-[#FFA500]  border-0 dark:bg-gray-700"/>
                <Droppable droppableId='onProgress'>
                    {
                        (provided,snapshot) => (
                             <div className='flex flex-col gap-5  overflow-y-scrol scrollbar-hide absolut bottom-0 top-[90px] right-5 left-5 mb-0.5' 
                             ref={provided.innerRef} {...provided.droppableProps}
                             idDraggingOver={snapshot.isDraggingOver}
                             >
                        {
                        OnProcess.map((cardProcess, index) => (
                            <Draggable draggableId={cardProcess.id.toString()} index={index} key={cardProcess.id}>
                                {(provided) => (
                                     <div className='  bg-[#FFFFFF] w-full  rounded-xl p-3 px-5 pb-6'
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps}
                                     ref={provided.innerRef}
                                     >
                                <div className='flex items-center justify-between pt-2 relatve'>
                                    <h3 className='font-Inter bg-[#f9eee3] text-xs rounded-[4px] py-1 px-1.5 text-[#D58D49]'>Low</h3>
                                    <div className='text-xl'>
                                        <BiDotsHorizontalRounded/>
                                    </div>
                                </div>
                                <h1 className='font-Inter font-semibold text-lg pt-1'>{cardProcess.name}
                                </h1>
                                
                                <div className='flex items-center justify-center xl:gap-1 gap-0 pt-1 '>
                                    <img className={` ${cardProcess.svg1 === Leaf ? "object-cover" :'object-cover xl:w-28  w-24'}`} 
                                        src={
                                            cardProcess.svg1
                                        }
                                        alt=""/> {
                                    cardProcess.svg2 && <img className='object-cover xl:w-28 w-24 h-full'
                                        src={
                                            cardProcess.svg2
                                        }
                                        alt=""/>
                                    }
                                 </div>


                                {/*Image section last  */}
                                <div className='flex items-center justify-between pt-8 relative'>
                                    <div>
                                        <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 '
                                            src={
                                                cardProcess.img1
                                            }
                                            alt=""/>
                                        <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 '
                                            src={
                                                cardProcess.img2
                                            }
                                            alt=""/>
                                        <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10'
                                            src={
                                                cardProcess.img3
                                            }
                                            alt=""/>
                                    </div>
                                    <div className='font-Inter flex items-center gap-3 '>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#787486] text-lg'>
                                                <BiMessageAltDots/>
                                            </div>
                                            <h4 className='text-xs text-[#787486]'>{cardProcess.comments} comments</h4>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#787486]'>
                                                <BsFiles/>
                                            </div>
                                            <h4 className='text-xs text-[#787486]'>{cardProcess.files} files</h4>
                                        </div>
                                    </div>
                                </div>
                                {provided.placeholder}
                            </div>
                                )}
                                 
                            </Draggable>
                          
                        ))
                    }

                       {provided.placeholder}
                       </div>
                        )
                    }
                    
                </Droppable>
                   
                </div>


                {/* DONE */}
                <div className='bg-[#F5F5F5]  rounded-t-lg  pt-5 px-6  relative  pb-10'>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-[#8BC48A] rounded w-2 h-2'></div>
                            <h4 className='font-Inter font-medium text-base'>Done</h4>
                            <div className='rounded-full bg-[#E0E0E0] flex w-5 h-5 text-xs items-center font-Inter  justify-center text-[#625F6D]'>2</div>
                        </div>

                    </div>
                    <hr className="h-[2px] my-4  bg-[#8BC48A] border-0 dark:bg-gray-700"/>

                    <div className='flex flex-col gap-5  overflow-y-scroll scrollbar-hide absolut bottom-0 top-[90px] right-5 left-5 mb-0.5'>
                        {
                            Done.map((done, index) => (
                                 <div className='  bg-[#FFFFFF] w-full  rounded-xl p-3 px-5 pb-6' key={index}>
                            <div className='flex items-center justify-between pt-2 relatve'>
                                <h3 className='font-Inter bg-[#e6f3eb] text-xs rounded-[4px] py-1 px-1.5 text-[#82bf81]'>{done.state}</h3>
                                <div className='text-xl'>
                                    <BiDotsHorizontalRounded/>
                                </div>
                            </div>
                            <h1 className='font-Inter font-semibold text-lg pt-1'>{done.name}
                            </h1>
                            <img className='object-cover w-full'
                                src={done.svg1}
                                alt=""/> {/*Image section last  */}
                            <div className='flex items-center justify-between pt-8 relative'>
                                <div>
                                    {/* <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src={done.img1} alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src={done.img2} alt=""/> */}
                                    {/* {
                                        done.img1 &&  
                                    } */}
                                    <img className=' w-7 h-7 rounded-full object-cover border-2 border-white absolute z-40 top-7 ' src={done.img1} alt=""/>
                                    <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-30 top-7 left-5 ' src={done.img2} alt=""/>
                                    {
                                        done.img3 && <img className='w-7 h-7  rounded-full object-cover border-2 border-white absolute z-20 top-7  left-10' src={done.img3} alt=""/>
                                    }
                                   

                                </div>
                                <div className='font-Inter flex items-center gap-3 '>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486] text-lg'>
                                            <BiMessageAltDots/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>{done.comments} comments</h4>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <div className='text-[#787486]'>
                                            <BsFiles/>
                                        </div>
                                        <h4 className='text-xs text-[#787486]'>{done.files} files</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                       
                    </div>
                </div>
            </div>

        </div>
         </DragDropContext>
       
    )
}

export default Appcontent
