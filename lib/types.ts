export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  image: string
  category: 'web' | 'google-business' | 'instagram'
  results: string[]
  technologies?: string[]
  testimonial?: string
  clientName?: string
  link?: string
}

export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: string
  benefits: string[]
  price?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: 'web' | 'google-business' | 'instagram'
  message: string
}
