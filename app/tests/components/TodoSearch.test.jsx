import ReactDOM from 'react-dom'
import React from 'react'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import TodoList from 'TodoList'
import TodoSearch from 'TodoSearch'

describe('TodoSearch', () => {
	it('should exist', ()=> {
		expect(TodoSearch).toExist()
	})
	  it('should call onSearch with entered input text', () => {
	    let searchText = 'Dog';
	    let spy = expect.createSpy();
	    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

	    todoSearch.refs.searchText.value = searchText;
	    TestUtils.Simulate.change(todoSearch.refs.searchText);

	    expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});

   it('should call onSearch with proper checked value', () => {
    	let spy = expect.createSpy();
    	let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    	todoSearch.refs.showCompleted.checked = true;
    	TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    	expect(spy).toHaveBeenCalledWith(true, '');
  	});
})