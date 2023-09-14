"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();

    setMainTask([...mainTask, {title, desc}]);
    console.log(mainTask);
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i)=>{
      return( 
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-xl font-semibold'mi>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button 
      onClick={() => {deleteHandler(i)}}
      className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
      );
  
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>To Do List</h1>
      <form onSubmit={submitHandler}>
        <input placeholder='Enter task here'  
          type='text' 
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value);
            }}
        />
        <input placeholder='Enter description here'  
          type='text' 
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
          value={desc}
          onChange={(e) =>{
            setDesc(e.target.value);
          }}
          />
        <button className='bg-black text-white px-4 py-3 font-bold m-5 rounded'>Add task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
          <ul>
            <li>{renderTask}</li>
          </ul>
      </div>
    </>
  )
}

export default page
