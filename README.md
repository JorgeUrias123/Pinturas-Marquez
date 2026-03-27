# Pinturas Márquez – Landing Page Angular 17

## Estructura de archivos generados

```
src/
├── index.html
├── main.ts
├── styles.scss                          ← Variables globales + utilidades
├── assets/
│   └── images/                          ← Todas las fotos de pintura
│       ├── all_colors.jpeg
│       ├── azul-cielo.jpeg
│       ├── beige.jpeg
│       ├── blanco.jpeg                  ← Reemplazar con foto real de blanco
│       ├── blanco-ostion.jpeg
│       ├── capucchino.jpeg
│       ├── crema.jpeg                   ← Reemplazar con foto real de crema
│       ├── gris.jpeg
│       ├── marca-pintura.jpeg
│       ├── rosa-dulce.jpeg
│       └── verde-pistache.jpeg
└── app/
    ├── app.component.ts
    ├── app.config.ts
    └── components/
        ├── navbar/       (navbar.component.ts/.html/.scss)
        ├── hero/         (hero.component.ts/.html/.scss)
        ├── productos/    (productos.component.ts/.html/.scss)
        ├── colores/      (colores.component.ts/.html/.scss)
        ├── confianza/    (confianza.component.ts/.html/.scss)
        ├── contacto/     (contacto.component.ts/.html/.scss)
        └── footer/       (footer.component.ts)
```

## Pasos para integrar en tu proyecto

1. **Copia la carpeta `src/`** completa dentro de tu proyecto `pinturas-marquez/`
   (reemplaza los archivos que ya existen: `index.html`, `main.ts`, `styles.scss`)

2. **Copia las imágenes** a `src/assets/images/`

3. **Verifica `angular.json`** — asegúrate de que los assets estén configurados:
   ```json
   "assets": [
     "src/favicon.ico",
     "src/assets"
   ],
   "styles": [
     "src/styles.scss"
   ]
   ```

4. **Instala dependencias** (si no lo has hecho):
   ```bash
   npm install
   ```

5. **Levanta el servidor de desarrollo:**
   ```bash
   ng serve
   ```
   Abre: http://localhost:4200

## Imágenes pendientes

Reemplaza estos dos archivos cuando tengas las fotos reales:
- `src/assets/images/blanco.jpeg`   → foto de la cubeta de pintura blanca
- `src/assets/images/crema.jpeg`    → foto de la cubeta de pintura crema

## Personalización rápida

- **Colores de la marca** → `src/styles.scss` (variables CSS en `:root`)
- **Precios** → `src/app/components/productos/productos.component.ts`
- **Teléfonos** → `src/app/components/contacto/contacto.component.ts`
- **Textos de colores** → `src/app/components/colores/colores.component.ts`