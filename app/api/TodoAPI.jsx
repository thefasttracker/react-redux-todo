export default {
	// Saves and get todos via localStorage
	// setTodos (todos) {
	// 	if (Array.isArray(todos)) {
	// 		localStorage.setItem('todos', JSON.stringify(todos))
	// 		return todos
	// 	}
	// },
	// getTodos () {
	// 	let stringTodos = localStorage.getItem('todos')
	// 	let todos = []

	// 	try {
	// 		todos = JSON.parse(stringTodos)
	// 	} catch (e) {

	// 	}
		
	// 	return Array.isArray(todos) ? todos : []
	// }, 

	filterTodos (todos, showCompleted, searchText) {
		let filteredTodos = todos

		//filter by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted
		})

		//filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			let text = todo.text.toLowerCase()
			return searchText.length === 0 || ~text.indexOf(searchText)
		})

		//sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) {
				return -1
			} else if (a.completed && !b.completed) {
				return 1
			} else {
				return 0
			}

		})

		return filteredTodos 
	}
}