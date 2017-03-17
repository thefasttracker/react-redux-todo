import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import TodoApp from 'TodoApp'

import * as actions from 'actions'
const store = require('configure').configure()

//foundation css
import 'style!css!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//app css
import 'style!css!sass!applicationStyles'

ReactDOM.render(
	<TodoApp/>, 
	document.getElementById('app')
);