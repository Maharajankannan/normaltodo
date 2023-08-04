import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Task from './components/Task';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').
    then((response)=>response.json()).
    then((datas)=>{
      console.log(datas);
      setTodos(datas);
      
    })
  }

  return (
    <div className="app">
      <div className='d-flex justify-content-between p-4'>
      <h1>Sample API</h1>
      <Button variant="outline-primary" onClick={fetchTodos}>Click here!</Button>
      </div>
      
        <div className='row mb-3 my-3 mx-3'>
        {/* {todos && todos.map((todo,index)=>(
          <div className='col-md-3'>
            <Card style={{ width: '14rem' }}  >
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
        </Card.Body>
      </Card>
          </div>
        
      ))} */}

      <Task task = {todos}/>
      </div>
      
      
      
      

    </div>
  )
}

export default App
