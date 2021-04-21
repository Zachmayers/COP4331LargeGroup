import React, { useState } from "react"; 
import { Container, Card, Row, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import './Style/Header.css';

function Delete(props) {

    if (!localStorage.getItem("user")) {
        props.history.push('/')
    }

    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    async function makeAPICall() {
        async function deleteAccount() {
            try {
                const id = localStorage.getItem("userId")
                const response = await axios.delete(`/api/delete/${id}`)
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
        deleteAccount();
    }

    function backToTopTracks() {
        props.history.push('/topTracks')
    }

    function HideOnSuccess() {
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
        } else {
            return(
                <div>
                    <div className="welcomeText">
                        Are you sure you wish to delete your account?
                    </div>
                    <ButtonGroup>
                        <Button variant="primary" onClick={makeAPICall}>
                            Confirm
                        </Button>
                        <Button  variant="primary" onClick={backToTopTracks}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </div>
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

export default Delete;