# Plan: Página web para Qué Pinta — Diseños e Impresiones

## Resumen

Crear un sitio web informativo y visual para un negocio de sublimación y diseño gráfico, con énfasis en mostrar servicios, productos, portafolio y canales de contacto. El sitio usará el logo ya subido como identidad principal.

## Estado actual del proyecto

El proyecto es una plantilla limpia de TanStack Start v1 con Tailwind CSS v4. La página de inicio es un placeholder que debe reemplazarse por el sitio completo.

## Páginas y secciones

1. **Inicio / Hero**
  - Nombre del negocio, eslogan y llamado a la acción (WhatsApp).
  - Logo principal como imagen central.
2. **Servicios**
  - Tarjetas con servicios de sublimación y diseño (tazas, pullovers,, souvenirs, diseño gráfico, tarjetas de presentación etc.).
3. **Productos**
  - Listado de productos disponibles con descripción y precio aproximado.
  - Botón de "Pedir por WhatsApp" en cada producto.
4. **Galería / Portafolio**
  - Cuadrícula de imágenes de trabajos anteriores.
  - Placeholders iniciales que el usuario podrá reemplazar por fotos reales.
5. **Sobre nosotros**
  - Breve historia del negocio, valores y diferenciadores.
6. **Contacto**
  - Teléfonos (+5354383056 y +5352922118), botones directos a WhatsApp.
  - Formulario simple de consulta (nombre, mensaje).
  - Ubicación aproximada si el usuario la proporciona.

## Dirección de diseño

- **Paleta:** Inspirada en el logo: manchas de acuarela en rosa, naranja, amarillo, turquesa y morado, con texto en azul oscuro. Fondo claro para legibilidad.
- **Estilo:** Alegre, creativo, artesanal y profesional. Formas redondeadas, sombras suaves y toques de color vivos que evocan impresión y diseño.
- **Tipografía:** Fuente sans-serif moderna y legible; títulos con peso destacado.
- **Logo:** Usar el logo subido en el hero, navbar y favicon.

## Enfoque técnico

- **Framework:** TanStack Start v1 con React 19 y Vite 7.
- **Estilos:** Tailwind CSS v4 con tokens semánticos en `src/styles.css`.
- **Rutas:** Página única con secciones ancladas (Home, Servicios, Productos, Galería, Contacto) en `src/routes/index.tsx`.
- **Componentes:** Tarjetas de servicio/producto, galería, botones de WhatsApp, formulario de contacto.
- **Assets:** Logo subido se convertirá en asset de Lovable y se usará en el sitio; favicon derivado del logo.
- **Responsive:** Diseño optimizado para móvil y escritorio.

## Contenido y assets necesarios

- Logo ya proporcionado (se usará directamente).
- Fotos reales de productos impresos para la galería. Se usarán imágenes generadas como placeholders hasta que el usuario las reemplace.
- Textos descriptivos de servicios y productos (se propondrán textos iniciales en español).

## Integraciones

- **WhatsApp:** Botones y enlaces directos a `https://wa.me/5354383056` y `https://wa.me/5352922118`.
- **Formulario de contacto:** Se enviará por correo o se mostrará como consulta pendiente; se definirá si se conecta servicio de email más adelante.

## SEO y metadatos

- Título: "Qué Pinta — Diseños e Impresiones en Sublimación".
- Descripción optimizada para búsqueda local de productos personalizados.
- Meta tags Open Graph y Twitter en `src/routes/index.tsx`.
- Favicon personalizado derivado del logo.

## Entregables

- Sitio funcional en la URL de preview.
- Código organizado en componentes reutilizables.
- Instrucciones breves para que el usuario reemplace las imágenes de la galería y actualice precios.