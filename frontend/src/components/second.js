import React from 'react';
import {Link} from 'react-router';

export default class Second extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World again :)</h1>
				<Link to="/">back</Link>
			</div>
		);
	}
}