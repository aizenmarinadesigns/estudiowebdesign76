import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-muebles',
    title: 'E-commerce de Muebles - Diseño Web Completo',
    description: 'Tienda online profesional para venta de muebles artesanales con carrito de compras, pasarela de pagos integrada y gestión de inventario en tiempo real.',
    shortDescription: 'Tienda online de muebles con carrito y pagos',
    image: '/images/projects/ecommerce-muebles.jpg',
    category: 'web',
    results: [
      '+300% en ventas mensuales',
      '50,000 visitantes/mes',
      'Conversión: 3.5%',
      'Tiempo carga: < 2s'
    ],
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
    clientName: 'Muebles Artesanos SRL',
    testimonial: 'Nuestras ventas se triplicaron en el primer mes. El sitio es rápido, bonito y fácil de usar.',
  },
  {
    id: '2',
    slug: 'restaurante-las-delicias',
    title: 'Sitio Web Restaurante Las Delicias',
    description: 'Página web moderna para restaurante con menú interactivo, reservas online, galería de platos y integración con Google Maps para ubicación.',
    shortDescription: 'Web para restaurante con reservas online',
    image: '/images/projects/restaurante-delicias.jpg',
    category: 'web',
    results: [
      '+40% en reservas',
      'Top 3 en búsqueda local',
      '1000+ visitas/semana',
      'Rating 4.8/5 estrellas'
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    clientName: 'Las Delicias Gastro',
    testimonial: 'El sitio web nos ayudó a aumentar nuestras reservas significativamente. Los clientes aman lo fácil que es reservar.',
  },
  {
    id: '3',
    slug: 'floristeria-bella-rosa',
    title: 'Optimización Google Business - Florería Bella Rosa',
    description: 'Estrategia completa de optimización Google Business Profile, fotos profesionales de productos, posts actualizados y gestión de reseñas para una florería local.',
    shortDescription: 'Optimización Google Business para florería',
    image: '/images/projects/floreria-rosa.jpg',
    category: 'google-business',
    results: [
      '+85% visitas desde Google Maps',
      'Top 1 en búsquedas locales',
      '95 reseñas positivas',
      '+200% en llamadas'
    ],
    clientName: 'Bella Rosa Flores',
    testimonial: 'Ahora somos la florería #1 en Google Maps. Los clientes nos encuentran fácilmente.',
  },
  {
    id: '4',
    slug: 'consultoria-empresarial',
    title: 'Sitio Web + Presencia Google - Consultoría Empresarial',
    description: 'Creación de sitio web profesional para consultora empresarial combinado con optimización Google Business, posts semanales y gestión de reputación online.',
    shortDescription: 'Web + Google Business para consultora',
    image: '/images/projects/consultoria-web.jpg',
    category: 'web',
    results: [
      '+5 clientes nuevos/mes',
      'Posición 1-3 en palabras clave principales',
      '500+ visitas/mes',
      'Tasa de conversión 8%'
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
    clientName: 'Summit Consulting',
    testimonial: 'El sitio web genera leads constantemente. La inversión se recuperó en 3 meses.',
  },
  {
    id: '5',
    slug: 'boutique-ropa-instagram',
    title: 'Estrategia Instagram + Contenido Visual - Boutique Fashion',
    description: 'Desarrollo de estrategia Instagram completa con creación de contenido visual atractivo, carruseles interactivos, reels educativos y diseño de stories templates.',
    shortDescription: 'Estrategia Instagram y contenido visual profesional',
    image: '/images/projects/boutique-fashion-instagram.jpg',
    category: 'instagram',
    results: [
      '+5,000 seguidores en 3 meses',
      '45% engagement rate',
      '+$50,000 en ventas directas',
      '200+ DMs de clientes interesados'
    ],
    clientName: 'Boutique La Moda',
    testimonial: 'Instagram se convirtió en nuestro principal canal de ventas. El contenido que crean es increíble.',
  },
]

export const getProjectBySlug = (slug: string) => {
  return projects.find(p => p.slug === slug)
}
