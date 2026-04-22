import type { Metadata } from 'next'
import { services } from '@/data/services'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Servicios de Diseño Web | Estudio Diseño Web 76',
  description: 'Conoce nuestros servicios: Creación de sitios web, posicionamiento en Google Business e Instagram para pequeños emprendimientos.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Soluciones digitales completas para hacer crecer tu negocio online
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, idx) => (
            <div key={service.id} className={idx > 0 ? 'mt-20 pt-20 border-t border-gray-200' : ''}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contenido */}
                <div>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Beneficios */}
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Beneficios:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-3 text-lg">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.price && (
                    <p className="text-2xl font-bold text-blue-600 mb-6">
                      {service.price}
                    </p>
                  )}

                  <Button href="/contacto" size="lg">
                    Solicitar Cotización
                  </Button>
                </div>

                {/* Ilustración */}
                <div className="hidden lg:flex">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 h-96 flex items-center justify-center w-full">
                    <div className="text-9xl">{service.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita y descubre cuál es el mejor servicio para tu negocio.
          </p>
          <Button href="/contacto" size="lg">
            Iniciar Consulta Gratis
          </Button>
        </div>
      </section>
    </>
  )
}
