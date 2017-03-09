import React, {Component, PropTypes} from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

export default class TodoApp extends Component {
	constructor(props) {
    	super(props)
		this.state = {
			showCompleted: false,
			searchText: "",
			todos: [
				{
					id: 1,
					text: 'walk the dog'
				}, {
					id: 2,
					text: 'clean the yard'
				}, {
					id: 3,
					text: 'leave a mail'
				}, {
					id: 4,
					text: 'play ps4 games'
				}
			]
       	}
    }

    handleAddTodo = (text) => {
    	alert("new todo: " + text)
    }

    handleSearch = (showCompleted, searchText) => {
    	this.setState({
    		showCompleted,
    		searchText: searchText.toLowerCase()
    	})
    }

    render() {
    	let {todos} = this.state
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>

			</div>
		)
	}
}