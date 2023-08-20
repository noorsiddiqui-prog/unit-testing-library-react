import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonWrapper from '../components/ButtonWrapper'

test('handles onClick', () => {
  const onClick = jest.fn() // stub function => track how often is called, and what  is called with.
  render(<ButtonWrapper onClick={onClick} title="Add Item" />)
  const buttonElement = screen.getByText('Add Item')
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})
