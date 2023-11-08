// import { SetupWorker } from 'msw'
// import { createHandlers } from './handlers/index'

// export const createWorkers = SetupWorker(...createHandlers())

import { setupWorker } from 'msw/browser'
import { handlers } from './handlers/index'

export const worker = setupWorker(...handlers)
