import React, { useState } from "react"; 
import axios from 'axios'; 
import Background from './Background';
import './Style/Header.css';
import logo from './PinkerLogo.png'

function Signup()
{

    const storage = require('../tokenStorage.js');
    const bp = require('./bp.js');

   var Username;
   var Password;
   var Email;
   var First;
   var Last;

   const [message,setMessage] = useState('');

   const doSignup = async event => 
   {
       event.preventDefault();

       var obj = {username:Username.value,password:Password.value, email:Email.value,first:First.value,last:Last.value};
       var js = JSON.stringify(obj);

       try
       { 
            // Axios code follows
            var config = 
            {
                method: 'post',
                url: bp.buildPath('api/Signup'),        // or api/addcard or api/searchcards
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                data: js
            };

            axios(config)
            .then(function (response) 
            {
                var res = response.data;
                if (res.error) 
                {
                    setMessage('User/Password combination incorrect');
                }
                else 
                {
                    storage.storeToken(res);
                    window.location.href = '/Home';
                }
            })
            .catch(function (error) 
            {
                setMessage(error);
            });
            
       }
       catch(e)
       {
           alert(e.toString());
           return;
       }    
   };
    
    return (
        <div>
            <div className="container">
                <div className="row xs-4 sm-4 md-4 lg-4  text-light">
                    <div className="col col-10">
                        <img src={logo} className="Login-logo" alt="logo" />
                            <p>Please create an account!</p>
                    </div>
                </div>
                <form onSubmit={doSignup}>
                <div className="form-group">
                    <div className="container text-success">
                        <div className="row sm-4 md-4 lg-4">
                            <div className="col col-10 control-label ">
                                <span id="inner-title">Please log in</span><br />
                                <input type="text" id="Username" placeholder="Username" ref={(c) => Username =c} /><br />
                                <input type="text" id="Password" placeholder="password" ref={(c) => Password =c} /><br />
                                <input type="text" id="Email" placeholder="Email" ref={(c) => Email =c} /><br />
                                <input type="text" id="First" placeholder="First" ref={(c) => First =c} /><br />
                                <input type="text" id="Last" placeholder="Last" ref={(c) => Last =c} /><br />
                                <input type="submit" id="loginButton" class="buttons" 
                                    onClick={doSignup} />
                                <span id="loginResult">{message}</span>
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