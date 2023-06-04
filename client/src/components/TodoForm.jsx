//this components is responsible for taking user input
import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'//communicate react with redux
import { addNewTodo } from '../redux/actions';

const TodoForm = () => {
  const [text, setText] = useState("");//text is a constant variable need function to update/reassign it
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    //  console.log(e.target.value)
    setText(e.target.value);
  }
useEffect(()=>{
  setError(false)
},[text])
  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!text.length){setError(true)}else{
    dispatch(addNewTodo(text));
    setText("")}
     }
  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        placeholder='Chat here..'
        className="input"
        onChange={onInputChange} //will be called on every input
        value={text} />
        <button className='bton' onClick={onFormSubmit}>ok</button>{error?<span style={{marginLeft:4,fontSize:11,color:'red',fontWeight:'bold'}}>Cant be empty!</span>:""}
    </form>//  value={text} = default is empty string
  )
}
export default TodoForm;