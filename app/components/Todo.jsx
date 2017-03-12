import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
	constructor(props) {
    	super(props)
		this.state = {
		}
    }

    render() {
    	let {id, text, completed} = this.props
		return (
			<div onClick={() => {this.props.onToggle(id)}}>
				<input type="checkbox" defaultChecked={completed}/>
				{text}
			</div>
		)
	}
}