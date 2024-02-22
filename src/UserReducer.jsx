import { createSlice, nanoid } from "@reduxjs/toolkit";

export const userSlice = createSlice({

   name:"users",
   initialState:[{id:'ABCDEFGHIJKLMN',name:"abc" ,email:"xyz@gmail.com"}],
   reducers:{
    addUser:(state,action)=>{
  
    state.push(action.payload)
    console.log('success')
  },
  removeUser:(state,action)=>{
    const {id,name,email}=action.payload;
 const   user = state.find(user=>user.id==id)
 // state.users = state.users.filter(user=>user.id!==action.payload)
 if(user){
  return state.filter(f=>f.id!==id)
 }
  },
  updateUser:(state,action)=>{
   const {id,name,email}=action.payload;
   const   user = state.find(user=>user.id==id)
   if(user){
    user.id=id;
    user.name=name;
    user.email=email;
   }

  }


}})

export const {addUser,removeUser,updateUser}=userSlice.actions;
export default userSlice.reducer