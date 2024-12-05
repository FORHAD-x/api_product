import React from 'react'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";

export const Details = () => {
  const ProductData = useSelector((alu)=>alu.ProductData.value)
  console.log(ProductData)
  return (
    <>
    
    <div className='container'>
      <div className='pl-[100px] pt-[100px]'>
      <div className="details flex gap-10 ">
        <div className="details_image w-[400px] h-[400px] overflow-hidden">
          <img src={ProductData.photo_url} alt="image" />

        </div>
        <div className="details_text ml-5 ">
        <h2 className='mt-3 text-black font-semibold text-[25px]'>{ProductData.title} </h2>
        <div className="icon flex gap-2 text-[#72BF44] items-center">
          <p><FaStar/></p>
          <p><FaStar/></p>
          <p><FaStar/></p>
          <p><FaStar/></p>
          <p><FaStar/></p>
          <p className='text-black'>7 reviews</p>
          
          </div>
        <h2 className='mt-3 text-black'>Product Id: {ProductData.id} </h2>
          
          <h2 className='mt-3 text-black font-medium'>{ProductData.name}</h2>

          <div className='bg-[#F2F2F2] inline-block w-[150px]'>
            <h2 className='mt-3 pl-1 '>Special Price</h2>
          <h2 className='mt-2 flex text-black font-bold pl-1 pb-3'>{ProductData.price}</h2>
          </div>

          <h2 className=' mt-3 text-lg font-bold'>Quick Overview</h2>
          <h2 className='mt-3 text-black'>● screen_size- {ProductData.screen_size} </h2>
          <h2 className='mt-3 text-black'>● storage- {ProductData.storage} </h2>
          <h2 className='mt-3 text-black'>● display_resolution- {ProductData.display_resolution} </h2>
          <h2 className='mt-3 text-black'>● warranty- {ProductData.warranty} </h2>
        </div>
        
      </div>
      <div className='box flex gap-9'>
        
      <div className='box1'>
              <h1 className='bg-black text-white text-lg font-bold py-3 px-3 inline-block'>Specifications</h1>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> brand<span className='font-normal'> {ProductData.brand}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> processor<span className='font-normal'> {ProductData.processor}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> ram<span className='font-normal'> {ProductData.ram}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> storage<span className='font-normal'> {ProductData.storage}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> screen_size<span className='font-normal'> {ProductData.screen_size}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> battery_life<span className='font-normal'> {ProductData.battery_life}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> weight<span className='font-normal'> {ProductData.weight}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> warranty<span className='font-normal'> {ProductData.warranty}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> battery_backup<span className='font-normal'> {ProductData.battery_backup}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> display_type<span className='font-normal'> {ProductData.display_type}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> charger_capacity<span className='font-normal'> {ProductData.charger_capacity}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> touch<span className='font-normal'> {ProductData.touch}</span></h2>
      <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between border-b border-b-[#e7dbdb] ml-2'> display_resolution<span className='font-normal'> {ProductData.charger_capacity}</span></h2>
            </div>
            
      <div className='box2'>
          <h1 className='bg-black text-white text-lg font-bold py-3 px-3 inline-block'>Details</h1>
          <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between ml-2'>{ProductData.description}</h2>
          <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between ml-2'>{ProductData.operating_system}</h2>
          <h2 className='mt-3 text-black w-[500px] font-bold flex justify-between ml-2'><img src={ProductData.photo_url} alt="image" /></h2>

      </div>    

      </div>
      </div>

    </div>
    </>
  )
}
