import React, { useEffect, useState } from 'react'
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";


import { useDispatch } from 'react-redux'
import { ProductDetails } from '../slices/ProductSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Product = () => {
  const [data,setData] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/666554d2acd3cb34a854dddf')
  .then((response)=> {
    setData(response.data.record);
  })
  .catch((error)=> {
    console.log(error);
  })
  },[])
  console.log(data)

  const handelDetails = (clickDetails)=>{
    dispatch(ProductDetails(clickDetails))
    navigate("/Details")
    localStorage.setItem("ProductData",JSON.stringify(clickDetails))
  }
  return (
    <>
      <div className='navbar bg-black p-7 flex ' >
      <img src="image/ryans-logo.svg" alt="" className='w-[105px]' />
      <ul className='flex gap-10 m-auto group'>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Monitor</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Gaming</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Software</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Camera</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Printer</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Sound</li>
        <li className='font-semibold text-white hover:text-lime-500 transition-[.4s]  cursor-pointer'>Accessories</li>
      </ul>
      <div className='text-white flex gap-3'>
        <li className='list-none text-[20px]  '><FaCartArrowDown /></li>
        <li className='list-none text-[20px]  '><MdOutlineFavorite /></li>
        <li className='list-none text-[20px]  '><FaCartArrowDown /></li>
        <li className='list-none text-[20px]  '><RiAccountCircleFill /></li>
      </div>
      </div>
      <div className='bg-[#F2F2F2]'>
    <div className="container">
      
      <div className='flex  flex-wrap gap-2   justify-center'>
        <div className='px-20'>
          <img src="public/image/hp.webp" alt="" className='' />
          <div className='bg-[#e9e4e4]'>
          <ul className='flex justify-center items-center py-2 gap-2'>
          <FaMoneyBillAlt className='text-[#3EC327]'/>
              <li className='font-bold text-[#AD7A2A]'> 0% EMI</li>|
              <FaUserTie className='text-[#3EC327]'/>
              <li className='font-bold text-[#AD7A2A]'> 24/7 Online Support</li>|
              <FaCreditCard className='text-[#3EC327]'/>
              <li className='font-bold text-[#AD7A2A]'> No charge on card payment</li>|
              <TbTruckDelivery className='text-[#3EC327]'/>
              <li className='font-bold text-[#AD7A2A]'> Cash on delivery in 64 districts</li>
          </ul>
          </div>
        </div>
          {
            data.map((item)=>{
              return(

            <div className="Product w-[300px] bg-[#ffffff] p-5 group">
                <div className="Product_img overflow-hidden w-[200px] h-[200px] m-auto">
                  <img src={item.photo_url} alt="image" className='group-hover:scale-[1.5] transition-[.3s] delay-75'/>
                </div>
                <div className="Product_Details font-semibold h-[200px] pt-5 flex justify-center items-center flex-col">
                    {/* <h2 className='mt-3 text-white'>ID: {item.id}</h2> */}
                    <h2 className='mt-3 text-black font-bold'>{item.title}</h2>
                    <h2 className='mt-3 text-black text-center font-normal'>{item.description}</h2>
                    <h2 className='mt-3 text-black font-bold'>PRICE - {item.price}</h2>
                </div>
                <button onClick={()=>handelDetails(item)} className='mt-7 py-3 px-14 font-semibold  bg-[#131212] rounded-[10px] flex m-auto  hover:bg-[#706464] transition-[.4s] text-white '>ORDER 🛒</button>

            
            </div>
          
           
              )


            })
          }
    </div>
    </div>
      </div>
    </>
  )
}

