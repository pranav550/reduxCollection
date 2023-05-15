import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../Actions";


const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        // deleteAllUser(state,action){
        //     //state.length=0
        //     return []
        // }

    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
           return []
        })
    }
})
console.log("2222",userSlice.actions)
export default userSlice.reducer;
//export const {addUser, removeUser, deleteAllUser} = userSlice.actions
export const {addUser, removeUser} = userSlice.actions

