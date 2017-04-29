import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import * as actions from 'actions'
const store = require('configureStore').configure()
import firebase from 'app/firebase/'
import router from 'app/router/'

// Save todos on localStorage
// store.subscribe(() => {
// 	let state= store.getState()
// 	console.log('New state: ', state)
// 	TodoAPI.setTodos(state.todos)
// })
// const initialTodos = TodoAPI.getTodos()
// store.dispatch(actions.addTodos(initialTodos))

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(actions.login(user.uid))
		hashHistory.push('/todos')
	} else {
		store.dispatch(actions.logout())
		hashHistory.push('/')
	}
})

store.dispatch(actions.startAddTodos())

//foundation css
import 'style!css!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//app css
import 'style!css!sass!applicationStyles'

 
ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>, 
	document.getElementById('app')
);