import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import TodoApp from 'TodoApp'
import * as actions from 'actions'
import TodoAPI from 'TodoAPI'
import Login from 'Login'
const store = require('configureStore').configure()

// Save todos on localStorage
// store.subscribe(() => {
// 	let state= store.getState()
// 	console.log('New state: ', state)
// 	TodoAPI.setTodos(state.todos)
// })
// const initialTodos = TodoAPI.getTodos()
// store.dispatch(actions.addTodos(initialTodos))

store.dispatch(actions.startAddTodos())

//foundation css
import 'style!css!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//app css
import 'style!css!sass!applicationStyles'

 
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/>
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('app')
);