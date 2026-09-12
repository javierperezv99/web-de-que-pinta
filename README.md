# Qué Pinta — sitio estático para GitHub Pages

Sitio web de **Qué Pinta**, negocio de diseño gráfico, sublimación e impresión. Esta versión está preparada para publicarse como sitio estático en GitHub Pages y ya no depende de los recursos privados de Lovable.

## Desarrollo local

```sh
npm install
npm run dev
```

Para probar una build de producción:

```sh
npm run build:pages
npm run preview
```

## Publicar en GitHub Pages

El workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construye el sitio automáticamente cada vez que se hace push a `main`. En GitHub, abre **Settings → Pages**, selecciona **GitHub Actions** como fuente y espera a que finalice el workflow.

La URL será:

```text
https://javierperezv99.github.io/print-and-shine-web/
```

El workflow calcula el nombre del repositorio automáticamente y configura el `base path`, por lo que las rutas y los assets funcionan dentro del subdirectorio de GitHub Pages.

## Contacto

Los botones de contacto abren WhatsApp con los números configurados en `src/routes/index.tsx`. Actualiza esos números antes de publicar si necesitas usar otros.
