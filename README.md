# HolyGrail5 Template

Template minimalista para proyectos con **HolyGrail5**.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo (build + servidor + navegador)
npm run dev

# Solo servidor
npm start
```

## 📁 Estructura

```
proyecto/
├── src/
│   ├── index.html         # HTML principal
│   ├── js/                # JavaScript
│   └── themes/            # Temas CSS personalizados
├── dist/                  # Build generado
└── config.json            # Configuración HolyGrail5
```

## 📝 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Build + servidor local (puerto 3000) + abre navegador |
| `npm run build` | Compila CSS y copia archivos a dist/ |
| `npm start` | Inicia servidor en puerto 3000 |
| `npm run clean` | Limpia carpeta dist/ |

## ⚙️ Personalización

Edita `config.json` para cambiar colores, tipografías, espaciados y más:

```json
{
  "colors": {
    "primary": "#1a1a1a",
    "secondary": "#737373"
  },
  "spacingMap": {
    "16": "16px",
    "24": "24px"
  }
}
```

Después ejecuta `npm run build` para regenerar el CSS.

## 🎨 Temas

El template incluye un tema de ejemplo (`dutti`) en `src/themes/`. 

Para crear tu propio tema, copia la carpeta y modifica los archivos CSS según tus necesidades.

## 🎯 Características

- ✅ Sistema de Grid responsive (12 y 24 columnas)
- ✅ CSS generado automáticamente desde config.json
- ✅ Variables CSS con prefijo `--hg-`
- ✅ Mobile-first (breakpoint: 992px)
- ✅ Componentes de formularios incluidos
- ✅ Sin dependencias en runtime

## 📚 Clases Disponibles

### Layout

```html
<div class="hg-d-flex hg-gap-16">
  <div class="hg-flex-column md:hg-flex-row">
    <!-- Contenido -->
  </div>
</div>
```

### Spacing (Márgenes y Padding)

```html
<div class="p-16 mb-24">
  <!-- padding: 16px, margin-bottom: 24px -->
</div>
```

### Grid System

```html
<div class="row">
  <div class="col-12 md:col-6">Columna 1</div>
  <div class="col-12 md:col-6">Columna 2</div>
</div>
```

## 🚢 Despliegue

Compila y despliega solo la carpeta `dist/`:

```bash
npm run build
# Sube la carpeta dist/ a tu hosting
```

## 📄 Licencia

MIT

---

**HolyGrail5 Template** - Simple, rápido y moderno 🚀
