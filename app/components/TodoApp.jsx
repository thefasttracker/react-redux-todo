import React, {Component, PropTypes} from 'react'
import uuid from 'node-uuid'
import moment from 'moment'

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
    				completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
    			}
    		]
    	})
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
                <h1 className="page-title">Todo App</h1>
                <div className="raw">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>                        
                        </div>
                    </div>
                </div>

			</div>
		)
	}
}