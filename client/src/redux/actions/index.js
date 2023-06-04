//api calls are done in actions
import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOOGLE_TAB } from './type';
// const API_URL = 'http://localhost:8000';//main api url or dev url
const API_URL = 'https://renderdiscuss.onrender.com'
export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });//await works inside async function
        dispatch({ type: ADDNEW_TODO, payload: res.data })//goes to todoReducer.js
    } catch (error) {
        console.log('error while calling addNewTodo api', error.message)
    }
}
///////////////////////////////////////////////////////////////////////////////
export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        let p=res.data
        console.log("rrro",p)
        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log('error while calling getAllTodos api', error.message)
    }
}
////////////////////////////////////////////////////////////////////////////////
export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: res.data })
    } catch (error) {
        console.log('error while calling getAllTodos api', error.message)
    }
}
////////////////////////////////////////////////////////////////////////////////
export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/toda/${id}`, { data });
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log('error while calling update todo api', error.message)
    }
}
////////////////////////////////////////////////////////////////////////////
export const deleteTodo = (id) => async (dispatch) => {

    try {
        const res = await axios.delete(`${API_URL}/todelete/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('error while calling del todo api', error.message)
    }
}
////////////////////////////////////////////////////////////////

export const toggleTab = (tab) => (dispatch) => {

    dispatch({ type: TOOGLE_TAB, selected: tab })

}