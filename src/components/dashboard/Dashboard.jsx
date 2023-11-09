import React, { useEffect, useState } from 'react'
import Layout from '../../Pages/Layout'
import Subcontent from '../Subcontent'
import Appcontent from '../Appcontent'
import { FaChartArea, FaChartLine, FaUser } from 'react-icons/fa'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const label= []

export const Dashboard = () => {
    const [data, setData] = useState({
        labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });

      useEffect(()=> {
        const fetchData= async()=> {
            const url = 'https://jsonplaceholder.typicode.com/comments'
            const labelSet = []
            const dataSet1 = [];
            const dataSet2 = [];
          await fetch(url).then((data)=> {
              console.log("Api data", data)
              const res = data.json();
              return res
          }).then((res) => {
              console.log("ressss", res)
             for (const val of res) {
                 dataSet1.push(val.id);
                 dataSet2.push(val.postId)
                 // labelSet.push(val.name)
             }
             setData({
                 labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                 datasets: [
                   {
                     label: 'Dataset ID',
                     data:dataSet1,
                     borderColor: 'rgb(255, 99, 132)',
                     backgroundColor: 'rgba(99, 132, 0.5)',
                   },
                   {
                     label: 'Dataset ID2',
                     data:dataSet2,
                     borderColor: 'rgb(53, 162, 235)',
                     backgroundColor: 'rgba(53, 235, 0.5)',
                   },
                 ],
               })
             console.log("arrData", dataSet1, dataSet2)
          }).catch(e => {
                 console.log("error", e)
             })
         }
         
         fetchData();
     },[])

    return (
        <>
            <Layout>
            {/* <div className='sm:mx-12  h-screen fixed sm:left-64 left-20 right-0'> */}
            {/* <div className='overflow-y-scroll no-scrollbar absolute bottom-0 top-[79px] left-0 right-0 scrollbar-hide scroll-smooth pt-10'> */}
                <div className='flex gap-10 items-center '>
                    <div className='bg-[#f7f7f9] ssm:w-64 ssm:h-[85px] rounded-2xl flex items-center justify-center gap-5 shadowxl '>
                        <div className='rounded-full w-11 h-11  bg-[#e5e7e9] flex justify-center items-center'>
                            <FaUser />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-[#787486] font-Inter text-sm '>Number of employees</p>
                            <p className='text-[#000000] font-Inter text-xl font-medium'>250</p>
                        </div>
                    </div>

                    {/* Growth rate */}
                    <div className='bg-[#f7f7f9] ssm:w-64 ssm:h-[85px] rounded-2xl flex items-center justify-center gap-5 shadowxl '>
                        <div className='rounded-full w-11 h-11  bg-[#e5e7e9] flex justify-center items-center'>
                            <FaChartArea  />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-[#787486] font-Inter text-sm '>Growth Rate</p>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#000000] font-Inter text-xl font-medium'>120</p>
                                <div className='flex items-center gap-2'>
                                     <BsFillArrowUpRightCircleFill className='text-[#9edac9]' size={13} />
                                     <p className='font-Inter text-xs text-[#9edac9]'>+2.4%</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div>
                <div style={{width:'80%', height:'50%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>
                </div>

            {/* </div> */}
            {/* </div> */}
            </Layout>
        </>

    )
}
