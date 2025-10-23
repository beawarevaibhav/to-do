import React, { useState } from 'react'

function App() {
    const [todo, settodo] = useState()
    const [todos, settodos] = useState([])
    const handleadd=()=>{
        settodos([...todos, {todo, iscompleted:false}])
        settodo('')
        
    }
    const handlechange =(e)=>{
        settodo(e.target.value)

    }
    return (
        <>
        <div className="container w-full h-full mx-auto  ">
            <h1 className='bg-violet-700 text-center '>To do app</h1>
            <div className="todo flex justify-center items-center mt-4">

                <input onChange={handlechange} value={todo} type="text" placeholder='Add a task' className='border-2 border-violet-700 rounded-md p-2'/>
                <button onClick={handleadd} className='bg-violet-700 text-white p-2 rounded-md ml-2'>Add</button>
            </div>
            <div className="text flex  justify-between items-center mt-4 border-2 border-violet-700 rounded-md p-4  gap-4">
                {todos.map(items=>{
               return <div className="text">
               
                <h3>{items.todo}</h3>
                <div className="button" >
                    <button className=' bg-violet-500 text-white p-2 rounded-md mt-2 mx-4 my-4 flex gap-4'>Delete</button>
                    <button className=' bg-violet-500 text-white p-2 rounded-md mt-2 mx-4 my-4 flex gap-4' >Add</button>
                    
                </div>
                </div>
                   } )}
            
            </div>
            

        </div>
        
         
        </>
    )
}

export default App
