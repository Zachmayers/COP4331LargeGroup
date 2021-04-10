import React, { useState } from "react"; 
import { post } from 'axios';
// import { Container, Grid } from "@material-ui/core"
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Style/Header.css';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
                  .max(50, 'Too Long!')
                  .required('Required'),
    lastName: Yup.string()
                 .max(50, 'Too Long!')
                 .required('Required'),
    username: Yup.string()
                 .min(2, 'Too Short!')
                 .max(50, 'Too Long!')
                 .required('Required'),
    email: Yup.string()
              .email('Please input a proper email')
              .required('No email provided'),
    password: Yup.string()
                 .required('Please Enter a password')
                 .min(6, "Password must be at least 6 chars long")
                 .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        "Must contain uppercases, lowercases, numbers and special character"),
    passwordConfirmation: Yup.string()
                             .required('Please confirm your password')
                             .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                "Password must meet criteria")
                             .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Signup(props) {    
    return (
        <Formik
            validationSchema={SignupSchema}
            onSubmit={console.log}
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                passwordConfirmation: '',
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
                        Please Sign Up
                    </div>
                    <Form.Row>
                        <InputGroup hasValidation as={Col}>
                            <Form.Group controlId="formFirstName">
                                <Form.Control
                                    placeholder="First Name"
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.firstName && !!errors.firstName}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback> */}
                            </Form.Group>
                        </InputGroup>
                        <InputGroup hasValidation as={Col}>
                            <Form.Group controlId="formLastName">
                                <Form.Control
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.lastName && !!errors.lastName}
                                    isValid={touched.lastName && !errors.lastName}
                                    />
                            </Form.Group>
                        </InputGroup>
                    </Form.Row>
                    <Form.Row>
                        <InputGroup hasValidation as={Col}>
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
                        <InputGroup hasValidation as={Col}>
                            <Form.Group controlId="formEmail">
                                <Form.Control
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.email && !!errors.email}
                                    isValid={touched.email && !errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </InputGroup>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formPassword">
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
                        <Form.Group as={Col} controlId="formPasswordConfirmation">
                            <Form.Control
                                placeholder="Confirm Password"
                                type="password"
                                name="passwordConfirmation"
                                value={values.passwordConfirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.passwordConfirmation && !!errors.passwordConfirmation}
                                isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    {/* This Error Message needs errorMessage class to stay the correct size*/}
                    {/* <ErrorMessage name="password">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default Signup;