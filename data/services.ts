import { Service } from '@/lib/types'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Creación de Sitios Web Profesionales',
    description: 'Páginas web modernas y responsivas que generan conversiones',
    longDescription: 'Diseño y desarrollo de sitios web profesionales que combinan estética, funcionalidad y SEO. Desde landing pages hasta e-commerce completos, creamos soluciones digitales que transforman tu negocio en visible y rentable online.',
    icon: '🌐',
    benefits: [
      'Diseño responsive (móvil, tablet, desktop)',
      'Optimizado para SEO',
      'Carga rápida y rendimiento excelente',
      'Integración con redes sociales',
      'Formularios de contacto funcionales',
      'Análisis y reportes de tráfico',
      'Mantenimiento y actualizaciones incluidas',
      'Dominio y hosting profesional'
    ],
    price: 'Desde $800 USD'
  },
  {
    id: 'google-business',
    title: 'Visibilidad en Google (Google Business Profile)',
    description: 'Posiciónate en Google Maps y búsqueda local',
    longDescription: 'Optimización completa de tu Google Business Profile para aparecer en Google Maps y búsqueda local. Gestión de reseñas, fotos profesionales, posts actualizados y estrategia de reputación online que te ayuda a atraer clientes locales.',
    icon: '📍',
    benefits: [
      'Creación y optimización de Google Business Profile',
      'Fotos profesionales de productos/servicios',
      'Posts y actualizaciones semanales',
      'Gestión y respuesta de reseñas',
      'Análisis de competencia local',
      'Posicionamiento en Google Maps',
      'Atracción de clientes cercanos',
      'Aumento de llamadas y visitas'
    ],
    price: 'Desde $300 USD/mes'
  },
  {
    id: 'instagram',
    title: 'Presencia en Instagram - Contenido Visual',
    description: 'Estrategia Instagram con contenido creativo y profesional',
    longDescription: 'Creación de contenido visual impactante para Instagram que atrae, engacha y convierte. Desde fotografía profesional, reels educativos, carruseles interactivos, hasta estrategia completa de crecimiento y engagement con tu audiencia.',
    icon: '📸',
    benefits: [
      'Estrategia de contenido personalizada',
      'Creación de posts visualmente atractivos',
      'Diseño de reels educativos y entretenidos',
      'Stories templates profesionales',
      'Gestión de interacciones y comentarios',
      'Análisis de métricas y estadísticas',
      'Crecimiento orgánico de seguidores',
      'Conversión de followers en clientes'
    ],
    price: 'Desde $500 USD/mes'
  }
]

export const getServiceById = (id: string) => {
  return services.find(s => s.id === id)
}
