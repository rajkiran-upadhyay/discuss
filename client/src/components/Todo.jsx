
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useState } from "react";
//Todos will run Todo
const Todo = ({ todo }) => {//this Todo component will be displayed inside Todos inside loop.
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);
    const dispatch = useDispatch()
    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);//dont show input field after submit

        dispatch(updateTodo(todo._id, text))

    }

    return (
        <>
            <div className="container1">
                <li onClick={() => { dispatch(toggleTodo(todo._id)) }} className="task"
                    style={{ textDecoration: todo.done ? 'line-through' : '', color: todo.done ? '#bdc3c7' : '#34495e' }}>

                    <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>
                    <form onSubmit={onFormSubmit} style={{ display: editing ? 'inline' : 'none' }} >
                        <input
                            type="text"
                            value={text}
                            onClick={(e)=>{e.stopPropagation();}}
                            className="edit-todo"
                            onChange={(e) => {setText(e.target.value)}} />
                    </form>
                    <span id="ok" className="icon" onClick={(e)=>{e.stopPropagation();onFormSubmit(e)}}>ok</span>
                    <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}><i className="fas fa-trash" /></span>

                    <span className="icon" style={{ marginLeft: 3 }} onClick={(e) => { e.stopPropagation();setEditing(prevState => !prevState)}}><i className="fas fa-pen" /></span>



                </li>
            </div>
        </>
    )//todo._id here todo represent a record/row/doc/obj
}
export default Todo;