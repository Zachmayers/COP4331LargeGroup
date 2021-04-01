import React, { useState } from "react"; 
import { Container } from "@material-ui/core"
import { post } from 'axios'; 
import './Style/Header.css';

function LoginComp(props) {
    const initialState = { Email: '', Username: '', Password: '' }
    const [User, setLogin] = useState(initialState) 
    // IDK IF THE LOGIN REQUEST WORKS, PROBABLY NOT (NEEDS TO BE WORKED ON) ~Gui
    function handleChange(event) { 
        setLogin({...User, [event.target.name]: event.target.value})
    }
    
    function handleSubmit(event) { 
        event.preventDefault();     
        if(!User.title || !User.content ) return 
        async function postLogin() {
            try {
                const response = await post('/api/Users', User); 
                props.history.push(`/Users/${response.data._id}`);  
            } catch(error) {
                console.log('error', error);
            }
        }
        postLogin();
    }
    
    function handleCancel() {
        props.history.push("/Users");
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="form-group login-form">
                    <p>Please Log In</p>
                    <label>Username</label>
                        <textarea name="Username" rows="1" value={setLogin.content} onChange={handleChange} className="form-control" />
                    <label>Password</label>
                        <textarea name="Password" rows="1" value={setLogin.content} onChange={handleChange} className="form-control" />
                <div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        {/* <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button> */}
                </div>
                </div>
            </form>
        </Container>
    )
}

export default LoginComp;