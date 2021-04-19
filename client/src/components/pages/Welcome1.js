import React, {useState} from 'react';
import {Card, Button, Collapse} from 'react-bootstrap';
import SignUp from './Signup';
import Title from './Title.js';
import Login from './Login/Login';
import LoginComp from './LoginComp';
import SignupComp from './SignupComp';
import PasswordReset from './PasswordReset';
import './Style/Header.css';

function Welcome1(props) {

    let starting = 'welcome'
    // this is in case we try to have a link to sign up
    // and/or log in from other places in the website
    if (props.link) {
        starting = props.link
    }
    const [term, setTerm] = React.useState(starting)

    function showWelcome() {
        setTerm('welcome')
    }

    function showLogIn() {
        setTerm('login')
    }

    function showSignUp() {
        setTerm('signup')
    }

    function showPasswordReset() {
        setTerm('passwordreset')
    }

    function Welcome(props) {
        return (
            <div id="collapse-login">
                <div>
                    <Title />
                    <h1 className="welcomeText">Welcome to Listen In</h1>
                </div>
                <div>
                    <Button variant="primary" onClick={(e) => props.showLogIn()}>
                        Get Started
                    </Button>{' '}
                </div>
            </div>
        )
    }

    function Display() {
        if (term == 'welcome') {
            return (
                <Welcome showLogIn={showLogIn} />
            )
        }
        if (term == 'login') {
            return (
                <LoginComp showSignUp={showSignUp} showWelcome={showWelcome} showPasswordReset={showPasswordReset} />
            )
        }
        if (term == 'signup') {
            return (
                <SignupComp showLogIn={showLogIn} showWelcome={showWelcome}/>
            )
        }
        if (term == 'passwordreset') {
            return (
                <PasswordReset showLogIn={showLogIn} />
            )
        }
    }

    return(
        <Card className="centerCard">
            <Card.Body>
                <Display />
                {/* <Collapse in={!open}>
                    <div id="collapse-login">
                        <div>
                            <Title />
                            <h1 className="welcomeText">Welcome to Listen In</h1>
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
                                    <br/>
                                    <Button variant="primary"
                                            onClick={() => setVerticalOpen(!verticalOpen)}
                                            aria-controls="login-signup"
                                            aria-expanded={verticalOpen}>
                                        Sign Up
                                    </Button>{' '}
                                    <Button variant="primary"
                                            onClick={() => setOpen(!open)}
                                            aria-controls="collapse-login"
                                            aria-expanded={open}>
                                        Close
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
                                    <br/>
                                    <Button variant="primary"
                                            onClick={() => setVerticalOpen(!verticalOpen)}
                                            aria-controls="login-signup"
                                            aria-expanded={verticalOpen}>
                                        Log In
                                    </Button>{' '}
                                    <Button variant="primary"
                                            onClick={() => setOpen(!open)}
                                            aria-controls="collapse-login"
                                            aria-expanded={open}>
                                        Close
                                    </Button>{' '}
                                </div>
                            </div>
                        </Collapse>
                        
                        
                    </div>
                </Collapse> */}
            </Card.Body>
        </Card>
    );
}

export default Welcome1;