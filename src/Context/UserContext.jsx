import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const dataContext =createContext();
const UserContext = ({children}) => {
let [input,setInput]= useState("");
let [Cate,setCate] = useState( food_items);
let [showCart,setShowCart] = useState(false);
 let data ={
  input,
  setInput,
  Cate,
  setCate,
  showCart,
  setShowCart
 }
  return (
    <>
      <div>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
      </div>
    </>
  )
}

export default UserContext
