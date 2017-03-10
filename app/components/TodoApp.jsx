import React, {Component, PropTypes} from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'

export default class TodoApp extends Component {
	constructor(props) {
    	super(props)
		this.state = {
			showCompleted: false,
			searchText: "",
			todos: [
				{
					id: uuid(),
					text: 'walk the dog'
				}, {
					id: uuid(),
					text: 'clean the yard'
				}, {
					id: uuid(),
					text: 'leave a mail'
				}, {
					id: uuid(),
					text: 'play ps4 games'
				}
			]
       	}
    }

    handleAddTodo = (text) => {
    	this.setState({
    		todos: [
    			...this.state.todos,
    			{
    				id: uuid(),
    				text
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