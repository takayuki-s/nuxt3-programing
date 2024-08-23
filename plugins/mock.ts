import { worker } from '@/mocks/browser'

// export default () => {
//   worker.start()
//   console.log('worker started')
//   // TODO 以下切り替え
//   // if (process.env.NODE_ENV === 'development') {
//   //   const { worker } = require('../mocks/browser')
//   //   worker.start()
//   //   console.log('worker started')
//   // }
// }

export default defineNuxtPlugin(async () => {
  await worker.start({
    onUnhandledRequest: 'bypass',
  })
})
