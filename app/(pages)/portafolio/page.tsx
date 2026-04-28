import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Portafolio | Casos de Éxito | Estudio Diseño Web 76',
  description: 'Conoce nuestros proyectos realizados y los resultados que hemos alcanzado con nuestros clientes.',
}

export default function PortfolioPage() {
  const webProjects = projects.filter(p => p.category === 'web')
  const googleProjects = projects.filter(p => p.category === 'google-business')
  const instagramProjects = projects.filter(p => p.category === 'instagram')

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nuestro Portafolio
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Casos de éxito de pequeños emprendimientos que crecieron gracias a nuestros servicios
          </p>
        </div>
      </section>

      {/* Proyectos por Categoría */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Proyectos Web */}
          {webProjects.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                🌐 Sitios Web Profesionales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webProjects.map((project) => (
                  <Card key={project.id} hover>
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                      <div className="text-6xl">🌐</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/portafolio/${project.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center"
                    >
                      Ver Proyecto →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Proyectos Google Business */}
          {googleProjects.length > 0 && (
            <div className="mb-20 border-t border-gray-200 pt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                📍 Google Business & Maps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {googleProjects.map((project) => (
                  <Card key={project.id} hover>
                    <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                      <div className="text-6xl">📍</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/portafolio/${project.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center"
                    >
                      Ver Proyecto →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Proyectos Instagram */}
          {instagramProjects.length > 0 && (
            <div className="border-t border-gray-200 pt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                📸 Presencia en Instagram
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instagramProjects.map((project) => (
                  <Card key={project.id} hover>
                    <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                      <div className="text-6xl">📸</div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/portafolio/${project.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center"
                    >
                      Ver Proyecto →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Tu negocio podría ser el próximo caso de éxito?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita sin compromiso
          </p>
          <Button href="/contacto" size="lg">
            Solicitar Consulta Gratis
          </Button>
        </div>
      </section>
    </>
  )
}
