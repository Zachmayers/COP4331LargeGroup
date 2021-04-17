import React, { Component } from "react";
import { connect } from "react-redux";
import { getVerifyUser } from "../../actions/tokenAction";
import axios from 'axios';
import { render } from "react-dom";
import '../pages/Banner.css';

export default function Token() {
	const token = window.location.pathname.split("/")[2]

	if (token) {
		makeAPICall(token);
		// wait 5 seconds then redirect
		setTimeout(function () {
			window.location.href = 'https://listenin.us/TopTracks'
		}, 5000);
	}

	return (
		<div className="banner background-banner">
			<div className="artist-title">
				<h1 className="text-white">You will be redirected shortly</h1>
			</div>
		</div>
	)
}

async function makeAPICall(token) {
	try {
	  console.log(token)
	  await axios.post('/api/Verify', {token: token});
	} catch(error) {
	  console.log('error', error);
	}
  }

// export default class Token extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	// called before initial render
// 	componentWillMount() {
// 		this.props.getVerifyUser(this.props.match.params.token);
// 		console.log("token", this.props.match.params.token);
// 	}

// 	render() {
// 		return (
// 			<div>
// 			<h3 className="lead text-muted text-center">
// 			Your activation token has been confirmed, you can now sign in.
// 			</h3>
// 			</div>
// 		);
// 	}
// }

// export default connect(
// 	null,
// 	{ getVerifyUser }
// )(Token);