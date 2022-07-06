import { Express, Request, Response } from 'express'
import { getTreatmentDrugsForDisease } from './services/diseasesmapper.service'

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  app.get('/treatment/:diseaseName', async (req: Request, res: Response) => {
    const treatmentDrugs = await getTreatmentDrugsForDisease(req.params.diseaseName)
    return res.send(treatmentDrugs)
  })
}

export default routes
