import React from 'react'
import { useState } from 'react'

function App() {
    const [todo, settodo] = useState("")
    const [task, settask] = useState([])

const handleadd =()=>{
    settask([...task, {todo, iscompleted:false}])
    settodo("")
}
const handlechange =(e)=>{
    settodo(e.target.value)
}
// let todolist = []
// for(let i = 0; i<task.length; i++){
//     todolist.push(<h2 key={i}>{task[i].todo}</h2>)
// }


    return (
        <>
        <div className="container w-full h-full mx-auto ">
            <h1 className='bg-violet-500 text-center'>My todo app</h1>
            <div className="text flex justify-center items-center mt-4">
                <input onChange={handlechange} value={todo} type="text" className='border-violet-700 rounded-md p-2 border-2' />
                <button onClick={handleadd} className='bg-violet-500 text-white rounded-md p-4 gap-4'>Add</button>
            </div>
            <div className="todo ">
                {task.map(items=>{
               return <div className="items flex justify-between items-center mt-4 border-2  gap-4">
                <h2>{items.todo}</h2>
                <div className="button ">

                    <button className='bg-violet-500 text-white p-2 rounded-md mt-2 my-4 flex gap-4'> Delete</button>
                    <button className='bg-violet-500 text-white p-2 rounded-md mt-2 my-4 flex gap-4'>Edit</button>
                </div>

               </div>
                 })}
                
            </div>
          
        </div>
        
        
        
        
        </>
    )
}

export default App
