# Guía de Setup - Estudio Diseño Web 76

Tu sitio web está creado y listo para ser personalizado y desplegado. Sigue esta guía paso a paso.

## ✅ Paso 1: Configurar Variables de Entorno

### Localmente (para testing):

1. Copia `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

2. Edita `.env.local` con tus datos:
```
NEXT_PUBLIC_SITE_NAME=Estudio Diseño Web 76
NEXT_PUBLIC_SITE_URL=https://tusitio.com (cambiar cuando tengas dominio)
NEXT_PUBLIC_PHONE=Tu teléfono
NEXT_PUBLIC_EMAIL=tu@email.com

EMAIL_FROM=noreply@tusitio.com
CONTACT_EMAIL=tu@email.com
RESEND_API_KEY=re_xxxxx (obtener de Resend)
```

### En Vercel (después de desplegar):

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `RESEND_API_KEY` (obligatorio)
   - `EMAIL_FROM`
   - `CONTACT_EMAIL`

## ✅ Paso 2: Obtener Resend API Key

1. Ve a https://resend.com
2. Regístrate o inicia sesión
3. Ir a API Keys
4. Crear una nueva API key
5. Copiarla a `.env.local` y a Vercel

**IMPORTANTE**: En Resend debes verificar tu dominio para enviar emails en producción.

## ✅ Paso 3: Personalizar Contenido

### Actualizar proyectos:
Edita `data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    slug: 'tu-proyecto-1',
    title: 'Mi Proyecto',
    // ... cambiar datos
  }
]
```

### Actualizar servicios:
Edita `data/services.ts` con tus servicios reales.

### Actualizar testimonios:
Edita `data/testimonials.ts` con testimonios de clientes reales.

### Cambiar información de contacto:
- `components/ui/Footer.tsx` - Email, teléfono, redes sociales
- `app/(pages)/contacto/page.tsx` - Información de horarios

### Cambiar marca/colores:
- `components/ui/Navbar.tsx` - Logo y marca
- `tailwind.config.ts` - Colores personalizados
- `app/globals.css` - Estilos globales

## ✅ Paso 4: Agregar Imágenes (Opcional pero Recomendado)

### Para proyectos:
1. Coloca imágenes en `public/images/projects/`
2. Edita `data/projects.ts` y cambia `image: '/images/projects/...'`

### Cómo integrar:
```typescript
// En data/projects.ts
image: '/images/projects/proyecto1.jpg'
```

En los componentes, puedes usar `next/image` para optimización automática.

## ✅ Paso 5: Testing Local

1. Instala dependencias:
```bash
npm install
```

2. Inicia servidor de desarrollo:
```bash
npm run dev
```

3. Abre http://localhost:3000 y prueba:
   - Todas las páginas cargan
   - El formulario de contacto funciona
   - El sitio se ve bien en mobile

### Probar formulario de contacto:
1. Ir a /contacto
2. Llenar formulario
3. Verificar que recibes el email en tu inbox

## ✅ Paso 6: Deploy en Vercel

### Opción A: Dashboard Web (Más Fácil)

1. Ve a https://vercel.com
2. Haz click en "New Project"
3. Importa tu repositorio de GitHub
4. Selecciona `claude/personal-portfolio-website-E8y4F`
5. Configura Environment Variables:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `CONTACT_EMAIL`
6. Click en "Deploy"
7. ¡Listo! Tu sitio estará en vivo en una URL de Vercel

### Opción B: CLI

```bash
npm install -g vercel
vercel
# Sigue las instrucciones
```

## ✅ Paso 7: Conectar Dominio Personalizado

1. Compra un dominio en tu proveedor (GoDaddy, Namecheap, etc.)
2. En Vercel: Project → Settings → Domains
3. Agrega tu dominio
4. Sigue las instrucciones para configurar DNS
5. Espera 24-48 horas para propagación

**Ejemplo de registros DNS:**
- CNAME: `www` → `cname.vercel-dns.com.`
- A: `@` → `76.76.19.131`

## ✅ Paso 8: Monitorear y Mantener

### Ver emails enviados:
- Dashboard de Resend (https://resend.com/emails)

### Ver visitas del sitio:
- Vercel Analytics (Pro plan)
- Google Analytics (gratis, requiere setup)

### Hacer cambios:
1. Edita archivos localmente
2. Commit y push a `claude/personal-portfolio-website-E8y4F`
3. Vercel automáticamente redeploya

## 🚨 Troubleshooting

### "No recibo emails"
1. ¿Vercel tiene RESEND_API_KEY configurada?
2. ¿Validaste el dominio en Resend?
3. ¿El email es correcto? Revisa CONTACT_EMAIL

### "Formulario no funciona"
1. Abre DevTools → Console
2. Busca errores
3. Verifica que la API responde: curl http://localhost:3000/api/contact

### "Sitio lento"
- Optimiza imágenes con https://tinypng.com/
- Usa next/image para todas las imágenes
- Corre `npm run build` y revisa el tamaño

### "Error de deployment en Vercel"
- Lee los logs en Vercel Dashboard
- Asegúrate de que npm run build funciona localmente

## 📝 Próximos Pasos Opcionales

1. **Blog**: Agrega MDX para artículos
2. **CMS**: Integra Supabase o Sanity para contenido dinámico
3. **Analytics**: Agrega Google Analytics o Hotjar
4. **Chat**: Agrega Intercom o Drift para soporte
5. **SEO**: Agrega Schema.org markup para rich snippets
6. **A/B Testing**: Integra Vercel Edge Middleware

## 💡 Tips

- **Testing**: Abre en mobile con Chrome DevTools (F12)
- **SEO**: Usa https://pagespeed.web.dev para auditar
- **Emails**: Prueba con https://mailtrap.io antes de Resend
- **DNS**: Usa https://mxtoolbox.com para revisar configuración

## 📞 Soporte

- Documentación de Next.js: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs
- Vercel Docs: https://vercel.com/docs

---

¡Listo! Sigue estos pasos y tendrás tu sitio web profesional en vivo.
