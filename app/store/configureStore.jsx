// import {createStore, applyMiddleware} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

// const store = createStore, composeWithDevTools(applyMiddleware(thunk))
import * as redux from 'redux'
import thunk from 'redux-thunk'

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers'

export const configure = (initialState={}) => {
	const reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
		auth: authReducer
	})

	const store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
  		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

	return store
} 