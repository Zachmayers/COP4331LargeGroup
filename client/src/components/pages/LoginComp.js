import React, { useState } from "react"; 
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { post } from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import localStorage from 'local-storage';
import './Style/Header.css';


const SignupSchema = Yup.object().shape({
    username: Yup.string()
                  .required('Required'),
    password: Yup.string()
                 .required('Please Enter a password')
});

function doSubmit(data){     
    async function doSignUp() {
      try {
        
        // THIS IS NOT WORKING, PLS FIX
        const response = await post('/api/Login', {Username: data.username, Password: data.password}); 
         //props.history.push(`/articles/${response.data._id}`);  
        localStorage.set("userId", response.data._id)
      } catch(error) {
        console.log('error', error);
      }
    }
    doSignUp();
}


function LoginComp(props) {
    return (
        <Formik
            validationSchema={SignupSchema}
            onSubmit={doSubmit}
            initialValues={{
                username: '',
                password: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <div className="welcomeText">
                        Please Log In
                    </div>
                    <InputGroup hasValidation>
                        <Form.Group controlId="formUsername">
                            <Form.Control
                                placeholder="Username"
                                type="text"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.username && !!errors.username}
                                isValid={touched.username && !errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </InputGroup>
                    <Form.Group controlId="formPassword">
                        <Form.Control
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.password && !!errors.password}
                            isValid={touched.password && !errors.password}
                            />
                        <Form.Control.Feedback type="invalid" className="errorMessage">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginComp;