import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  let [todo,setTodo] = useState("");
  let [toDos,setTodos] = useState([]);
  const handleAdd=()=>{
      setTodos([...toDos,{todo, completed: false, id: Date.now()}])
      console.log(toDos);
      setTodo('')
  }
  let handleChange=(e)=>{
    setTodo(e.target.value);
  }
  const handleDone=(id)=>{
    setTodos(
      toDos.map(todo => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
    )
  }
  const handleDelete=(id)=>{
    setTodos(toDos.filter(todo => todo.id !==id))
  }
  return (
    <>
    <Navbar></Navbar>
   <main>
   <div class="grid grid-cols-6 gap-2 sm:gap-5 place-content-center h-60 sm:grid-cols-12 ">
      <label for="task" class="content-center text-end col-start-1 col-end-2 sm:col-start-5 tracking-wider text-xl">New Task</label>
      <input onChange={handleChange}  value={todo} type="text" name="task" id="task" class=" col-start-2 col-end-6 sm:col-span-4  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder="Enter your task"/>
      <button onClick={handleAdd} class=' bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Add</button>
   </div>
   <div  class="text-3xl font-bold text-center">Your ToDos</div>
    {toDos.map(todo=>{
      return <div class="grid grid-cols-12 gap-0 sm: grid-cols-13 "><div class="text-center"></div>
    <div className='Todo-list' style={{textDecoration: todo.completed ? 'line-through' : 'none'}} class="col-start-1 col-end-5 content-center  text-right sm:col-start-1 col-end-7 text-right content-center">{todo.todo}</div>
    
    <button  onClick={() => handleDone(todo.id)} class="col-start-7 col-end-10 sm:col-span-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded m-3">Done</button>
    <button  onClick={() => handleDelete(todo.id)} class=" col-start-10 col-end-13 sm:col-span-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded m-3">Delete</button>

    </div>
    })}
   </main>
    <Footer></Footer>
    </>
  );
}

export default App;
