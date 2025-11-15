import React, { useContext, useState } from 'react'
import Nav from '../Component/Nav'
import { RxCross2 } from "react-icons/rx";
import { Categories } from '../Category'
import Card from '../Component/Card'
import { food_items } from '../food'
import { dataContext } from '../Context/UserContext'
import Card2 from '../Component/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const Home = () => {
  let {Cate,setCate,input,showCart,setShowCart} = useContext(dataContext)
  function filter(category){
    if(category==='All'){
      setCate(food_items)
    }
    else{
      let newList = food_items.filter((item)=>(item.food_category===category))
      setCate(newList);
    }
  }

  let items = useSelector(state=>state.cart)
  
  let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryFee = 20;
  let taxes = subtotal*0.5/100
  let total = Math.floor(subtotal+deliveryFee+taxes);
  return (
    <>
    <div className=' bg-slate-200 w-full min-h-[100vh]'><Nav/>
    {!input?<div className='flex flex-wrap justify-center items-center gap-4 w-[100%]'>
      {Categories.map((item)=>{
       return <div className='w-[150px] h-[140px] bg-white flex flex-col items-start gap-5 p-8 justify-center text-[17px] font-semibold text-gray-600 rounded-xl shadow-2xl hover:bg-green-300 cursor-pointer transition-all duration-200 ' onClick={()=>filter(item.name)}>
        {item.icon}
        {item.name}   
        </div>
      })}
    </div>:null}
    
    <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
      {Cate.map((item)=>(
        <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
      ))}
    </div>

    <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-700 overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
      <header className='w-[100%] flex justify-between'>
        <span className='text-green-400 text-[18px] font-bold'>Order Items</span>
        <RxCross2 className='text-green-400 text-[18px] font-bold cursor-pointer w-[20px] h-[30px]'onClick={()=>setShowCart(false)}/>
      </header>
      {items.length>0? <>
      
      <div className='w-full mt-8 flex flex-col gap-5'>
        {items.map((item)=>(
          <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
        ))}
      </div>
      <div className='w-full border-t-2 border-b-2 border-gray-500 mt-5 flex flex-col gap-2 p-6'>
       <div className='w-full flex justify-between items-center'>
        <span className='text-md text-gray-500 font-semibold'>SUB TOTAL</span>
        <span className='text-green-400 font-bold text-md'>Rs-{subtotal} /</span>
       </div>
       <div className='w-full flex justify-between items-center'>
        <span className='text-md text-gray-500 font-semibold'>DELIVERY</span>
        <span className='text-green-400 font-bold text-md'>Rs-{deliveryFee} /</span>
       </div>
       <div className='w-full flex justify-between items-center'>
        <span className='text-md text-gray-500 font-semibold'>TAXES</span>
        <span className='text-green-400 font-bold text-md'>Rs-{taxes} /</span>
       </div>
      </div>
      <div>
         <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-500 font-semibold p-4'>TOTAL</span>
        <span className='text-green-400 font-bold text-lg'>Rs-{total}</span>
       </div>
       <button className='w-full p-3 bg-green-500 rounded-xl cursor-pointer text-white text-xl hover:bg-green-700'onClick={()=>{toast.success("ORDERED")}}>PLACE ORDER</button>
      </div>
      </>:
      <div className='h-full w-full text-xl font-bold flex justify-center items-center text-green-500'>
        Empty Card
        </div>}
     
    </div>

    </div>
    
    </>
    
    
  )
}

export default Home
