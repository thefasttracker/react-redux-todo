import React, {Component, PropTypes} from 'react'
import Todo from 'Todo'

export default class TodoList extends Component {
	constructor(props) {
    	super(props)
		this.state = {
		}
    }

    render() {
    	let {todos} = this.props
    	let renderTodos = todos.map((todo) => 
    		<Todo key={todo.id} {...todo} />
    	)
		return (
			<div>
				{renderTodos}
			</div>
		)
	}
}