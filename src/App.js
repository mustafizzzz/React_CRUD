
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 

  faCircleCheck,
  faPen,
  faTrashCan,

 } from "@fortawesome/free-solid-svg-icons";


import './App.css';
import AddTaskForm from './components/AddTaskForm';


function App() {

  //todo list state
  const [toDo,setToDo]=useState([
    {id:1,title:"Task 1",status:false},
    {id:2,title:"Task 2",status:false},
    {id:3,title:"Task 3",status:false},
  ]);

  //temp state
  const [newTask,setNewTask]=useState('');
  const [updateData,setUpdateData]=useState('');


  //add task function
  const addTask = ()=>{
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {id:num , title:newTask,status:false}
      setToDo([...toDo,newEntry])
      setNewTask('');
      
    }

  }
  
  //delete task
  const deleteTask = (id)=>{
    let newTask=toDo.filter(task=>task.id!==id)
    setToDo(newTask);

    
  }

  //mark done
  const markDone=(id)=>{
    let newTask=toDo.map(task=>{
      if(task.id===id){
        return ({...task,status: !task.status})
      }
      return task;
    })
    setToDo(newTask);


  }

//cancel update
  const cancelTask = ()=>{
    setUpdateData('');
    
  }

  //chnage task for update

  const changeTask = (e)=>{
    let newEntry={
    id:updateData.id,
    title:e.target.value,
    status:updateData.status ? true:false
  }
  setUpdateData(newEntry);
}

  //update task
  const updateTask=()=>{
    let filterRecord=[...toDo].filter(task =>task.id!==updateData.id);
    let updateobject=[...filterRecord,updateData]
    setToDo(updateobject)
    setUpdateData('')

  }

  return (
    <div className="container App">
      <br></br>
      <h1>Todo App List React</h1>
      <br></br>

{/* Update tasks */}
{updateData && updateData ? (

 <UpdateForm
 updateData ={updateData}
 changeTask={changeTask}
 updateTask={updateTask}
 cancelTask={cancelTask}
 />

):(
  <AddTaskForm
  newTask={newTask}
  setNewTask={setNewTask}
  addTask={addTask}
  />

)}
        <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        
        />
</div>
  );
}

export default App;
