import { buybook } from "../Actions/bookTypes"

const initialState={
    NumberOfBooks:20
}

const bookReducer=(state=initialState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case buybook:return {
                ...state,
                NumberOfBooks:state.NumberOfBooks-1
            }

        default: return state;        
    }
}

export default bookReducer;