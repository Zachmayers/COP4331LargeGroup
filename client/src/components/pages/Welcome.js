import React from 'react';
import Login from './Login/Login';
import {Button, Collapse} from 'react-bootstrap';

class Welcome extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			open: true,
		};
	}

    // render() {
	// 	const { open } = this.state;
	// 	return (
	// 		<div style={{ width: 300 }}>
	// 			<Button
	// 				onClick={() => this.setState({ open: !open })}
	// 				aria-controls="example-collapse-text"
	// 				aria-expanded={open}
	// 			>
	// 				click
    //             </Button>
	// 			<Collapse in={this.state.open}>
	// 				<div id="example-collapse-text">
	// 					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
    //         labore wes anderson cred nesciunt sapiente ea proident.
    //       </div>
	// 			</Collapse>
	// 		</div>
	// 	);
	// }

    render() {
        const { open } = this.state
        let str = "Hellowuw"
        return (
            <div className="center">
                <h1>DISCOVER NEW MUSIC</h1>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Get Started
                </button>
                <div class="collapse" id="collapseExample">
                    <p>{str}</p>
                    <Login />
                </div>
            </div>
        );
    }
}

export default Welcome;