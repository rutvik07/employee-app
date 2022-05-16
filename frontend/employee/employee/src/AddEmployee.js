import React,{useEffect,useState,useRef} from 'react';
import { Formik } from 'formik';
import {Form,Button,Row, Col, Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './App.css';

const ProductForm = (props) => {
    
    const [employee,setEmployee] = useState([])
    const history = useHistory()
    
    const imgRef = useRef();

    console.log(imgRef.current);

   
    
      
    
    return (

        <React.Fragment>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col className="card p-4" md={5}>

                    <h1 className="pro-sec-label">Employee Form</h1>
            
            <Formik
            
            initialValues={{ name: '', age: '',email: '',dob: '',photo:'',address:''}}
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
                else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                else if(!values.dob){
                    errors.dob = 'Required';
                }
                else if(!values.photo){
                    errors.photo = 'Required';
                }
                else if(!values.address){
                    errors.address = 'Required';
                }

                return errors;
            }}
            
            onSubmit={(values, { setSubmitting }) => {
                
                console.log(imgRef.current.files[0]);
                
                console.log(values);
                var formData = new FormData()
                formData.append('name',values.name)
                formData.append('age',values.age)
                formData.append('email',values.email)
                formData.append('dob',values.dob)
                formData.append('address',values.address)
                formData.append('photo',imgRef.current.files[0])
                

                // request.send(JSON.stringify({name:name,description:description,category:category,price:price,quantity:quantity,file:file}));
                

                

                 fetch('http://localhost:9000/user/create-emp',{
                    method: 'POST',

                    body:formData
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
                    value={values.name}
                />
                <div className="error">{errors.name && touched.name && errors.name}</div>
                <Form.Control placeholder="age"
                className= 'my-2 pro-input'
                    type="text"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                />
                <div className="error">{errors.age && touched.age && errors.age}</div>
                
                <Form.Control placeholder="email"
                className= 'my-2 pro-input'
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <div className="error">{errors.email && touched.email && errors.email}</div>
                <Form.Control placeholder="dob"
                className= 'my-2 pro-input'
                    type="text"
                    name="dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                />
                <div className="error">{errors.dob && touched.dob && errors.dob}</div>
                
                <Form.Control placeholder="photo"
                className= 'my-2 pro-input'
                    ref={imgRef}
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.photo}
                />
                <div className="error">{errors.photo && touched.photo && errors.photo}</div>
                
                <Form.Control placeholder="Address"
                className= 'my-2 pro-input'
                    // ref={imgRef}
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                />
                <div className="error">{errors.address && touched.address && errors.address}</div>
                
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

export default ProductForm;