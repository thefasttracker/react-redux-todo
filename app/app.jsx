import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import TodoApp from 'TodoApp'
import * as actions from 'actions'
import TodoAPI from 'TodoAPI'
const store = require('configureStore').configure()

store.subscribe(() => {
	let state= store.getState()
	console.log('New state: ', state)
	TodoAPI.setTodos(state.todos)
})

const initialTodos = TodoAPI.getTodos()

store.dispatch(actions.addTodos(initialTodos))

//foundation css
import 'style!css!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//app css
import 'style!css!sass!applicationStyles'

 
ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>, 
	document.getElementById('app')
);