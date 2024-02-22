import React, { useState } from 'react'
import Create from './Create';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './UserReducer';
import Update from './Update';

function Home() {
  const users = useSelector(state=>state.users)
  const dispatch =useDispatch()
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setUpateFormOpen] = useState(false);
  const [updateUserId, setUpdateUserId] = useState(null);

  const openForm = () => {
    setIsFormOpen(true);
  };
  const openUpadateForm = (userid) => {
    setUpateFormOpen(true);
    setUpdateUserId(userid)
  };


  const closeForm = () => {
    setIsFormOpen(false);
  };
  const closeUpdateForm = () => {
    setUpateFormOpen(false);
  };
  const handleDelete = (id)=>{
    dispatch(removeUser({id:id}))
  }
  return (
    <div className='container'>
    <h2>CRUD App</h2>
    <button className='btn btn-success my-3' onClick={openForm} >Create +</button>
    {isFormOpen && <Create onclose={closeForm}/>}
    {isUpdateFormOpen&& <Update userid={updateUserId} onclose={closeUpdateForm}/>}
    <table className='table'>
    <thead className='table-dark'>
      <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody className='table-primary'>
     {
      users.map((user,index)=>(
       
        <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        <button  className='btn btn-primary mx-2 btn-sm' onClick={()=>openUpadateForm(user.id)}>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={()=>handleDelete(user.id)}>Delete</button>
        </td>
        </tr>
       
      ))
     }
     </tbody>
    
    

    </table>
      
    </div>
  )
}

export default Home
