import React, {useState} from 'react';
import {Card, Button, Collapse} from 'react-bootstrap';
import SignUp from './Signup';
import Title from './Title.js';
import logo from './Title-img-1.svg';
import './Style/Header.css';

function Welcome1() {
    const [open, setOpen] = useState(false);
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
                        <SignUp />
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