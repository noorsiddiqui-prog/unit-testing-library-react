import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import APIComponent from './../components/APIComponent'
import { setupWorker, rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Jack' }))
  }),
)

beforeAll(() => server.listen()) /// fire up the server and listen
afterEach(() => server.resetHandlers()) // reset the handlers
afterAll(() => server.close()) // fire close the server when all the tests are done

test('gets the data', async () => {
  render(<APIComponent />)
  const out = await waitFor(() => screen.getByRole('contentinfo'))
  expect(out).toHaveTextContent('Name is Jack')
})
