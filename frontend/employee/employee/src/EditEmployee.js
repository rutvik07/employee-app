import React,{useEffect,useState,useRef} from 'react';
import { Formik } from 'formik';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const EditEmployee = () => {
    const [employeeDetails,setEmployeeDetails] = useState([])
    const history = useHistory()
    const { id } = useParams();
    const imgRef = useRef();

    console.log(imgRef.current);
    useEffect(() => {
        fetch('http://localhost:9000/user/employee-details/'+id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.data);
            setEmployeeDetails(data.data);
            
        })

    },[])

  
    return (
        <React.Fragment>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col className="card p-4" md={5}>
                    

            <h1 className="pro-sec-label">Employee Form</h1>
            
            <Formik
            enableReinitialize={true}
            initialValues={employeeDetails}
            validate={values => {
                const errors = {};
                if (!values.name) {
                errors.name = 'Required';
                } 
                else if(!values.age){
                    errors.age = 'Required';
                }
                else if(!values.email){
                    errors.email = 'Required';
                }
                else if(!values.dob){
                    errors.dob = 'Required';
                }
                
                else if(!values.address){
                    errors.address = 'Required';
                }

                return errors;
            }}
            
            onSubmit={(values, { setSubmitting }) => {
                
                
                
                console.log(values);
              
                
                
                
                
                fetch('http://localhost:9000/user/update-emp/'+id,{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    
                    body:JSON.stringify({name:values.name,age:values.age,email:values.email,dob:values.dob,address:values.address})
                    
                }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        history.push('/employee-list')
                        console.log(values)
                    })
                }}
                

                

                       
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                <Form.Control  placeholder="Name"
                className= 'my-2 pro-input'
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name || ''}
                />
                {errors.name && touched.name && errors.name}
                <Form.Control placeholder="age"
                className= 'my-2 pro-input'
                    type="text"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                />
                {errors.age && touched.age && errors.age}
                <Form.Control placeholder="email"
                className= 'my-2 pro-input'
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <Form.Control placeholder="dob"
                className= 'my-2 pro-input'
                    type="text"
                    name="dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                />
                {errors.dob && touched.dob && errors.dob}
                
                <Form.Control placeholder="Address"
                className= 'my-2 pro-input'
                    // ref={imgRef}
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                />
                {errors.address && touched.address && errors.address}
                <Button className="sub-btn" type="submit" >
                    Submit
                </Button>
                </form>
            )}
            </Formik>
            </Col>
                </Row>
            </Container>
        

        </React.Fragment>
    )
}

export default EditEmployee
