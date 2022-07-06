import createServer from '../utils/server.util'
import supertest from 'supertest'

const app = createServer()

describe('Healthcheck tests', () => {
  it('responds OK', async () => {
    const res = await supertest(app).get('/healthcheck')
    expect(res.statusCode).toEqual(200)
  })
})
