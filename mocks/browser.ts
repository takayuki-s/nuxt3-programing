import { SetupWorker } from 'msw'
import { createHandlers } from './handlers/index'

export const createWorkers = SetupWorker(...createHandlers())
