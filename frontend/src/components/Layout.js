import React from 'react';
import Navbar from 'components/Navbar';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{
					route: 'dashboard',
					title: 'DASHBOARD'
				},
				{
					route: 'projects',
					title: 'PROJECTS'
				},
				{
					route: 'settings',
					title: 'SETTINGS'
				}
			]
		};
	}
	
	render() {
		return (
			<div className="container-fluid">
				<Navbar links={this.state.links}/>

				<div className="tsk">
					{this.props.children}
				</div>
			</div>
		);
	}
}