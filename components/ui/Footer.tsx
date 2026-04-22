import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4">Estudio Diseño Web 76</h3>
            <p className="text-gray-400">
              Transformamos pequeños emprendimientos en presencias digitales impactantes que generan resultados.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/servicios" className="hover:text-white transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="hover:text-white transition">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contact@estudiowebdesign76.com" className="hover:text-white transition">
                  contact@estudiowebdesign76.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">Atención: Lunes a Viernes 9am-6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Estudio Diseño Web 76. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
