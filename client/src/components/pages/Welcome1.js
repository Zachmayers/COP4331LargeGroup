import React, {useState} from 'react';
import {Card, Button, Collapse} from 'react-bootstrap';
import SignUp from './Signup';
import Title from './Title.js';
import Login from './Login/Login';
import LoginComp from './LoginComp';
import SignupComp from './SignupComp';
import './Style/Header.css';

function Welcome1() {
    const [open, setOpen] = useState(false);
    const [verticalOpen, setVerticalOpen] = useState(false);
    
    return(
        <Card className="centerCard">
            <Card.Body>
                <Collapse in={!open}>
                    <div id="collapse-login">
                        <div>
                            <Title />
                            <p1 className="welcomeText">Welcome to Listen In</p1>
                        </div>
                        <div>
                            <Button variant="primary"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-login"
                                    aria-expanded={open}>
                                Get Started
                            </Button>{' '}
                        </div>
                    </div>
                </Collapse>
                <Collapse in={open}>
                    <div id="collapse-login">
                        <Collapse in={!verticalOpen}>
                            <div id="login-signup">
                                <div>
                                    <LoginComp />
                                </div>
                                <div>
                                    <Button variant="primary"
                                            onClick={() => setVerticalOpen(!verticalOpen)}
                                            aria-controls="login-signup"
                                            aria-expanded={verticalOpen}>
                                        Log In
                                    </Button>{' '}
                                </div>
                            </div>
                        </Collapse>
                        <Collapse in={verticalOpen}>
                            <div id="login-signup">
                                <div>
                                    <SignupComp />
                                </div>
                                <div>
                                    <Button variant="primary"
                                            onClick={() => setVerticalOpen(!verticalOpen)}
                                            aria-controls="login-signup"
                                            aria-expanded={verticalOpen}>
                                        Sign Up
                                    </Button>{' '}
                                </div>
                            </div>
                        </Collapse>
                        
                        <Button variant="primary"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-login"
                                    aria-expanded={open}>
                            Close
                        </Button>{' '}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
}

export default Welcome1;