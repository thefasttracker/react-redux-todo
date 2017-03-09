import React, {Component, PropTypes} from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

export default class TodoApp extends Component {
	constructor(props) {
    	super(props)
		this.state = {
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

    render() {
    	let {todos} = this.state
		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>

			</div>
		)
	}
}