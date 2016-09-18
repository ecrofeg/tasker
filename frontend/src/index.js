import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import 'bootstrap/scss/bootstrap.scss';

import 'css/main.styl';
import Layout from 'components/Layout';


const $app = document.getElementsByClassName('react-root')[0];

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}/>
	</Router>,
	$app
);