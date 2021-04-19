import React, { useState } from "react"; 
import { post } from 'axios';
import { Container, Row, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
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
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [errorMsg, setErrorMsg] = useState('Username already exists')
	const text = 'If you are not being redirected click '
    
    function doSubmit(data){     
        async function doSignUp() {
          try {
            const response = await post('/api/Signup', {Username: data.username, Password: data.password, Email: data.email, FirstName: data.firstName, LastName: data.lastName}); 
            if (response.data.success)   {
                setSuccess(true)
                setTimeout(function () {
                    window.location.href = 'https://listenin.us/'
                }, 5000);
            } else {
                setFailure(true)
                setErrorMsg(response.data.error)
            }
          } catch(error) {
            setFailure(true)
            console.log('error', error);
          }
        }
        doSignUp();
    }
    function DisplayErrorMsg() {
        if (failure) {
            return (
                <div>
                    {errorMsg}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    function DisplayOnSuccess() {
        if (success) {
            return (
                <div>
                    <div className="welcomeText">
                        Account Successfully Created!
                    </div>
                    <div className="welcomeText">
                        We have sent you an email to verify your account!
                    </div>
                    <div>
						{text}
						<a className="link" href="https://listenin.us/">here!</a>
					</div>
                </div>
            )
        } else {
            return (
                <Formik
                validationSchema={SignupSchema}
                onSubmit={doSubmit}
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
                        <DisplayErrorMsg/>
                        <ButtonGroup>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="primary" onClick={(e) => props.showWelcome()}>
                                Exit
                            </Button>
                        </ButtonGroup>
                        <div>
                            Already have an account? <a className="link" onClick={(e) => props.showLogIn()}>Log In!</a>
                        </div>
                    </Form>
                )}
            </Formik>
            )
        }
    }

    return (
        <DisplayOnSuccess />
    )
}

export default Signup;