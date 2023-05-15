import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteAllUser } from '../Store/Slices/UserSlice';
import { clearAllUsers } from '../Store/Actions';
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const DeleteAll = ()=>{
    dispatch(clearAllUsers())
  }
  return (
    <div>
      <button onClick={()=>DeleteAll()}>DeleteAllUser</button>
    </div>
  )
}

export default DeleteAllUser