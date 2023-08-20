import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

test('should render a name', () => {
  const items = [
    {
      name: 'test',
      href: '/test',
    },
  ]
  render(<Sidebar items={items} />)
  const achorElements = screen.getAllByRole('navigation')
  expect(achorElements[0]).toHaveTextContent(items[0].name)
  expect(achorElements[0]).toHaveAttribute('href', items[0].href)
})
