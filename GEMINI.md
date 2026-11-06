# Antigravity Agent Contract: Mandatory Bilingual Parity (Español ⇄ English)

## Contrato de Paridad Bilingüe Obligatoria (Regla Estricta)

A partir de este momento y de forma permanente en este proyecto:
**TODO lo que se haga, agregue, modifique, elimine o actualice en español, DEBE hacerse y sincronizarse obligatoriamente en inglés.**

### 1. Sincronización Inmediata en Tiempo Real
- Cada vez que se cree o modifique una sección, servicio, caso de éxito, cliente, badge, titular, métrica, proyecto o artículo de blog en español (ej. `pages/index.vue`, `components/ClientsSection.vue`, `components/PortfolioSection.vue`, `components/HeroSectionComponent.vue`, `pages/proyectos/`, `pages/servicios/`, `pages/blog/`):
  - **SE DEBE IMPLEMENTAR EL EQUIVALENTE EXACTO EN INGLÉS** en `pages/en/index.vue`, rutas `/en`, componentes correspondientes y metadatos.
  - Ningún cambio puede considerarse terminado hasta que exista y funcione en ambos idiomas.

### 2. Estándar de Lenguaje y Tono
- **Español**: 100% profesional, persuasivo, técnico y enfocado en conversión para empresas de Colombia y LATAM.
- **Inglés**: Inglés nativo corporativo / Silicon Valley (Nearshore Software Engineering) adaptado a directores de tecnología (CTOs), founders de startups y empresas de Estados Unidos. Prohibidas las traducciones literales o robóticas.

### 3. Paridad de Navegación, Header y Footer
- Cada opción añadida al menú en español (`spanishOptions` en `components/layout/HeaderNavbar.vue`) debe tener su contraparte en inglés (`englishOptions`).
- Los botones de llamado a la acción (CTAs) deben apuntar a las secciones correspondientes en ambas versiones.

### 4. SEO, Sitemaps y Metadatos
- Cada nueva ruta o actualización debe registrarse en `nuxt.config.ts` (`nitro.prerender.routes`), `public/sitemap.xml` (tanto en español como en inglés), y mantener etiquetas `hreflang` cruzadas.

### 5. Verificación de Compilación
- En cada cambio, se debe ejecutar `npm run build` para comprobar que tanto `/` como `/en` y sus subrutas compilen con 0 errores antes de hacer commit y push.
