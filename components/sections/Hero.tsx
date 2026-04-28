import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Convierte tu Negocio en una
              <span className="text-blue-600"> Presencia Digital Impactante</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ayudamos a pequeños emprendimientos a volverse visibles online mediante sitios web profesionales, posicionamiento en Google y presencia en redes sociales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg">
                Solicitar Consulta Gratis
              </Button>
              <Button href="/portafolio" variant="outline" size="lg">
                Ver Proyectos
              </Button>
            </div>

            {/* Números Destacados */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-sm text-gray-600">Proyectos Completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <p className="text-sm text-gray-600">Clientes Satisfechos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$5M+</div>
                <p className="text-sm text-gray-600">En Ventas Generadas</p>
              </div>
            </div>
          </div>

          {/* Imagen/Ilustración */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-xl font-semibold">Diseño Web Profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
