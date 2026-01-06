import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'//food items array imported here
import { GiChickenOven } from "react-icons/gi";
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {

let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

  function filter(category){
    if(category === "All"){
      setCate(food_items)//food_items means all items
    }else{
       let newList = food_items.filter((item)=>(item.food_category===category))//if item food_category matches this category show it and it will return a new list
       setCate(newList)//with the help of setCate we will add newList in it

    }
  }

  let items = useSelector(state=>state.cart)//items will come in cart

  let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)//initial total will be zero and later item price will be added
  let deliveryFee=20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes)//Math.Floor will remove decimal
  
     
  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
      <Nav/>{/*ifthere is something inside the input dont show category*/}
      {!input? <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {categories.map((item)=>{// item is a counter of map here we are using map to print one by one                                                                                                                                  //when we woill click on categories filter function will be called in that filter func item.name will go
            return <div  className='w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-lg hover:bg-green-300 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>{/* category card  CSS*/}
              {item.icon}{/*will display icon first*/}
              {item.name}
             
              </div>
            })}
      </div>:null}{/*if there is something inside the item will keep it null*/}
     

      <div className='w-full flex flex-wrap gap-5  px-5 justify-center items-center pt-8 pb-8'>
            {cate.length > 1 ? cate.map((item)=>(//first we have map food_items the after that we have taken cate both works the same
          <Card 
          name={item.food_name} 
          image={item.food_image}
          id={item.id}
          price={item.price}
          type={item.food_type}/> //props passed in Card
         )): <div className='text-center text-2xl text-green-500 font-semibold pt-5c'>No dish found</div> }
        
      </div>
      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 p-6 bg-white shadow-xl transition-all duration-500 flex flex-col  overflow-auto  ${showCart?"translate-x-0":"translate-x-full"}` } >{/*Cart styling and Functionality  here we have use overflow auto for cart scrolling*/}
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'> Order Items</span>
          <RxCross2 className='text-green-400 text-[18px] font-semibold h-7.5 w-7.5 cursor-pointer hover:text-gray-600 ' onClick={()=>{setShowCart(false)}}/>
        </header>
        {items.length>0?   <>
         <div className='w-full mt-9 flex flex-col gap-8'>
         {items.map((item)=>{
          return <Card2  key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
         })}
         </div>
               <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
                  <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                        <span className='text-green-400  text-lg font-semibold'>Rs {subtotal}/-</span>
                   </div>
                   <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>DeliveryFee</span>
                        <span className='text-green-400  text-lg font-semibold'>Rs {deliveryFee}/-</span>
                   </div>
                   <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                        <span className='text-green-400  text-lg font-semibold'>Rs {taxes}/-</span>
                    </div>

                </div>
                     <div>
                       <div className='w-full flex justify-between items-center p-9'>
                         <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                         <span className='text-green-400  text-2xl font-semibold'>Rs {total}/-</span>
                      </div>
                  </div>
                  <button className='w-[80%] p-3 mx-auto rounded-lg bg-green-300 text-white hover:bg-green-400 transition-all  'onClick={()=>{toast.success("Order Placed")}}>Place Order</button>
                  </>:<div className='text-center text-2xl text-green-500 font-semibold pt-5c'>
                  Empty Cart
                  </div>
                  }
      
      </div>
    </div>
  )
}

export default Home

{/*note: to send the input value to the whole app we will use context api*/}