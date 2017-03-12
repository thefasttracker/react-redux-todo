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
    	let renderTodos = todos.map((todo) => 
    		<Todo key={todo.id} {...todo} onToggle={onToggle}/>
    	)
		return (
			<div>
				{renderTodos}
			</div>
		)
	}
}