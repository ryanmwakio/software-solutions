export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  features: string[]
  process: ProcessStep[]
  technologies: string[]
  caseStudies?: string[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  slug: string
  category: string
  technologies: string[]
  client?: string
  year: number
  problem?: string
  solution?: string
  impact?: string
  testimonial?: Testimonial
  gallery?: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  slug: string
  category: string
  tags: string[]
  author: Author
  publishedAt: Date
  readingTime: number
}

export interface Author {
  name: string
  bio: string
  avatar: string
  linkedin?: string
}

export interface JobListing {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Intern'
  description: string
  requirements: string[]
  benefits: string[]
  slug: string
  postedAt: Date
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  linkedin?: string
  twitter?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  avatar?: string
  rating: number
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  subject: string
  message: string
  service?: string
}

export interface NewsletterSubscription {
  email: string
}