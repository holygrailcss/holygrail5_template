# Arquitectura del Proyecto Holy Grail 5

## Visión General

Este proyecto implementa un sistema de diseño modular basado en el patrón Holy Grail Layout, con generación automática de CSS y una arquitectura escalable.

## Principios de Diseño

### 1. Separación de Concerns

- **Configuración** (`config.json`) - Define los tokens de diseño
- **Generación** (HolyGrail5 npm) - Genera CSS desde la configuración
- **Presentación** (`index.html`) - Estructura y contenido
- **Comportamiento** (`public/js/`) - Lógica del cliente
- **Documentación** (`docs/`) - Guías y referencias

### 2. Mobile-First

Todas las clases responsive usan el prefijo `md:` para desktop (≥992px):

```html
<div class="p-8 md:p-24">
  <!-- Padding pequeño en móvil, grande en desktop -->
</div>
```

### 3. Utility-First

Sistema de clases utilitarias para spacing, layout y tipografía:

```html
<div class="hg-d-flex hg-justify-between hg-items-center hg-gap-16">
  <!-- Flexbox con utilidades -->
</div>
```

## Estructura de Carpetas

### `/assets`

Recursos estáticos del proyecto:

```
assets/
├── fonts/      # Fuentes personalizadas (.woff, .woff2)
└── images/     # Imágenes y gráficos
```

**Propósito**: Almacenar recursos que no cambian frecuentemente.

### `/docs`

Documentación del proyecto:

```
docs/
├── ARCHITECTURE.md           # Este archivo
├── ARCHITECTURE_SUMMARY.md   # Resumen ejecutivo
├── CHANGELOG_ARCHITECTURE.md # Historial de cambios
├── CONTRIBUTING.md           # Guía de contribución
└── SUPERPROMPT.md            # Guía de maquetación completa
```

**Propósito**: Mantener la documentación organizada y separada del código.

### `/src`

**Código fuente** del proyecto:

```
src/
├── index.html    # HTML fuente
└── js/
    └── main.js   # JavaScript fuente
```

**Propósito**: Todo el código editable por desarrolladores.

**Importante**: Edita siempre en `src/`, nunca en `dist/`.

### `/dist`

**Archivos compilados** (build final):

```
dist/
├── index.html         # HTML copiado de src/
├── css/
│   └── holygrail.css  # CSS generado desde config.json
└── js/
    └── main.js        # JS copiado de src/
```

**Propósito**: Archivos listos para producción, servidos por el servidor.

**Nota**: `dist/` es generado automáticamente, no editar manualmente. Está en `.gitignore`.

## Flujo de Desarrollo

### 1. Configuración

```
config.json → HolyGrail5 Generator → dist/css/holygrail.css
```

El archivo `config.json` define todos los tokens de diseño:
- Colores
- Spacing
- Tipografía
- Grid
- Helpers

### 2. Generación

```bash
npm run generate
```

Lee `config.json` y genera `dist/css/holygrail.css` con:
- Variables CSS
- Clases de layout
- Clases de tipografía
- Helpers de spacing
- Sistema de grid
- Versiones responsive

### 3. Copia de archivos

```bash
npm run copy
```

Copia archivos de `src/` a `dist/`:
- `src/index.html` → `dist/index.html`
- `src/js/` → `dist/js/`

### 4. Build completo

```bash
npm run build
```

Ejecuta `generate` + `copy` para preparar todo para producción.

### 5. Desarrollo

```bash
npm run dev
```

Ejecuta build completo e inicia servidor local en puerto 3000 sirviendo `dist/`.

### 6. Watch Mode

```bash
npm run watch
```

Observa cambios en `config.json` y regenera CSS automáticamente.

## Sistema de Configuración

### config.json

Estructura básica:

```json
{
  "prefix": "hg",                    // Prefijo para clases CSS
  "category": "typo",                // Categoría del proyecto
  
  "colors": {                        // Paleta de colores
    "primary": "#000000",
    "secondary": "#737373"
  },
  
  "spacingMap": {                    // Valores de spacing
    "0": "0",
    "8": "8px",
    "16": "16px"
  },
  
  "breakpoints": {                   // Breakpoints responsive
    "mobile": "1px",
    "desktop": "992px"
  },
  
  "grid": {                          // Configuración del grid
    "enabled": true,
    "gutter": "8px",
    "columnsXs": 12,
    "columnsXl": 24
  },
  
  "classes": {                       // Clases de tipografía
    "h2": {
      "fontWeight": "900",
      "mobile": { "fontSize": "18px" },
      "desktop": { "fontSize": "24px" }
    }
  },
  
  "helpers": {                       // Helpers de layout
    "display": { ... },
    "flex-direction": { ... },
    "justify-content": { ... }
  }
}
```

## CSS Generado

### Estructura del CSS

```css
/* Variables CSS */
:root { ... }

/* Reset */
* { ... }

/* Layout Holy Grail */
.container { ... }
.header { ... }

/* Clases de Tipografía */
.h2 { ... }
.title-l-b { ... }

/* Helpers de Spacing */
.p-16 { ... }
.m-8 { ... }

/* Helpers de Layout */
.hg-d-flex { ... }
.hg-justify-center { ... }

/* Sistema de Grid */
.row { ... }
.col-xs-12 { ... }

/* Versiones Responsive */
@media (min-width: 992px) {
  .md:p-24 { ... }
}

/* Mobile */
@media (max-width: 768px) {
  .container { ... }
}
```

## Sistema de Grid

### 12 Columnas (xs, sm, md, lg)

```html
<div class="row">
  <div class="col-xs-12 col-md-6 col-lg-4">
    <!-- 100% móvil, 50% tablet, 33% desktop -->
  </div>
</div>
```

### 24 Columnas (xl)

```html
<div class="row">
  <div class="col-xs-12 col-xl-8">
    <!-- 100% móvil, 33% en XL -->
  </div>
</div>
```

## JavaScript

### main.js

Funcionalidad básica incluida:

```javascript
// Toggle menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});
```

**Propósito**: Interactividad mínima necesaria para el template.

## Escalabilidad

### Añadir Nuevos Colores

1. Edita `config.json`:
```json
{
  "colors": {
    "brand": "#ff6600"
  }
}
```

2. Regenera CSS:
```bash
npm run generate
```

3. Usa en HTML:
```html
<div style="background-color: var(--hg-color-brand);">
```

### Añadir Nuevos Spacing

1. Edita `config.json`:
```json
{
  "spacingMap": {
    "48": "48px"
  }
}
```

2. Regenera y usa:
```html
<div class="p-48 m-48">
```

### Añadir Componentes

Crea nuevos archivos HTML y reutiliza las clases:

```html
<!-- components/card.html -->
<div class="p-16" style="background-color: var(--hg-color-white);">
  <h3 class="title-l-b mb-8">Card</h3>
  <p class="text-m">Contenido</p>
</div>
```

## Mejores Prácticas

### 1. No Modificar Archivos en dist/

❌ **Mal:**
```
Editar cualquier archivo en dist/ directamente
```

✅ **Bien:**
```
1. Editar archivos en src/ o config.json
2. Ejecutar npm run build
3. Los cambios se reflejan en dist/
```

### 2. Usar Variables CSS

❌ **Mal:**
```html
<div style="background-color: #000000;">
```

✅ **Bien:**
```html
<div style="background-color: var(--hg-color-primary);">
```

### 3. Mobile-First

❌ **Mal:**
```html
<div class="p-24 md:p-8">
  <!-- Grande en móvil, pequeño en desktop -->
</div>
```

✅ **Bien:**
```html
<div class="p-8 md:p-24">
  <!-- Pequeño en móvil, grande en desktop -->
</div>
```

### 4. Separación de Concerns

❌ **Mal:**
```html
<div style="padding: 16px; margin: 8px; display: flex;">
```

✅ **Bien:**
```html
<div class="p-16 m-8 hg-d-flex">
```

## Mantenimiento

### Actualizar HolyGrail5

```bash
npm update holygrail5
npm run generate
```

### Limpiar CSS Generado

```bash
npm run clean
npm run generate
```

### Verificar Estructura

```bash
tree -I 'node_modules|.git|dist'
```

**Nota**: Excluimos `dist` porque es generado.

## Integración CI/CD

### Build Automático

```yaml
# .github/workflows/build.yml
steps:
  - run: npm install
  - run: npm run build
  - run: # Deploy public/ y index.html
```

### Pre-commit Hook

```bash
# .git/hooks/pre-commit
#!/bin/sh
npm run generate
git add public/css/holygrail.css
```

## Troubleshooting

### CSS no se actualiza

1. Limpia y regenera:
```bash
npm run clean
npm run generate
```

2. Verifica que `config.json` es válido JSON

3. Verifica la ruta en HTML:
```html
<link rel="stylesheet" href="public/css/holygrail.css">
```

### Clases no funcionan

1. Verifica que la clase existe en `config.json`
2. Regenera el CSS
3. Verifica el prefijo correcto (`hg-` por defecto)

### Servidor no inicia

1. Verifica que el puerto 3000 está libre
2. Reinstala dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Última actualización**: 2024
**Versión**: 1.0.0

