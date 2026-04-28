import type { Metadata } from 'next'
import { projects, getProjectBySlug } from '@/data/projects'
import Button from '@/components/ui/Button'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Proyecto no encontrado' }
  }

  return {
    title: `${project.title} | Estudio Diseño Web 76`,
    description: project.description,
  }
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const categoryLabel = {
    web: 'Creación de Sitio Web',
    'google-business': 'Google Business & Maps',
    instagram: 'Presencia en Instagram',
  }[project.category]

  const categoryEmoji = {
    web: '🌐',
    'google-business': '📍',
    instagram: '📸',
  }[project.category]

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl">{categoryEmoji}</span>
            <span className="text-blue-100 font-semibold">{categoryLabel}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-blue-100">
            {project.description}
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido Principal */}
            <div className="lg:col-span-2">
              {/* Imagen del Proyecto */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 mb-12 flex items-center justify-center">
                <div className="text-9xl">{categoryEmoji}</div>
              </div>

              {/* Descripción */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Acerca del Proyecto
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Resultados */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Resultados Alcanzados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-green-50 border-l-4 border-green-500 p-4 rounded"
                    >
                      <p className="text-green-700 font-semibold text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologías */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tecnologías Utilizadas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && project.clientName && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "{project.testimonial}"
                  </p>
                  <p className="font-bold text-gray-900">
                    {project.clientName}
                  </p>
                  {project.clientName && (
                    <p className="text-gray-600">{project.clientName}</p>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Card de Resumen */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.clientName}
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">CATEGORÍA</p>
                    <p className="text-gray-900 font-semibold">{categoryLabel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">RESULTADOS</p>
                    <p className="text-green-600 font-bold text-lg">
                      {project.results[0]}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Button href="/contacto" size="lg" className="w-full">
                  Obtén Resultados Similares
                </Button>

                <Button
                  href="/portafolio"
                  variant="outline"
                  size="lg"
                  className="w-full mt-3"
                >
                  Ver Más Proyectos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Tu negocio necesita resultados como estos?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a crecer.
          </p>
          <Button href="/contacto" size="lg">
            Iniciar Consulta Gratis
          </Button>
        </div>
      </section>
    </>
  )
}
