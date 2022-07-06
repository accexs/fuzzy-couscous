import createServer from './utils/server.util'
import loggerUtil from './utils/logger.util'

const app = createServer()
const log = loggerUtil

app.listen(3000, () => {
  log.info('app running')
})
