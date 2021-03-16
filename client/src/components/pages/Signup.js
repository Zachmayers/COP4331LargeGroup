import React, { useState } from "react"; 
import { post } from 'axios'; 
import Background from './Background';
import './Style/Header.css';
import logo from './PinkerLogo.png'

function Signup(props) {
    const initialState = { Username: '', Password: '', FirstName: '', LastName: '', Email: '' }
    const [User, setSignup] = useState(initialState) 
    
    function handleChange(event) { 
        setSignup({...Signup, [event.target.name]: event.target.value})
    }
    
    function handleSubmit(event) { 
        event.preventDefault();     
        if(!Signup.title || !Signup.content ) return 
        async function postSignup() {
        try {
            const response = await post('/api/Signups', Signup); 
            props.history.push(`/Signups/${response.data._id}`);  
        } catch(error) {
            console.log('error', error);
        }
        }
        postSignup();
    }
    
    function handleCancel() {
        props.history.push("/Signups");
    }
    
    return (
        <div>
            <div class="container">
                <div class="row xs-4 sm-4 md-4 lg-4  text-light">
                    <img src={logo} className="Login-logo" alt="logo" />
                        <p>Please create an account!</p>
                </div>
                <form onSumbit={handleSubmit}>
                <div class="container text-success offset-5">
                    <div class="row sm-4 md-4 lg-4">
                        <div class="col-md-12 col-sm-10 col-xs-10 control-label ">
                            <div className="form-group">
                                <label>Username</label>
                                <textarea name="content" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                        </div>
                            <div class="row sm-4 md-4 lg-4">
                                <div class="col-md-12 col-sm-10 col-xs-10  control-label">    
                                    <label>Password</label>
                                    <textarea name="content" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                </div>
                            </div>
                            </div>
                            <div class="row sm-4 md-4 lg-4 row-offset-sm-5">
                                <div className="col col-offset-sm-4 btn-group">
                                    <input type="submit" value="Submit" className="btn btn-primary" />
                                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                                </div>
                            </div>
                    </div>
                </div>
                </form>
            </div>
           
            
        <Background />
        </div>
    )
}

export default Signup;