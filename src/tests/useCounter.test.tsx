import {
  fireEvent,
  renderHook,
  act,
  render,
  screen,
} from '@testing-library/react'
import useCounter from './../components/useCounter'

test('should inrement', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
