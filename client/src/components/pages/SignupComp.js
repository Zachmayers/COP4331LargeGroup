import React, { useState } from "react"; 
import { post } from 'axios';
// import { Container, Grid } from "@material-ui/core"
import { Container, Row, Col } from 'react-bootstrap';
import './Style/Header.css';

function Signup(props) {
    const initialState = { Username: '', Password: '', ConfirmPassword: '', FirstName: '', LastName: '', Email: '' }
    const [User, setSignup] = useState(initialState) 
    
    function handleChange(event) { 
        setSignup({...User, [event.target.name]: event.target.value})
    }
    
    function handleSubmit(event) { 
        event.preventDefault();     
        if(!User.title || !User.content ) return 
        async function postSignup() {
        try {
            const response = await post('/api/Users', User); 
            props.history.push(`/Users/${response.data._id}`);  
        } catch(error) {
            console.log('error', error);
        }
        }
        postSignup();
    }
    
    function handleCancel() {
        props.history.push("/Users");
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="form-group signup-form">
                    <p>Please Sign Up</p>
                    <Row>
                        <Col>
                            <label>Username</label>
                                <textarea name="Username" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                        <Col>
                            <label>Email</label>
                                <textarea name="Email" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Password</label>
                                <textarea name="Password" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                        <Col>
                            <label>Confirm Password</label>
                                <textarea name="ConfirmPassword" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>First</label>
                                <textarea name="FirstName" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                        <Col>
                            <label>Last</label>
                                <textarea name="LastName" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </Col>
                    </Row>
                    <div className="btn-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        {/* <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button> */}
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default Signup;