import ReactDOM from 'react-dom'
import React from 'react'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import TodoApp from 'TodoApp'

describe('TodoApp', () => {
	it('should exist', ()=> {
		expect(TodoApp).toExist()
	})

	it('Should add todo to the todos state on handleAddTodo', () => {
		let todoText = 'test text'
		let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

		todoApp.setState({todos: []})
		todoApp.handleAddTodo(todoText)

		expect(todoApp.state.todos[0].text).toBe(todoText)
	})
})