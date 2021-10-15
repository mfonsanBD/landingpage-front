export type TechIcon = {
  technologyName: string
  technologyLogo: MediaProps
}

export type ConceptName = {
  conceptName: string
}

export type ModulesData = {
  title: string
  subtitle: string
  description: string
}

export type PricingboxDescriptionData = {
  title: string
}

export type SocialData = {
  social: string
  url: string
}

export type AuthorsData = {
  photo: MediaProps
  name: string
  role: string
  socialLinks: SocialData[]
  biography: string
}

export type ReviewData = {
  name: string
  comment: string
}

export type questionData = {
  question: string
  answer: string
}

export type MediaProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  title: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  media: MediaProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: MediaProps
}

export type TechnologiesProps = {
  title: string
  technologies: TechIcon[]
}

export type ConceptProps = {
  title: string
  concepts: ConceptName[]
}

export type ModulesProps = {
  title: string
  modules: ModulesData[]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  installments: number
  installmentPrice: number
  description: PricingboxDescriptionData[]
  button: ButtonProps
}

export type TeamProps = {
  title: string
  authors: AuthorsData[]
}

export type ReviewsProps = {
  title: string
  reviews: ReviewData[]
}

export type FaqProps = {
  title: string
  question: questionData[]
}

export type LandingPageProps = {
  logo: MediaProps
  Header: HeaderProps
  aboutSection: AboutProjectProps
  technologySection: TechnologiesProps
  conceptSection: ConceptProps
  modulesSection: ModulesProps
  agendaSection: AgendaProps
  pricingBox: PricingBoxProps
  teamSection: TeamProps
  reviewSection: ReviewsProps
  faqSection: FaqProps
}
