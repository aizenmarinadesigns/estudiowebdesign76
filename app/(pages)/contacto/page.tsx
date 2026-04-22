import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contacto | Estudio Diseño Web 76',
  description: 'Ponte en contacto con nosotros para solicitar una consulta gratuita sobre tus servicios de diseño web.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ponte en Contacto
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulario */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo dentro de 24 horas.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Información de Contacto */}
            <div>
              <div className="space-y-8">
                {/* Email */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    Email
                  </h3>
                  <a
                    href="mailto:contact@estudiowebdesign76.com"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    contact@estudiowebdesign76.com
                  </a>
                </div>

                {/* Teléfono */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    Teléfono
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                {/* Horarios */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-3">🕐</span>
                    Horarios
                  </h3>
                  <p className="text-gray-700">
                    Lunes a Viernes
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 text-sm mt-3">
                    Sábados y domingos: Cerrado
                  </p>
                </div>

                {/* Redes Sociales */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    Síguenos
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Simulado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ubicación
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-gray-700 font-semibold">
                Integra tu dirección y mapa aquí
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '¿Cuánto cuesta crear un sitio web?',
                a: 'Los precios varían según la complejidad del proyecto. Ofrecemos soluciones desde $800 USD. Contáctanos para una cotización personalizada.',
              },
              {
                q: '¿Cuánto tiempo tarda un proyecto?',
                a: 'El tiempo varía según el alcance. Un sitio web típico toma entre 2-4 semanas. Hablaremos sobre plazos durante la consulta.',
              },
              {
                q: '¿Ofrecen soporte después del lanzamiento?',
                a: 'Sí, ofrecemos mantenimiento y soporte continuo. Hablamos sobre opciones de soporte durante la consulta.',
              },
              {
                q: '¿Garantizan resultados en Google?',
                a: 'No garantizamos resultados específicos, pero aplicamos las mejores prácticas de SEO y posicionamiento. Los resultados dependen de varios factores.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
