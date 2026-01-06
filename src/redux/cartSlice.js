import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
          let existItem  = state.find((item)=>item.id === action.payload.id);
          if(existItem){
           return state.map((item)=>(item.id === action.payload.id?{...item, qty:item.qty +1}:item))//agr item ki id aur uske payload ki id mtlb jo item humne liya hai uski id aur item ki id jo humare cart me store hai agr un dono ki id match karti hai to wha pe wo check karega ki item ko to rehne do uski qty ko +1 kardo
          }else{
            state.push(action.payload)
          }
            
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        IncrementQty:(state,action)=>{
          return state.map((item)=>(item.id === action.payload?{...item, qty:item.qty +1}:item))//same as above action.payload ki id mtlb humne click kiya hai jis product pe
        },
         DecrementQty:(state,action)=>{
          return state.map((item)=>(item.id === action.payload?{...item, qty:item.qty -1}:item))
        }
    }
})

export const {AddItem,RemoveItem,IncrementQty,DecrementQty} = cartSlice.actions
export default cartSlice.reducer
//the above will be accessed in store.js