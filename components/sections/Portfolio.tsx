import Link from 'next/link'
import { projects } from '@/data/projects'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Portfolio() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Casos de éxito de pequeños emprendimientos que crecieron gracias a nuestros servicios
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} hover>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">
                  {project.category === 'web' && '🌐'}
                  {project.category === 'google-business' && '📍'}
                  {project.category === 'instagram' && '📸'}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.shortDescription}
              </p>

              {/* Resultados */}
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

        {/* CTA a Portafolio Completo */}
        <div className="text-center">
          <Button href="/portafolio" variant="outline" size="lg">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}
