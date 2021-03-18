import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <h1>DISCOVER NEW MUSIC</h1>
                <a className="btn btn-outline-dark" href="#" role="button">Get Started</a>
            </div>
        );
    }
}

export default Welcome;