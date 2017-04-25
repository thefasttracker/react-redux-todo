import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect'

import * as actions from 'actions'

var createMockStore = configureMockStore([thunk])

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    let res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let res = actions.toggleShowCompleted()

    expect(res).toEqual(action);
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'My todo item'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 1234567
      }
    }
    let res = actions.addTodo(action.todo)

    expect(res).toEqual(action)
  })

  it ('should generate addTodos action object', () => {
    let todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }]
    let action = {
      type: 'ADD_TODOS',
      todos
    }
    let res = actions.addTodos(todos)
    expect(res).toEqual(action)
  })

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    let res = actions.toggleTodo(action.id)

    expect(res).toEqual(action)
  })
})