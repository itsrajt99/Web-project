import React from 'react'
//import image1 from "../assets/image1.avif"
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import {useDispatch} from 'react-redux';
import { AddItem } from '../Redux/cartSlice';
import { toast } from 'react-toastify';
const Card = ({name,image,id,price,type}) => {
  let dispatch=useDispatch()
  return (
    <>
    <div className='w-[280px] h-[400px] bg-white p-3 rounded-xl flex flex-col gap-3 shadow-2xl hover:border-2 border-green-400'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-xl '>
         <img src={image} className='object-cover'/>
        </div>
        <div className='text-2xl font-semibold text-center'>
         {name}
        </div>
        <div className='w-full flex justify-between items-center'> 
         <div className='text-green-500 text-lg font-bold'>Rs-{price} /</div>
         <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />} <span>{type}</span></div>
        </div>
        <button className='w-full p-3 bg-green-500 rounded-xl cursor-pointer text-white text-xl hover:bg-green-700 transition-all'onClick={()=>{dispatch(AddItem({id:id, name:name,price:price,image:image,qty:1})); 
        toast.success("Item Added")}}>Add to Cart</button>
    </div>
    </>
  )
}

export default Card
