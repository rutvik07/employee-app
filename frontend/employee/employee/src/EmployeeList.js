import React, { useEffect, useState } from 'react';
import { Row,Button, Col, Container, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const EmployeeList = () => {
    const history = useHistory()
    const [employeeList, setEmployeeList] = useState([]);

    const deleteEmployee = (id)=>{
        fetch('http://localhost:9000/user/delete-emp/'+id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.data);
            setEmployeeList(data.data);

        })
    }


    useEffect(() => {
        fetch('http://localhost:9000/user/get-emp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.data);
            setEmployeeList(data.data);
            
        })

    },[])

    const editEmployee = (id)=>{
    
        history.push('/edit-employee/'+ id)
        

    }

    return (
        
        <React.Fragment>
        <h1 className="emp-sec">Employee Section</h1>
        <Container>
            <Row>
                <table className="table table-bordered t-border">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Dob</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                  
                {employeeList.map((employee,index) => {
                    return (
                        
                            <tr key={employee._id}>
                                <td>{index+1}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.dob}</td>
                                    <td>{employee.address}</td>
                                    <td><Button onClick={() => editEmployee(employee._id)}>Edit</Button>&nbsp;
                                    <Button className='btn btn-danger'onClick={() => deleteEmployee(employee._id)}>Delete</Button></td>
                                </tr>
                            
                        )

                })}
                  </tbody>
                </table>
            </Row>


        </Container>

    </React.Fragment>

        
    )
}

export default EmployeeList
