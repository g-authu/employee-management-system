import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import Employee from './Employee'

import { useNavigate} from 'react-router-dom'



function Add() {

const [uname,setuname] = useState('')
const [desg,setdesg] = useState('')
const [age,setage] = useState('')
const [salary,setsalary] = useState(0)

let history = useNavigate()


const handleEmployee = (e)=>{
  e.preventDefault()
  let ids = uuid()
  console.log(ids);
  let uniqueId = ids.slice(0,8)
  console.log(uniqueId);
  Employee.push({
    id:uniqueId,
    uname:uname,
    age:age,
    desg:desg,
    salary:salary
  })
  history('/')
}






  return (
     <>
    <h1 className='text-primary mt-2'>
   Update Employee Details 
</h1>
<p className='ms-3 me-3'>
    This is Dummy Data:Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.

By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.
</p> 

<Row>
  <Col md={4}>
    <img style={{width:"400px",height:"450px"}} src='https://www.w3schools.com/howto/img_avatar2.png'>
    </img>
  </Col>
  <Col md={8}>

  <Form  className='border p-3'>
  <Form.Group >
    <Form.Label>User Name</Form.Label>
    <Form.Control style={{color:"red"}}   type="text"
    onChange={(e)=> setuname(e.target.value)}
    />
  </Form.Group>
  <Form.Group >
    <Form.Label>Age</Form.Label>
    <Form.Control style={{color:"red"}}  type="text"
    onChange={(e)=> setdesg(e.target.value)}

    />
  </Form.Group>
  <Form.Group >
    <Form.Label>Desigination</Form.Label>
    <Form.Control style={{color:"red"}} type="text" 
     onChange={(e)=> setage(e.target.value)}
    />
  </Form.Group>
  <Form.Group >
    <Form.Label>salary</Form.Label>
    <Form.Control style={{color:"red"}}  type="text" 
     onChange={(e)=> setsalary(e.target.value)}
    />
  </Form.Group>
  <Button onClick={(e)=>handleEmployee(e)} className='mt-2' variant="primary" type="Update">
    ADD Employee
  </Button>
</Form>
  </Col>

</Row>
</>
  )
}

export default Add