import React, {Component, PropTypes} from 'react'
import moment from 'moment'

export default class Todo extends Component {
	constructor(props) {
    	super(props)
		this.state = {
		}
    }

    render() {
    	let {id, text, completed, createdAt, completedAt} = this.props
    	let renderDate = () => {
    		let message = 'Created '
    		let timestamp = createdAt
    		if (completed) {
    			message = 'Completed '
    			timestamp = completedAt
    		}

    		return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    	}
		return (
			<div onClick={() => {this.props.onToggle(id)}}>
				<input type="checkbox" defaultChecked={completed}/>
				<p>{text}</p>
				<p>{renderDate() }</p>
			</div>
		)
	}
}