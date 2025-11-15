import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
const Nav = () => {
  let {input,setInput,Cate,setCate,showCart,setShowCart} =useContext(dataContext)
  useEffect(()=>{
    let newlist = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) )
    setCate(newlist)
  },[input]);

   let items = useSelector(state=>state.cart);
   console.log(items)

  return (
   <>
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 sticky'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'> 
        <MdFastfood className='w-[30px] h-[30px] text-green-500 '/>
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-6 rounded-md shadow-xl cursor-pointer md:w-[70%]'onSubmit={(e)=>e.preventDefault()}>
        <IoIosSearch className='text-green-500 w-[20px] h-[20px] '/>
        <input type='text' placeholder='Enter Your Dish...' className='w-[100%] outline-none text-[16px] md:text-[20px]'onChange={(e)=>setInput(e.target.value)} value={input}></input>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'> 
         <span className='absolute top-0 right-2 text-green-500 font-bold'>{items.length}</span>
        <FaShoppingCart className='w-[30px] h-[30px] text-green-500 cursor-pointer 'onClick={()=>setShowCart(true)} />
      </div>
    </div>
   </>
  )
}

export default Nav
