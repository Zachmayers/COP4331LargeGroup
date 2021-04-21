import React, { useState } from "react"; 
import { Container, Card, Row, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { post } from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Style/Header.css';



const newPasswordSchema = Yup.object().shape({
    password: Yup.string()
                 .required('Please Enter a password')
                 .min(6, "Password must be at least 6 chars long")
                 .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        "Must contain uppercases, lowercases, numbers and special character"),
    passwordConfirmation: Yup.string()
                             .required('Please confirm your password')
                             .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                "Password must meet criteria")
                             .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function PasswordReset(props) {

    if (localStorage.getItem("user")) {
        props.history.push('/TopTracks')
    }

    const token = window.location.pathname.split("/")[2]

    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    function doSubmit(data){     
        async function resetPassword() {
            try {
                const encryptedPassword = btoa(data.password)
                const response = await post('/api/newpassword', {Password: encryptedPassword, Token: token});
                if (response.data.success == true) {
                    setSuccess(true)
                    setFailure(false)
                    setTimeout(function () {
                        window.location.href = 'https://listenin.us/'
                    }, 5000);
                } else {
                    setSuccess(false)
                    setFailure(true)
                }
            } catch(error) {
                setSuccess(false)
                setFailure(true)
                console.log('error', error);
            }
        }
        resetPassword();
    }
    
    function ResultMessage() {
        if (success) {
            return(
                <div className="welcomeText">
                    <div>
                        Success!
                    </div>
                    <div>
                        You will be redirected shortly!
                    </div>
                </div>
            )
        } else if (failure) {
            return(
                <div>
                    Please try again.
                </div>
            )
        } else {
            return(
                <div>
                </div>
            )
        }
    }

    function HideOnSuccess() {
        if(success) {
            return(
                <ResultMessage />
            )
        } else {
            return(
                <Formik
                    validationSchema={newPasswordSchema}
                    onSubmit={doSubmit}
                    initialValues={{
                        password: '',
                        passwordConfirmation: ''
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
                                New Password
                            </div>
                            <div>
                                Please enter a new password
                            </div>
                            <InputGroup hasValidation>
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
                            </InputGroup>
                            <InputGroup hasValidation>
                                <Form.Group controlId="formPasswordConfirmation">
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
                            </InputGroup>
                            <ResultMessage />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            )
        }
    }

    return (
        <div className="banner background-banner" >
            <Card className="centerCard">
                <Card.Body>            
                    <HideOnSuccess />
                </Card.Body>
            </Card>
        </div>
    )
}

export default PasswordReset;