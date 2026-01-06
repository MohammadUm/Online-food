import React from 'react'
import image1 from "../assets/image1.avif";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

function Card2({name,id,price,image,qty}) {
  let dispatch=useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>{/*Right*/}
      <div className='w-[60%] h-full flex gap-5'>{/*Left*/}
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
        <img src={image} alt="food" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'> 
            <div className='text-lg text-gray-600 font-semibold '>{name}</div>
            <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
              <button className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200' onClick={()=>{qty>1? dispatch(DecrementQty(id)):1}}>-</button>{/*agar qty 1 se badi hai to decrement hogi jab qty 1 se choti hogi tab 1 hi rahegi*/}
              <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
              <button  className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200' onClick={()=>{ dispatch (IncrementQty(id))}}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-green-500 font-semibold'>Rs {price}</span>
        <RiDeleteBinLine className='h-[30px] w-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}  />
      </div>
    </div>
  )
}

export default Card2
