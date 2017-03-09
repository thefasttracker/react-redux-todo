import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
	constructor(props) {
    	super(props)
		this.state = {
		}
    }

    render() {
    	let {id, text} = this.props
		return (
			<div>
				{id}. {text}
			</div>
		)
	}
}