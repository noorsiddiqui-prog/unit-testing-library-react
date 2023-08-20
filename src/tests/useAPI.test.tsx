import {
  fireEvent,
  renderHook,
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { setupWorker, rest } from 'msw'
import { setupServer } from 'msw/node'
import useAPI from '../components/useAPI'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Jack' }))
  }),
)

beforeAll(() => server.listen()) /// fire up the server and listen
afterEach(() => server.resetHandlers()) // reset the handlers
afterAll(() => server.close()) // fire close the server when all the tests are done

test('should inrement', async () => {
  const { result } = renderHook(() => useAPI())

  await waitFor(() => {
    expect(result.current).toEqual({ name: 'Jack' })
  })
})
