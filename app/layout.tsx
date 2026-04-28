import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://estudiowebdesign76.com'),
  title: {
    default: 'Estudio Diseño Web 76 - Creación de Sitios Web Profesionales',
    template: '%s | Estudio Diseño Web 76',
  },
  description: 'Creamos sitios web profesionales, posicionamiento en Google Business e Instagram para pequeños emprendimientos. Aumenta tu visibilidad online.',
  keywords: [
    'diseño web',
    'desarrollo web',
    'SEO',
    'Google Business',
    'Instagram',
    'páginas web profesionales',
    'posicionamiento online',
  ],
  authors: [
    {
      name: 'Estudio Diseño Web 76',
      url: 'https://estudiowebdesign76.com',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://estudiowebdesign76.com',
    title: 'Estudio Diseño Web 76 - Creación de Sitios Web Profesionales',
    description: 'Creamos sitios web profesionales, posicionamiento en Google Business e Instagram para pequeños emprendimientos.',
    siteName: 'Estudio Diseño Web 76',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Diseño Web 76',
    description: 'Creamos sitios web profesionales y presencia online para tu negocio',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://estudiowebdesign76.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
