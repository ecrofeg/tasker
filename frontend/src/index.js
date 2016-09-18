import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import 'bootstrap/scss/bootstrap.scss';

import 'css/main.styl';
import Layout from 'components/Layout';
import Dashboard from 'components/Dashboard';
import Projects from 'components/Projects';
import Settings from 'components/Settings';


const $app = document.getElementsByClassName('react-root')[0];

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Dashboard}/>
			<Route path="dashboard" component={Dashboard}/>
			<Route path="projects" component={Projects}/>
			<Route path="settings" component={Settings}/>
		</Route>
	</Router>,
	$app
);