import React from 'react'
import renderer from 'react-test-renderer'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todo from '../src/Todo'

configure({ adapter: new Adapter() })

test('Todo exists? idk', () => {
  const component = renderer.create(
    <Todo 
      task={{text: 'Demo test', completed: false}}
      index={1234}
      key={1234} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Todo has completed styles when completed', () => {
  const component = shallow(<Todo task={{text: 'Demo', completed: true}} index={1234} />)
  console.log(component)
})
