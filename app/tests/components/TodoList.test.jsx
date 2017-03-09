import ReactDOM from 'react-dom'
import React from 'react'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import TodoList from 'TodoList'
import Todo from 'Todo'


describe('TodoList', () => {
	it('should exist', ()=> {
		expect(TodoList).toExist()
	})
	it('should render one Todo component for each Todo item', () => {
		let todos = [
						{
							id: 1,
							text: 'walk the dog'
						}, {
							id: 2,
							text: 'clean the yard'
						}, {
							id: 3,
							text: 'leave a mail'
						}, {
							id: 4,
							text: 'play ps4 games'
						}
					]
		 let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
		 let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

		 expect(todosComponents.length).toBe(todos.length)
	})
})