import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

//add 'export class for tests
export class TodoList extends Component {
	constructor(props) {
    	super(props)
    	this.state = {
		}
    }

    render() {
    	let {todos, showCompleted, searchText} = this.props
    	let renderTodos = todos.length === 0 ? 
    		<p className="container__message">Nothing To Do</p> : 
    		TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) =>	
    			<Todo key={todo.id} {...todo}/>
    		)
		return (
			<div>
				{renderTodos}
			</div>
		)
	}
}

export default connect(
	(state) => {
		return state
	}
)(TodoList)