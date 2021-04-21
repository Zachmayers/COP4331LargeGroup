import React, { useState } from "react"; 
import { Container, Row, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { post } from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Style/Header.css';



const resetSchema = Yup.object().shape({
    email: Yup.string()
              .email('Please input a proper email')
              .required('No email provided')
});

function PasswordReset(props) {

    const [emailSent, setEmailSent] = useState(false)
    const [wrongEmail, setWrongEmail] = useState(false)

    function doSubmit(data){     
        async function resetPassword() {
            try {
                const response = await post('/api/resetpassword', {Email: data.email});
            if (response.data.success == true) {
                setEmailSent(true)
                setWrongEmail(false)
            } else {
                setEmailSent(false)
                setWrongEmail(true)
            }
          } catch(error) {
            setEmailSent(false)
            setWrongEmail(true)
            console.log('error', error);
          }
        }
        resetPassword();
    }
    
    function ResultMessage() {
        if (emailSent) {
            return(
                <div>
                    We have sent you an email.
                </div>
            )
        } else if (wrongEmail) {
            return(
                <div>
                    We didn't find that email.
                </div>
            )
        } else {
            return(
                <div>
                </div>
            )
        }
    }

    return (
        <Formik
            validationSchema={resetSchema}
            onSubmit={doSubmit}
            initialValues={{
                email: ''
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
                        Password Reset
                    </div>
                    <div className="">
                        Please enter your email
                    </div>
                    <InputGroup hasValidation>
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
                    <ResultMessage />
                    <ButtonGroup>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="primary" onClick={(e) => props.showLogIn()}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Form>
            )}
        </Formik>
    )
}

export default PasswordReset;