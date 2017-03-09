import React, {Component, PropTypes} from 'react'

export default class AddTodo extends Component {
	constructor(props) {
    	super(props)
		this.state = {
       	}
    }

    handleSubmit = (e) => {
    	if (e) e.preventDefault()
		let todoText = this.refs.todoText.value
    	
    	if (todoText.trim().length > 0) {
    		this.props.onAddTodo(todoText)
    	} else {
    		this.refs.todoText.focus() 
    	}
    	this.refs.todoText.value=''
    }

    render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit }>
					<input type="text" ref="todoText" placeholder="What do you need to do?"/>
					<button className="button expanded hollow">Add Todo</button>
				</form>
			</div>
		)
	}
}