import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../components/Counter'

test('handles click', () => {
  const onClick = jest.fn()
  render(<Counter />)
  const divElement = screen.getByRole('contentinfo')
  const buttonElement = screen.getByText('Add One')
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent('Count is 1')
})
