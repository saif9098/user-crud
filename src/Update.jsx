import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './UserReducer';

function Update({userid,onclose}) {
  const dispatch =useDispatch();
  const users = useSelector(state=>state.users);
  const existingUser = users.filter(f=>f.id===userid)
  const {name,email}= existingUser[0]
  const [newname,setName]= useState(name);
  const [newemail,setEamil]= useState(email);
 function updateuserHandler(e){
  e.preventDefault();
 dispatch(updateUser({
  id:userid,
  name:newname,
  email:newemail
 }))
 }
  return (
    <>
    
      <div className="container mt-2 ">
      <form onSubmit={updateuserHandler} >
        <div className="row ">
        <div className='col-md-6'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control border border-1 border-success"
            id="name"
          value={newname}
          onChange={e=>setName(e.target.value)}
            required
          />
        </div>
        </div>

        <div className="row ">
        <div className='col-md-6'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control border border-1 border-success"
            id="email"
            name="email"
            value={newemail}
            onChange={e=>setEamil(e.target.value)}
            required
          />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-sm m-3 ">Update</button>
        <button className="btn btn-info btn-sm" onClick={onclose}>Close</button>
      </form>
    </div>
      
  
    </>
  )
}

export default Update
