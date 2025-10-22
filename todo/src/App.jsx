import React from 'react'
import { useState, useEffect } from 'react'

function App() {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])


    const handleedit =()=>{

    }
    const handledelete =()=>{
        
    }
    const handleadd =()=>{
        settodos([...todos, {todo,iscompleted:false}])
        settodo("")
     
        
    }
    const handlechange =(e)=>{
        settodo(e.target.value)
    }
    return (
        <>
        <div className="conatiner mx-auto my-5 rounded-2xl bg-violet-500">
        <div className="addtodo">
            <h1>add</h1>
            <input type="text" value={todo} onChange={handlechange}  className='bg-white' />
            <button onClick={handleadd} className='bg-red-300'>add todo</button>
        </div>
                <h1 className="bg-red-500 text-xl font-bold">my todo</h1>
           <div className="todos">
            {todos.map(items=>{
            return <div className="todo flex">
                <div className="text">{items.todo}</div>
                <div className="button">
                    <button onClick={handleedit} className='bg-violet-300 py-1 text-sm font-bold rounded-md mx-2'>edit</button>
                    <button onClick={handledelete} className='bg-violet-300 py-1 text-sm font-bold rounded-md mx-2'>delete</button>
                </div>

            </div>
            })}
           </div>
        </div>
        
        </>
    )
}

export default App
