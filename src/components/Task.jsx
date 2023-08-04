import React from 'react'
import Card from 'react-bootstrap/Card';
//prop drilling
const Task = ({task}) => {
    console.log(task);
  return (
    <div>
        <div className='row mb-3 my-3 mx-3'>
        {task && task.map((task,index)=>(
          <div key={index} className='col-md-3'>
            <Card style={{ width: '14rem' }}  >
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
        </Card.Body>
      </Card>
          </div>
        
      ))}

      </div>
    </div>
  )
}

export default Task