import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from 'react-router-dom'

function Home() {

  const history = useNavigate()

const handleDelete = (id)=>{
 let index = Employee.map(item=>item.id).indexOf(id)
 Employee.splice(index,1)
 history('/')
}

const handleEdit = (id,uname,age,desg,salary)=>{
localStorage.setItem("id",id)
localStorage.setItem("uname",uname)
localStorage.setItem("age",age)
localStorage.setItem("desg",desg)
localStorage.setItem("salary",JSON.stringify(salary))

}

  return (
    <> 

    <h1 className='text-primary mt-2'>
        Employee Management System
        &nbsp;


     <Link to={'/add'}>

     <Button className='btn btn-success'>Add <i class="fa-solid fa-user-plus"></i></Button>

     </Link>       
    </h1>
    <p className='ms-3 me-3'>
        This is Dummy Data:Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.

By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.
    </p>
     <div style={{margin:"6rem"}}>
        <h3>List of All Employee</h3>
         <Table striped bordered hover>
    <thead>
      <tr>
        <th>Username</th>
        <th>Age</th>
        <th>Desigination</th>
        <th>salary</th>
      </tr>
    </thead>
    <tbody>
      {
        Employee  && Employee.length > 0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.desg}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={'/edit'}>

                    <button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button> &nbsp; &nbsp;

                    </Link>

                <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><i class="fa-sharp fa-solid fa-trash"></i></button>


                </td>

            </tr>
        ))
        : 'no table data available'
      }
    </tbody>
  </Table>
  </div> 
  </>
  )
}

export default Home