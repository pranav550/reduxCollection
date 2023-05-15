import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Store/Slices/UserSlice';

const DisplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.users
    })
    const deleteUser = (id) =>{
      dispatch(removeUser(id))
    }
  return (
    <div>
        {data.map((user,id)=>{
            return <li key={id}>{user}
            <button className="btn btn-delete" onClick={()=>deleteUser(id)}>
              Delete
            </button>
            </li>

        })}
    </div>
  )
}

export default DisplayUser