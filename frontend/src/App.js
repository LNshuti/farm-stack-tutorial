import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TodoListView';





function App() {

  const [todoList, setToDoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')


  // Read all todos 

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setToDoList(res.data)

      })

  });

  // Post a todo 
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo', { 'title': title, 'description': desc})
      .then(res => console.log(res))

  };




  return (
    <div className="App">
      Hello, World! 
      FARM STACK
      <div className="App list-group-item justify-content-center align-items-center mx-auto" stype={{"width":"400px", "backgroundColor":"white", "marginTop":"15px" }}>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
          <span className="card-text">
            <input className="mb-2 from-control titleIn" placeholder='Title'/>
            <input className="mb-2 from-control desIn" placeholder='Description'/>
            <button classNmae="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"front-weight":"bold"}}>Add Task</button>
        
          </span>

          <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
          <div>
            <TodoView todoList={todoList}/>

          </div>
      </div>



      </div>
    </div>
  );
}

export default App;
