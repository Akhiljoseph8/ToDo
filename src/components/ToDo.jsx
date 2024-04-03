import React from 'react'
import { useState } from 'react'
import './ToDo.css'
function ToDo() {
    const [toDos,setToDos]=useState([])
    const [toDo,setToDo]=useState('')
  return (
    <>
    <div className='app w-100'>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input m-2 align-items-center justify-content-center" style={{width:"50%"}}>
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="Add item..."  className='m-2'/>
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text: toDo,status:false, date:new Date()}])} className="fas fa-plus" style={{color:"blue"}}></i>
      </div>
      {
        toDos.length>0 ?
          <table style={{color:"red"}} className='table table-bordered'>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
             <tbody>
                {
            toDos.map((value)=>(
             <tr>
               <td>
                {value.text}
               </td>
               <td>
                {value.status?"Completed":"In progress"}
               </td>
               <td>
                {value.date.toDateString()}
              </td>
              <td>
                <i className='fa-solid fa-check m-2' style={{color:"green"}} onClick={()=>{
                 setToDos(toDos.filter(obj=>{
                  if(obj.id===value.id){
                   obj.status=true
                   }
                    return obj
                
                   }))
                    }}></i>
                <i style={{color:"red"}} id={value.id} className="fas fa-times m-2"  onClick={(e)=>{
                  let index=toDos.findIndex(value=>{return value.id==e.target.id})
                   if(index!==-1){
                     toDos.splice(index, 1);
                    setToDos([...toDos]);
                   }
                    }}></i>
                </td>
             </tr>     
        )) 
       }
          </tbody>
      </table>
       
  : ""}
</div>
</>
  );
}

export default ToDo