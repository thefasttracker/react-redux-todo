import moment from 'moment'

import firebase, { firebaseRef, githubProvider } from 'app/firebase/'

export const setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
}

export const toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

export const addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
}

export const startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			text,
			completed: false,
            createdAt: moment().unix(),
            completedAt: null
		}
		var uid = getState().auth.uid
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo)
		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}))
		})
	}
}

export const addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
}

export const startAddTodos = () => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid
		let todosRef = firebaseRef.child(`users/${uid}/todos`)
		return todosRef.once('value').then((snapshot) => {
			let todos = snapshot.val() || {}
			let parsedTodos = []
			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				})
			})
			dispatch(addTodos(parsedTodos))
		})
	}
}

export const updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	}
}

export const startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`)
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		}

		// return here is for tests only
		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates))

		})
	}
}

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
}

export const startLogin = () => {
	return (dispatch, getState) => {
		return firebase.auth().signInWithPopup(githubProvider).then((result) => {
			console.log('Auth done', result)
		}, (error) => {
			console.log('Unable to auth', error)
		})
	}
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const startLogout = () => {
	return (dispatch, getState) => {
		return firebase.auth().signOut().then(() => {
			console.log('Logged out.')
		})
	}
}



