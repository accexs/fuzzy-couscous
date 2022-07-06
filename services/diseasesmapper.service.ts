import {
  getDiseaseIdsByName,
  getTreatmentDrugsForDiseaseId,
} from '../providers/rxclassapi.provider'
import { TreatmentDrugsType } from '../models/types'

export async function getTreatmentDrugsForDisease(
  diseaseName: string
): Promise<TreatmentDrugsType> {
  // check on cache for the disease key / TTL of 1 day
  const diseases = await getDiseaseIdsByName(diseaseName)
  let treatmentDrugs: TreatmentDrugsType = { drugs: [] }

  await Promise.all(
    diseases.map(async (diseaseId) => {
      const drugList = await getTreatmentDrugsForDiseaseId(diseaseId)
      treatmentDrugs.drugs.push(...drugList)
    })
  )

  return treatmentDrugs
}
