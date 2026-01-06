import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
export const store = configureStore({
    reducer:{
        cart:cartSlice   //ye hamara store k andar store hogaya ek slice banayi aur yaha pe daldi
    }
})
















//there are two methods to take data from stores useDispatch and useSelector
//how useDispatch works: useDispatch first goes to our reducers and from reducers it goes to our store.
//how useSelector works:useSelector brings data from state
//redux k andar jo bhi cheeze ho wo uske andar slices k form me hota hai
//reducers are features what work we want to do with the help of store// kya kya karana chahte hai store se
//first we have installed redux using command mpm i  @reduxjs/toolkit then we have installed react-redux for binding























