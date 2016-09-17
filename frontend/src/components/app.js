import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world!?!</h1>
				<Link to="second">go to the second page</Link>
			</div>
		);
	}
};