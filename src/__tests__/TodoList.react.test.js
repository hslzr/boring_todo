import React from 'react'
import { mount } from './Enzyme'

import TodoList from '../TodoList'

describe('TodoList tests', () => {
  it('renders a list of Todo components', () => {
    const items = {
      1234: {text: 'Demodemo', completed: false},
      1235: {text: 'Demodemo', completed: false},
      1236: {text: 'Demodemo', completed: false},
    }

    const wrapper = mount(<TodoList tasks={items} /> )

    expect(wrapper.find('.todo-list')).toBeDefined()
    expect(wrapper.find('.todo-item')).toHaveLength(Object.entries(items).length)
  });

  it('renders correct text in item', () => {
    const items = {
      1234: {text: 'Demo1', completed: false },
      1235: {text: 'Demo1', completed: false },
      1236: {text: 'Demo1', completed: false },
    }

    const wrapper = mount(<TodoList tasks={items} />)

    expect(wrapper.find('.todo-item .todo-content').get(0).props.children).toHaveAttribute('value', 'Demo1')
  })
})
