import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee'
import { useNavigate} from 'react-router-dom'




function Edit() {

const [id,settId] = useState('')
const [uname,setuname] = useState('')
const [desg,setdesg] = useState('')
const [age,setage] = useState('')
const [salary,setsalary] = useState('0')



useEffect(()=>{
  settId(localStorage.getItem("id"))
  setuname(localStorage.getItem("uname"))
  setdesg(localStorage.getItem("desg"))
  setage(localStorage.getItem("age"))
  setsalary(localStorage.getItem("salary"))
},[])


var index = Employee.map(item=>item.id).indexOf(id)
console.log(index)
let history = useNavigate()

const handleUpdate = (e)=>{
  e.preventDefault()
console.log(e);
let emp = Employee[index]
console.log(emp);
emp.uname = uname
emp.age = age
emp.desg = desg
emp.salary = salary
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

      <Form className='border p-3'>
      <Form.Group >
        <Form.Label>User Name</Form.Label>
        <Form.Control style={{color:"red"}}  value={uname} type="text"
        onChange={(e)=> setuname(e.target.value)}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Age</Form.Label>
        <Form.Control style={{color:"red"}}  value={age} type="text"
        onChange={(e)=> setdesg(e.target.value)}

        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Desigination</Form.Label>
        <Form.Control style={{color:"red"}}  value={desg} type="text" 
         onChange={(e)=> setage(e.target.value)}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>salary</Form.Label>
        <Form.Control style={{color:"red"}} value={salary} type="text" 
         onChange={(e)=> setsalary(e.target.value)}
        />
      </Form.Group>
      <Button onClick={(e)=>handleUpdate(e)} className='mt-2' variant="primary" type="Update">
        Update
      </Button>
    </Form>
      </Col>

    </Row>
    </>
  )
}

export default Edit