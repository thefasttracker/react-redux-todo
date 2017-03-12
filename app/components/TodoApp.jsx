import React, {Component, PropTypes} from 'react'
import uuid from 'node-uuid'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'

export default class TodoApp extends Component {
	constructor(props) {
    	super(props)
		this.state = {
			showCompleted: false,
			searchText: "",
			todos: TodoAPI.getTodos()
       	}
    }

    componentDidUpdate(prevProps, prevState) {
    	TodoAPI.setTodos(this.state.todos)
    }

    handleAddTodo = (text) => {
    	this.setState({
    		todos: [
    			...this.state.todos,
    			{
    				id: uuid(),
    				text,
    				completed: false
    			}
    		]
    	})
    }

    handleToggle = (id) => {
    	let updatedTodos = this.state.todos.map((todo) => {
    		if (todo.id === id) {
    			todo.completed = !todo.completed
    		}
			return todo
    	})
    	this.setState({todos: updatedTodos})
    }

    handleSearch = (showCompleted, searchText) => {
    	this.setState({
    		showCompleted,
    		searchText: searchText.toLowerCase()
    	})
    }

    render() {
    	let {todos, showCompleted, searchText} = this.state
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>

			</div>
		)
	}
}