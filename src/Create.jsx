import React, { useState } from 'react'
import { addUser } from './UserReducer'
import {  useDispatch } from 'react-redux'
import {nanoid } from "@reduxjs/toolkit";

function Create({onclose}) {
 const [name,setName]= useState('');
 const [email,setEamil]= useState('');
 const dispatch = useDispatch()
 const id=nanoid()
 
 const addUserHandler = (e)=>{
    e.preventDefault();
    dispatch(addUser({id,name,email}));

 }
  return (
   
      <div className="container mt-2 ">
      <form onSubmit={addUserHandler}>
        <div className="row ">
        <div className='col-md-6'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control border border-1 border-success"
            id="name"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}
            spellCheck="true"
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
            value={email}
            onChange={e=>setEamil(e.target.value)}
            required
          />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-sm m-3 ">Submit</button>
        <button className="btn btn-info btn-sm" onClick={onclose}>Close</button>
      </form>
    </div>
      
  
  )
}

export default Create
