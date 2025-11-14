# Holy Grail 5 Template

Template moderno con sistema de componentes CSS y generador automático.

## 🚀 Inicio Rápido

```bash
# Instalar
npm install

# Desarrollo (abre navegador automáticamente)
npm run dev

# Solo servidor
npm run start
```

## 📁 Estructura

```
proyecto/
├── src/                    # 📝 Código fuente (editable)
│   ├── index.html         # HTML principal
│   ├── js/                # JavaScript
│   └── themes/            # Temas CSS (opcional)
├── dist/                   # 📦 Build final (auto-generado)
├── config.json            # ⚙️ Configuración CSS
└── scripts/               # 🔧 Scripts de build
```

## 📝 Comandos

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Build + servidor + abre navegador 🌐 |
| `npm run build` | Compilar proyecto |
| `npm run start` | Servidor (puerto 3000) |
| `npm run watch` | Auto-regenerar CSS |
| `npm run clean` | Limpiar dist/ |
| `npm run tema <nombre>` | Clonar tema CSS |

## 🎨 Sistema de Temas

### Usar un tema

```bash
# 1. Clonar tema
npm run tema dutti

# 2. Compilar
npm run build

# 3. Incluir en HTML
<link rel="stylesheet" href="css/themes/dutti/theme.css">
```

### Ver temas disponibles

```bash
npm run tema
```

## ⚙️ Personalización

### Editar colores y estilos

Modifica `config.json`:

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

Luego ejecuta:

```bash
npm run build
```

## 🎯 Características

- ✅ Layout Holy Grail responsive
- ✅ Sistema de Grid 12 y 24 columnas
- ✅ CSS generado automáticamente
- ✅ Temas CSS con componentes (botones, forms, etc.)
- ✅ Mobile-first con breakpoint en 992px
- ✅ Sin dependencias en runtime

## 🔧 Clases Útiles

### Layout

```html
<div class="hg-d-flex hg-gap-16">
  <div class="hg-flex-column md:hg-flex-row">
    <!-- Contenido -->
  </div>
</div>
```

### Spacing

```html
<div class="p-16 mb-24">
  <!-- padding: 16px, margin-bottom: 24px -->
</div>
```

### Responsive

```html
<div class="hg-d-none md:hg-d-block">
  <!-- Oculto en móvil, visible en desktop -->
</div>
```

## 📦 Componentes del Tema Dutti

### Formularios

```html
<div class="form-group">
  <label class="label label-required">Email</label>
  <input type="email" class="input" placeholder="tu@email.com">
  <span class="helper-text">Campo obligatorio</span>
</div>
```

### Botones

```html
<button class="btn btn-primary btn-md">Guardar</button>
<button class="btn btn-outline btn-md">Cancelar</button>
```

### Checkboxes

```html
<label class="checkbox">
  <input type="checkbox">
  <span class="checkbox-indicator"></span>
  <span class="checkbox-label">Acepto términos</span>
</label>
```

## 📚 Documentación Completa

- [TEMAS.md](TEMAS.md) - Guía de temas CSS
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Arquitectura detallada
- [docs/SUPERPROMPT.md](docs/SUPERPROMPT.md) - Todas las clases disponibles

## 🚢 Despliegue

Despliega solo la carpeta `dist/`:

```bash
npm run build
# Subir carpeta dist/ a tu servidor
```

## 📄 Licencia

MIT

---

**Holy Grail 5 Template** - Simple, rápido y moderno 🚀
