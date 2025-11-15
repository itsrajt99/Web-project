import React from 'react'
import image1 from "../assets/image1.avif"
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem ,IncrementQty,DecrementQty} from '../Redux/cartSlice';

const Card2 = ({name,id,price,image,qty}) => {
    let dispatch =useDispatch()
  return (
    <>
    <div className='w-full h-[120px]  p-2 shadow-xl flex justify-between '>
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-xl '> 
                <img src={image} alt="" className='object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-2'>
                <div className='text-green-500 text-md font-bold'>{name}</div>
                <div className='w-[80%] h-[50px] bg-gray-400 flex rounded-md overflow-hidden shadow-xl text-green-500 font-bold border-2 border-green-300 text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer'onClick={()=>{dispatch(DecrementQty(id))}}>-</button>
                    <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer'onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
           <span className='text-xl text-green-400 font-bold'>Rs {price}/</span>
           <MdDelete  className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
    </>
  )
}

export default Card2
