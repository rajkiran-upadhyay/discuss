import * as actionTypes from '../actions/type'
//reducer acts like event listener , if match found then they will update the state
export const todosReducers = (state = [], action) => {//action ={ type: ADDNEW_TODO, payload: res.data }
    switch (action.type) {                           //state is previous value
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state] //we store response.data in action.payload and ...state is previous value
            //and return new array [action.payload, ...state]  new data + old state

        case actionTypes.GETALL_TODO:
            return action.payload  //no prev state ! will be duplicated

        case actionTypes.TOGGLE_TODO:
            return state.map((todo) => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))

        case actionTypes.UPDATE_TODO:
            return state.map((todo) => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))

        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id)

        default:
            return state;
    }
}