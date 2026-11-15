export interface AssessmentAnswer {
  pathway: string
  destination: string
  europeCountry?: string
  profile: string
  timeline: string
  name: string
  email: string
  phone: string
  consultationDate: string
  consultationTime: string
  message: string
}

export interface QuestionOption {
  id: string
  title: string
  desc?: string
  iconName?: string
}

export interface StepMetadata {
  id: string
  label: string
}
