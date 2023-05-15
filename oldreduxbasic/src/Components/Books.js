import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from '../redux container/Actions/bookAction'
const Books = () => {
   const noOfBooks = useSelector(state=>state.NumberOfBooks)
   const dispatch = useDispatch();
  return (
    <div>
      <h1>Books</h1>  
      <p>Count Books: {noOfBooks}</p>
      <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
    </div>
  )
}

export default Books