import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'

export class AddTodo extends Component {
	constructor(props) {
    	super(props)
		this.state = {
       	}
    }

    handleSubmit = (e) => {
    	if (e) e.preventDefault()
        let {dispatch} = this.props
		let todoText = this.refs.todoText.value
    	
    	if (todoText.trim().length > 0) {
            dispatch(actions.addTodo(todoText))
    	} else {
    		this.refs.todoText.focus() 
    	}
    	this.refs.todoText.value=''
    }

    render() {
		return(
			<div className="container__footer">
				<form onSubmit={this.handleSubmit }>
					<input type="text" ref="todoText" placeholder="What do you need to do?"/>
					<button className="button expanded hollow">Add Todo</button>
				</form>
			</div>
		)
	}
}

export default connect()(AddTodo)
