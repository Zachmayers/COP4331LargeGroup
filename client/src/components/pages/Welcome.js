import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="center">
                <h1>Welcome to ListenIn!</h1>
                <a class="btn btn-outline-dark" href="#" role="button">Get Started</a>
            </div>
        );
    }
}

export default Welcome;