import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import Second from 'components/second';
import {Router, Route, hashHistory} from 'react-router';

const $app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="second" component={Second}/>
	</Router>,
	$app
);