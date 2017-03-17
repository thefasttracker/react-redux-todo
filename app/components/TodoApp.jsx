import React, {Component, PropTypes} from 'react'
import uuid from 'node-uuid'
import moment from 'moment'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

export default class TodoApp extends Component {
	constructor(props) {
    	super(props)
    }

    render() {
		return (
			<div>
                <h1 className="page-title">Todo App</h1>
                <div className="raw">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>                        
                        </div>
                    </div>
                </div>

			</div>
		)
	}
}