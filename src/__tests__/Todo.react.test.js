import React from 'react'
import renderer from 'react-test-renderer'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todo from '../Todo'

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
