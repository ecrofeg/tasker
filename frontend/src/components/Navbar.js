import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {

	/**
	 * @param {Array} links
	 * @returns {Array}
	 */
	renderLinks(links = []) {
		const result = [];

		links.map((link, i) => {
			result.push(
				<li key={i} className="tsk-nav__link">
					<Link activeClassName="tsk-nav__link_active" to={link.route}>{link.title}</Link>
				</li>
			);
		});

		return result;
	}

	render() {
		return (
			<nav className="tsk-nav">
				<Link className="tsk-nav__logo" to="/">Tasker</Link>

				<ul className="tsk-nav__links">
					{this.renderLinks(this.props.links)}
				</ul>
			</nav>
		);
	}
}