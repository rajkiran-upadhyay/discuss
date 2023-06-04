//display all todos
import { useEffect } from "react"
import { deleteTodo, getAllTodos } from "../redux/actions/index"
import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import Tabs from "./Tabs"
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type"
const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)//retrieve todos or fetch redux data
    const currentTab = useSelector(state => state.currentTab)
    useEffect(() => {
        dispatch(getAllTodos())
    }, []);
    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)//retrieve only not true values which is false/default
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)//done property is added only when click*** not from doc
        }
    }
    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) { dispatch(deleteTodo(_id)) }
        });
    }
    return (
        <article>
            <div className="container3">
                <Tabs currentTab={currentTab} />
                {
                    todos.some(todo => todo.done) ? (<button
                        className="button clear"
                        onClick={removeDoneTodos} > Remove done Chats</button>) : null
                }
            </div>
            <ul className="ull">
                {
                    getTodos().map(todo => (//dispaly Todo component here
                        <Todo
                            key={todo._id}
                            todo={todo} //send each document/row/record /object
                        />
                    ))
                }
            </ul>
        </article>
    )
}
export default Todos