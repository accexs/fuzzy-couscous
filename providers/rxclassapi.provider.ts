import axios from 'axios'
import { DiseasesByNameType, DrugsMayTreatDisease, DrugType } from '../models/types'
import { omit } from 'lodash'

export async function getDiseaseIdsByName(diseaseName: string): Promise<string[]> {
  // TODO: create config to hold API endpoint
  const classType = 'DISEASE'
  const response = await axios.get(
    `https://rxnav.nlm.nih.gov/REST/rxclass/class/byName.json?className=${diseaseName}&classTypes=${classType}`
  )
  const diseases: DiseasesByNameType = response.data
  return diseases.rxclassMinConceptList.rxclassMinConcept.map((element: any) => {
    return element.classId
  })
}

export async function getTreatmentDrugsForDiseaseId(diseaseId: string): Promise<DrugType[]> {
  const relaSource = 'MEDRT'
  const rela = 'may_treat'
  // TODO: create config to hold API endpoint
  const response = await axios.get(
    `https://rxnav.nlm.nih.gov/REST/rxclass/classMembers.json?classId=${diseaseId}&relaSource=${relaSource}&rela=${rela}`
  )
  const treatmentDrugs: DrugsMayTreatDisease = response.data

  // cache drugs for a disease id
  return treatmentDrugs.drugMemberGroup.drugMember.map((drugData) => {
    return omit(drugData.minConcept, 'tty')
  })
}
