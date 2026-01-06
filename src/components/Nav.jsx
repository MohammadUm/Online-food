import React, { useContext, useEffect } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
function Nav() {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)//here we are bringing input and setInput with the help of useContext
  useEffect(()=>{ //jab jab input ki value kuch na kuch hogi tab tab wo us function kao chalata jaiga
    let newlist = food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input)) //on food items we have applied filter func and in item food name is there and inside it includes our input
    setCate(newlist )
  },[input])//here input is an dependency
  let items = useSelector(items=>items.cart)//.cart is used to access the items
  console.log(items)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>{/* responsiveness on medium devices*/}
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                 <IoFastFoodOutline  className='w-[30px] h-[30px] text-green-500'/>
            </div>
                <form className=' w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>{/* responsiveness on medium devices*/}
                <FaSearch className='text-green-500 w-5 h-5  '/>
                <input type='text' placeholder='Search items.... ' className='w-full outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>{/* responsiveness when it will come from medium to large devices the text will become 20px*/}
                </form>
                <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative 'onClick={()=>{
                  setShowCart(true)//we want to show the cart thats why we have takes setShowCart True
                }}>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>{/*add to cart functionality*/}
                    <LuShoppingBag  className='w-[30px] h-[30px] text-green-500 ' />
                </div>
    </div>
  )
}

export default Nav
