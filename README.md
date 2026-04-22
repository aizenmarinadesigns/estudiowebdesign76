# Estudio Diseño Web 76 - Sitio Web Profesional

Web de portafolio personal para Estudio Diseño Web 76, que ofrece servicios de:
- 🌐 Creación de sitios web profesionales
- 📍 Posicionamiento en Google Business (Google Maps)
- 📸 Presencia en Instagram con contenido visual profesional

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Formularios**: React Hook Form + Zod
- **Email**: Resend.io
- **Hosting**: Vercel

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación Local

### 1. Clonar el repositorio

```bash
git clone <tu-repo-url>
cd estudiowebdesign76
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus configuraciones:

```
NEXT_PUBLIC_SITE_NAME=Estudio Diseño Web 76
NEXT_PUBLIC_SITE_URL=https://tusitio.com
RESEND_API_KEY=tu_api_key_aqui
EMAIL_FROM=noreply@tusitio.com
CONTACT_EMAIL=tuEmail@tusitio.com
```

**Obtener Resend API Key:**
1. Ve a [resend.com](https://resend.com)
2. Regístrate/Inicia sesión
3. Ve a API Keys
4. Copia tu API key

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
app/
├── layout.tsx                    # Layout raíz con SEO
├── page.tsx                      # Home/Landing
├── api/contact/route.ts          # API para formulario de contacto
└── (pages)/
    ├── servicios/page.tsx        # Página de servicios
    ├── portafolio/page.tsx       # Galería de proyectos
    ├── portafolio/[slug]/        # Detalle de proyecto individual
    └── contacto/page.tsx         # Página de contacto

components/
├── ui/                           # Componentes base reutilizables
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
└── sections/                     # Secciones de contenido
    ├── Hero.tsx
    ├── Services.tsx
    ├── Portfolio.tsx
    ├── Testimonials.tsx
    └── ContactForm.tsx

data/
├── projects.ts                   # Array de proyectos
├── services.ts                   # Servicios ofrecidos
└── testimonials.ts               # Testimonios de clientes

lib/
├── types.ts                      # Tipos TypeScript
```

## 🎨 Personalización

### Cambiar colores

Edita los colores en `app/globals.css` o en `tailwind.config.ts`.

### Actualizar contenido

- **Proyectos**: Edita `data/projects.ts`
- **Servicios**: Edita `data/services.ts`
- **Testimonios**: Edita `data/testimonials.ts`

### Cambiar información de contacto

Actualiza en `components/ui/Footer.tsx` y `app/(pages)/contacto/page.tsx`.

## 📧 Configuración de Emails

El formulario de contacto usa **Resend** para enviar emails.

### Pasos:
1. Crea cuenta en [resend.com](https://resend.com)
2. Obtén tu API key
3. Agrega tu dominio (verifica propietario)
4. Configura `RESEND_API_KEY` en variables de entorno

## 🚀 Despliegue en Vercel

### Opción 1: Desde Vercel Dashboard

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Configura variables de entorno
4. Deploy

### Opción 2: Desde CLI

```bash
npm install -g vercel
vercel
```

## 🌐 Conectar Dominio Personalizado

1. En Vercel: Domains → Add Domain
2. Configura tu DNS según instrucciones
3. Espera a que se propague el DNS (puede tomar 24-48 horas)

## 📱 Características

✅ **Responsive Design** - Mobile first
✅ **SEO Optimizado** - Metadatos, Open Graph, Sitemap
✅ **Formulario de Contacto** - Con validación y envío de emails
✅ **Portafolio Dinámico** - Página individual por proyecto
✅ **TypeScript** - Type safety completo
✅ **Performance** - Optimizado para Core Web Vitals
✅ **Tailwind CSS** - Estilos modernos y customizables
