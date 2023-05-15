import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { fakeUserData } from '../api'
import {useDispatch} from 'react-redux';
import { addUser } from '../Store/Slices/UserSlice';
import DisplayUser from './DisplayUser';

const UserDetails = () => {
    const dispatch = useDispatch();

    const addNewUser = (name)=>{
        console.log("1111",name)
        dispatch(addUser(name))
    } 
  return (
    <div>
    <h1>List Of User Details</h1>
    <button onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
    <ul>
       <DisplayUser/>
    </ul>
    <DeleteAllUser/>   
    </div>
  )
}

export default UserDetails