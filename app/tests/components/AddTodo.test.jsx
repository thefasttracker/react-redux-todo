import ReactDOM from 'react-dom'
import React from 'react'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import * as actions from 'actions'
import {AddTodo} from 'AddTodo'


describe('AddTodo', () => {
	it('should exist', ()=> {
		expect(AddTodo).toExist()
	})

	it('should dispatch AddTodo when valid todo text', () => {
    let todoText = 'Check mail'
    let action = actions.startAddTodo(todoText)
    let spy = expect.createSpy()
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch AddTodo when invalid todo text', () => {
    let todoText = ''
    let spy = expect.createSpy()
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})