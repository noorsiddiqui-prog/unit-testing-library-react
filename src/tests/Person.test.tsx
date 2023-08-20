import React from 'react'
import { render, screen } from '@testing-library/react'
import Person from '../components/Person'

test('should render a name', () => {
  render(<Person name="Noor" />)
  const linkElement = screen.getByText(/Name is Noor/i)
  const divElement = screen.getByRole('contentinfo')
  expect(linkElement).toBeInTheDocument()
  expect(divElement).toHaveTextContent('Name is Noor')
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})
