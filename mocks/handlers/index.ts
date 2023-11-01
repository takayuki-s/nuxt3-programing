import type { RequestHandler } from 'msw'
import { rest } from 'msw'

export const createHandlers: () => RequestHandler[] = () => [
  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          message: 'hello',
        },
      ]),
    )
  }),
]
