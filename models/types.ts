export type DrugType = {
  rxcui: number | string
  name: string
}

export type TreatmentDrugsType = {
  drugs: DrugType[]
}

export type DiseasesByNameType = {
  rxclassMinConceptList: {
    rxclassMinConcept: [
      {
        classId: string
        className: string
        classType: string
      }
    ]
  }
}

export type DrugsMayTreatDisease = {
  drugMemberGroup: {
    drugMember: [
      {
        minConcept: {
          rxcui: string
          name: string
        }
      }
    ]
  }
}
