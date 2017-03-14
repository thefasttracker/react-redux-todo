import React, {Component, PropTypes} from 'react'
import Todo from 'Todo'

export default class TodoList extends Component {
	constructor(props) {
    	super(props)
		this.state = {
		}
    }

    render() {
    	let {todos, onToggle} = this.props
    	let renderTodos = todos.length === 0 ? 
    		<p className="container__message">Nothing To Do</p> : 
    		todos.map((todo) =>	
    			<Todo key={todo.id} {...todo} onToggle={onToggle}/>
    		)
		return (
			<div>
				{renderTodos}
			</div>
		)
	}
}