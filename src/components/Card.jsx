import React from 'react'
import image1 from "../assets/image1.avif"
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {//we will pass prop her to make card for each item
  let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-4 shadow-lg hover:border-2 border-green-300'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
      <img src={image} alt="" className='object-cover rounded-lg' />
      </div>
      <div className='text-2xl font-semibold'>
      {name}
      </div>
      <div className='flex justify-between items-center'>
          <div className='text-lg font-bold text-green-500'> Rs {price}</div>
      <div className='flex justify-between items-center gap-2 text-green-500 text-large font-semibold'>{type ==="veg"?<LuVegan />:<GiChickenOven />} <span>{type}</span></div>{/*veg non veg condition*/}
      </div>
      <button className='w-full p-3 rounded-lg bg-green-300 text-white hover:bg-green-400' onClick={()=>{dispatch(AddItem({id:id, name:name, price:price,image:image,qty:1})); toast.success("Item Added")}}>Add to Dish</button>{/* Add item reducer*/}
    </div>
  )
}

export default Card
