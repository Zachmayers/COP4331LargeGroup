import React, {useState} from 'react';
import Modal from 'react-modal'
import { post } from 'axios'; 
import Signup from './Signup';
import './Style/Header.css';

Modal.setAppElement('#root')

function Welcome(props){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const initialState = { Username: '', Password: '', FirstName: '', LastName: '', Email: '' }
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
        <div className="center">
            <h1>DISCOVER NEW MUSIC</h1>
            <a className="btn btn-outline-dark" href="#" role="button" onClick={() => setModalIsOpen(true)}>Get Started</a>
            
            <Modal isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={(true)} 
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {backgroundColor: 'rgba(36, 4, 66, 0.697)'},
                    content: {height: '550px', width: '520px'}
                }}
            >
                <div>
                    <div>
                        <div className="container">
                            <form onSumbit={handleSubmit}>
                            <div className="form-group signup-form">
                                <div className="container text-success">
                                    <div className="row sm-4 md-4 lg-4">
                                        <div className="col col-10 control-label ">
                                            
                                                <label>Username</label>
                                                    <textarea name="Username" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                                <label>Password</label>
                                                    <textarea name="Password" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                                <label>First</label>
                                                    <textarea name="FirstName" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                                <label>Last</label>
                                                    <textarea name="LastName" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                                <label>Email</label>
                                                    <textarea name="Email" rows="1" value={setSignup.content} onChange={handleChange} className="form-control" />
                                                <div className="row sm-4 md-4 lg-4 row-offset-sm-5 submit-btn">
                                                    <div className="col col-offset-sm-4 btn-group">
                                                        <input type="submit" value="Submit" className="btn btn-primary" />
                                                        <button type="button" onClick={() => setModalIsOpen(false)} className="btn btn-secondary">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </form>
                    
                    
                            </div>
                    
                    </div>
                </div>
            </Modal>
        </div>
    );

}

export default Welcome;