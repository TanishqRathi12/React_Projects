import React, { useState } from 'react'

function Input() {
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const handleAdd=()=>{
        setTodos([...todos,{todo}])
        setTodo=("");
    }
    const handleDone=()=>{

    }
    const handleEdit=()=>{

    }
    const handleDelete=()=>{

    }
    const handleChange=(e)=>{
       setTodo(e.target.value);
    }
  return (
   <>
   <div class=" grid grid-cols-6 gap-2 sm:gap-5 place-content-center h-60 sm:grid-cols-12 ">
        <label for="task" class="content-center text-end col-start-1 col-end-2 sm:col-start-5 tracking-wider text-xl">New Task</label>
        <input onChange={handleChange} value={todo} type="text" name="task" id="task" class=" col-start-2 col-end-6 sm:col-span-4  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder="Enter your task"/>
        <button onClick={handleAdd} class=' bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Add</button>
   </div>
   <div class="text-center block">
    <div  class="text-3xl font-bold">Your ToDos</div>
    <div className='Todo-list'>This is my todo
    <button  onClick={handleDone} class=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2">Done</button>
    <button  onClick={handleEdit} class=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2">Edit</button>
    <button  onClick={handleDelete} class=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2">Delete</button>
    </div>
   </div>
   </>
  )
}

export default Input
