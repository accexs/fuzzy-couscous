import createServer from '../utils/server.util'
import supertest from 'supertest'

const app = createServer()

describe('Treatment drugs endpoint', () => {
  it('return drug list', async () => {
    jest.setTimeout(10000)
    await drugsForDisease('common cold')
    await drugsForDisease('influenza')
    await drugsForDisease('chicken pox')
  })
})

async function drugsForDisease(diseaseName: string) {
  const res = await supertest(app).get(`/treatment/${diseaseName}`)
  expect(res.statusCode).toEqual(200)
  expect(res.body.drugs).toBeInstanceOf(Array)
}
