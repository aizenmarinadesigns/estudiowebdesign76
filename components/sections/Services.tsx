import { services } from '@/data/services'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para hacer crecer tu negocio online
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              {service.price && (
                <p className="text-blue-600 font-semibold mb-4">
                  {service.price}
                </p>
              )}
              <Button href="/servicios" variant="outline" size="sm" className="w-full">
                Saber Más
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para llevar tu negocio online?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contacta con nosotros para una consulta gratuita y descubre cómo podemos ayudarte a crecer.
          </p>
          <Button href="/contacto" size="lg">
            Solicitar Consulta Gratis
          </Button>
        </div>
      </div>
    </section>
  )
}
