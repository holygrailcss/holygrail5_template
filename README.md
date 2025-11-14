# Holy Grail 5 Template

Template moderno basado en el patrón Holy Grail Layout, con generador de CSS y sistema de componentes.

## 📁 Arquitectura del Proyecto

```
holygrail5_template/
├── assets/                 # Recursos estáticos
│   ├── fonts/             # Fuentes personalizadas
│   └── images/            # Imágenes del proyecto
├── docs/                  # Documentación completa
│   ├── ARCHITECTURE.md    # Arquitectura detallada
│   └── SUPERPROMPT.md     # Guía de maquetación
├── src/                   # ⭐ Código fuente (editable)
│   ├── index.html         # HTML fuente
│   └── js/
│       └── main.js        # JavaScript fuente
├── dist/                  # ⚠️ Build final (auto-generado)
│   ├── index.html         # HTML compilado
│   ├── css/
│   │   └── holygrail.css  # CSS generado
│   └── js/
│       └── main.js        # JS copiado
├── config.json            # Configuración del generador CSS
├── package.json           # Configuración NPM
├── .gitignore             # Archivos ignorados por Git
└── .editorconfig          # Configuración del editor
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Build del proyecto

```bash
npm run build
```

Esto genera el CSS y copia archivos a `dist/`.

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Ejecuta el build e inicia el servidor. El sitio estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Build + servidor (localhost:3000) |
| `npm run build` | Build completo (CSS + archivos) |
| `npm run watch` | Regenera CSS al guardar config.json |
| `npm run clean` | Limpia carpeta dist/ |
| `npm run tema list` | Lista temas disponibles |
| `npm run tema dutti` | Aplica tema Dutti y listo |

## ⚙️ Configuración

### config.json

Personaliza el generador de CSS editando `config.json`:

```json
{
  "prefix": "hg",
  "colors": {
    "primary": "#000000",
    "secondary": "#737373"
  },
  "spacingMap": {
    "0": "0",
    "8": "8px",
    "16": "16px",
    "24": "24px"
  }
}
```

Después de editar, regenera el CSS:

```bash
npm run generate
```

## 🎨 Clases CSS Disponibles

### Layout Holy Grail

- `.container` / `.hg-container` - Container principal
- `.header` / `.hg-header` - Header
- `.sidebar-left` / `.hg-sidebar-left` - Sidebar izquierdo
- `.sidebar-right` / `.hg-sidebar-right` - Sidebar derecho
- `.main-content` / `.hg-main` - Contenido principal
- `.footer` / `.hg-footer` - Footer

### Tipografía

- `.h2` - Título principal
- `.title-l-b`, `.title-l`, `.title-m`, `.title-s` - Títulos
- `.text-l`, `.text-m` - Textos
- `.suisse-1`, `.suisse-2`, `.suisse-body` - Fuentes secundarias

### Spacing

- `.p-{valor}`, `.m-{valor}` - Padding y margin
- `.pt-{valor}`, `.pb-{valor}`, `.pl-{valor}`, `.pr-{valor}` - Lados específicos
- `.mt-{valor}`, `.mb-{valor}`, `.ml-{valor}`, `.mr-{valor}` - Margin por lado

### Layout Helpers

- `.hg-d-flex`, `.hg-d-block`, `.hg-d-none` - Display
- `.hg-flex-row`, `.hg-flex-column` - Flex direction
- `.hg-justify-{start|center|end|between}` - Justify content
- `.hg-items-{start|center|end}` - Align items
- `.hg-gap-{valor}` - Gap

### Grid System

- `.row` - Contenedor de fila
- `.col-xs-{1-12}`, `.col-sm-{1-12}`, `.col-md-{1-12}`, `.col-lg-{1-12}` - Columnas
- `.col-xl-{1-24}` - Columnas XL (24 columnas)

### Responsive

- `.md:{clase}` - Versión desktop de cualquier clase (≥992px)

Ejemplos:
- `.md:p-24` - Padding 24px en desktop
- `.md:hg-flex-row` - Flex row en desktop
- `.md:hg-d-none` - Ocultar en desktop

## 📚 Documentación

- [SUPERPROMPT.md](docs/SUPERPROMPT.md) - Guía completa de maquetación con todas las clases disponibles
- [TEMAS.md](TEMAS.md) - Sistema de temas (Dutti, Zara, Default)

## 🏗️ Estructura HTML Básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Sitio</title>
    <link rel="stylesheet" href="css/holygrail.css">
</head>
<body>
    <div class="container">
        <header class="header p-16 md:p-24">
            <!-- Header content -->
        </header>

        <aside class="sidebar-left p-16 md:p-24">
            <!-- Sidebar izquierdo -->
        </aside>

        <main class="main-content p-16 md:p-24">
            <!-- Contenido principal -->
        </main>

        <aside class="sidebar-right p-16 md:p-24">
            <!-- Sidebar derecho -->
        </aside>

        <footer class="footer p-16 md:p-24">
            <!-- Footer -->
        </footer>
    </div>

    <script src="js/main.js"></script>
</body>
</html>
```

**Nota:** Las rutas son relativas porque el HTML se sirve desde `dist/`.

## 🎯 Características

- ✅ **Layout Holy Grail** completo y funcional
- ✅ **Diseño responsive** automático (mobile-first)
- ✅ **Sistema de Grid** de 12 y 24 columnas
- ✅ **Helpers de spacing** completos (padding/margin)
- ✅ **Helpers de layout** (flexbox, grid)
- ✅ **Clases de tipografía** responsive
- ✅ **Variables CSS** personalizables
- ✅ **Generador de CSS** desde config.json
- ✅ **Sin dependencias** en runtime
- ✅ **Código limpio** y bien organizado

## 🔧 Personalización

### Colores

Edita los colores en `config.json`:

```json
{
  "colors": {
    "primary": "#2563eb",
    "secondary": "#1e40af",
    "error": "#b40016",
    "success": "#76ae4a"
  }
}
```

Usa en HTML:

```html
<div style="background-color: var(--hg-color-primary);">
    Contenido
</div>
```

### Spacing

Define tus propios valores de spacing:

```json
{
  "spacingMap": {
    "0": "0",
    "4": "4px",
    "8": "8px",
    "16": "16px",
    "custom": "3rem"
  }
}
```

Usa como:

```html
<div class="p-custom mb-8">Contenido</div>
```

## 📦 Assets

### Fuentes

Coloca tus fuentes en `assets/fonts/` y referéncialas en `config.json`:

```json
{
  "fontFamilyMap": {
    "primary": "'MiFuente', arial, sans-serif"
  }
}
```

### Imágenes

Coloca imágenes en `assets/images/` y referencia:

```html
<img src="assets/images/logo.png" alt="Logo">
```

## 🚢 Despliegue

### Build de producción

```bash
npm run build
```

Esto generará todos los archivos optimizados en la carpeta `dist/`.

### Archivos a desplegar

Solo necesitas desplegar la carpeta `dist/`:

- `dist/index.html`
- `dist/css/`
- `dist/js/`
- `assets/` (si tienes imágenes o fuentes)

## 📄 Licencia

MIT - Siéntete libre de usar este template en tus proyectos.

## 🤝 Contribuciones

Las mejoras y sugerencias son bienvenidas.

---

**Holy Grail 5 Template** - Arquitectura moderna para webs responsive 🚀
# holygrail5_template
