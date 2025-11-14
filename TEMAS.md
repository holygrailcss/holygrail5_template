# 🎨 Sistema de Temas CSS - Holy Grail 5

## Descripción

Los temas son **sistemas de componentes CSS** que complementan las utilidades base de HolyGrail5. Incluyen componentes UI estilizados como botones, inputs, formularios, checkboxes, etc.

Los temas **usan las variables CSS generadas por HolyGrail5**, por lo que son totalmente personalizables desde `config.json`.

## 🚀 Uso Rápido

### 1. Listar temas disponibles
```bash
npm run tema list
# O simplemente
npm run tema
```

### 2. Copiar un tema a tu proyecto
```bash
npm run tema dutti
```

El tema se copiará a `dist/css/themes/dutti/`

### 3. Incluir el tema en tu HTML
```html
<!-- CSS base de HolyGrail5 (utilidades) -->
<link rel="stylesheet" href="css/holygrail.css">

<!-- CSS del tema (componentes) -->
<link rel="stylesheet" href="css/themes/dutti/theme.css">
```

### 4. Usar los componentes
```html
<button class="btn btn-primary">Enviar</button>
<input type="text" class="input" placeholder="Tu nombre">
```

## 📋 Workflow Completo

```bash
# 1. Clonar el tema a tu proyecto
npm run tema dutti
# ✅ Tema 'dutti' clonado a src/themes/dutti/

# 2. Hacer build (copia todo a dist/)
npm run build
# El tema estará en dist/css/themes/dutti/

# 3. Ver la demo
open dist/css/themes/dutti/demo.html

# 4. Añadir el CSS del tema a tu HTML
# <link rel="stylesheet" href="css/themes/dutti/theme.css">
```

**💡 Ventaja**: El tema se clona a `src/themes/`, así puedes editarlo y versionarlo en Git.

## 🎨 Temas Disponibles

### 🔹 Dutti Theme
Sistema de componentes UI inspirado en Massimo Dutti

**Componentes incluidos:**
- **Botones**: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`, `.btn-feel`
- **Inputs**: `.input` (text, email, password, number, tel, url, search)
- **Selects**: `.select`
- **Textareas**: `.textarea`
- **Checkboxes**: `.checkbox`
- **Radios**: `.radio`
- **Switches**: `.switch`
- **Labels**: `.label`, `.label-required`
- **Form Groups**: `.form-group`, `.form-row`
- **Estados**: `.input-error`, `.input-success`, `.input-warning`, `disabled`

**Características:**
- Usa variables CSS de HolyGrail5
- Totalmente personalizable desde `config.json`
- Componentes responsive
- Accesible (ARIA, focus states, etc.)
- Border-radius: 0 (estilo minimalista)

**Documentación completa**: `dist/css/themes/dutti/README.md` (10KB de documentación)

## 💡 Ejemplos de Uso

### Botones
```html
<button class="btn btn-primary btn-md">Enviar</button>
<button class="btn btn-outline btn-lg">Cancelar</button>
<button class="btn btn-ghost btn-sm">Detalles</button>
```

### Formularios
```html
<div class="form-group">
  <label class="label label-required" for="email">Email</label>
  <input type="email" id="email" class="input" placeholder="tu@email.com">
  <span class="helper-text">Este campo es obligatorio</span>
</div>

<div class="form-group">
  <label class="checkbox">
    <input type="checkbox">
    <span class="checkbox-indicator"></span>
    <span class="checkbox-label">Acepto los términos</span>
  </label>
</div>
```

### Combinando Utilidades + Componentes
```html
<!-- Flex layout de HolyGrail5 + Botones del tema -->
<div class="hg-d-flex hg-gap-8 hg-justify-end">
  <button class="btn btn-outline">Cancelar</button>
  <button class="btn btn-primary">Guardar</button>
</div>
```

## 🎨 Personalización

Los temas usan las variables CSS de HolyGrail5. Para personalizar colores, fuentes, etc:

### 1. Edita `config.json` en la raíz del proyecto
```json
{
  "colors": {
    "primary": "#1a1a1a",
    "error": "#c41e3a",
    "success": "#7c9473",
    "feel": "#d4af37"
  },
  "fontFamilyMap": {
    "primary": "Georgia, 'Times New Roman', serif"
  }
}
```

### 2. Regenera el CSS base
```bash
npm run build
```

Los cambios se reflejarán automáticamente en todos los componentes del tema porque usan las variables CSS de HolyGrail5.

## 📁 Estructura

```
src/
  themes/                  # ⭐ Temas clonados (editables, modulares)
    dutti/
      theme.css            # CSS principal (importa todos los módulos)
      _variables.css       # Variables del tema
      _buttons.css         # Estilos de botones
      _inputs.css          # Estilos de inputs
      _checkboxes.css      # Estilos de checkboxes
      _radios.css          # Estilos de radios
      _switches.css        # Estilos de switches
      _labels.css          # Estilos de labels
      _forms.css           # Form groups y helper text
      demo.html            # Demo interactiva
      README.md            # Documentación completa (10KB)

dist/                      # ⚠️ Generado por build (no editar)
  css/
    holygrail.css          # CSS base (utilidades + variables CSS)
    themes/                # Temas unificados (optimizados)
      dutti/
        theme.css          # ✨ CSS UNIFICADO (todos los módulos en 1 archivo)
        demo.html          # Demo interactiva
        README.md          # Documentación
```

**💡 Notas importantes**:
- **Edita** los temas en `src/themes/` (archivos modulares)
- Al hacer **build**, los temas se unifican en un solo `theme.css` en `dist/`
- Los archivos `_*.css` no se copian a `dist/`, solo el `theme.css` unificado
- Esto optimiza la carga (1 archivo en vez de 8) y elimina los `@import`

## 📦 Variables CSS Disponibles

El tema Dutti usa estas variables de HolyGrail5:

### Colores
```css
--hg-color-primary
--hg-color-white
--hg-color-dark-grey
--hg-color-middle-grey
--hg-color-light-grey
--hg-color-error
--hg-color-success
--hg-color-warning
--hg-color-feel
--hg-color-feel-dark
```

### Espaciados
```css
--hg-spacing-4
--hg-spacing-8
--hg-spacing-12
--hg-spacing-16
--hg-spacing-24
--hg-spacing-32
```

### Tipografía
```css
--hg-typo-font-family-primary
--hg-typo-font-size-12
--hg-typo-font-size-13
--hg-typo-font-size-14
--hg-typo-font-weight-400
--hg-typo-font-weight-700
--hg-typo-line-height-1-5
```

## ⚡ Optimización Automática

Cuando haces `npm run build`, el sistema:

1. **Copia** `src/themes/` → `dist/css/themes/`
2. **Unifica** todos los módulos CSS en un solo archivo `theme.css`
3. **Elimina** los archivos modulares (`_*.css`) de `dist/`
4. **Resultado**: Solo 1 archivo CSS optimizado en `dist/css/themes/dutti/theme.css`

### Ventajas

- ✅ **Desarrollo modular**: Edita archivos pequeños en `src/themes/`
- ✅ **Producción optimizada**: 1 solo archivo en `dist/` (sin `@import`)
- ✅ **Carga más rápida**: Menos peticiones HTTP
- ✅ **CSS unificado**: ~14KB, 629 líneas, todo en un archivo

## 🔄 Workflow de Desarrollo

```bash
# 1. Clonar tema al proyecto
npm run tema dutti

# 2. Hacer build inicial
npm run build

# 3. Iniciar servidor
npm run start
# Abre: http://localhost:3000

# 4. Abrir demo del tema
open http://localhost:3000/css/themes/dutti/demo.html

# 5. Editar el tema en src/themes/dutti/
# Por ejemplo, cambiar colores en _variables.css

# 6. Hacer build de nuevo para ver cambios
npm run build

# 7. Recargar navegador para ver los cambios
```

### Workflow con Watch Mode

```bash
# Terminal 1: Watch mode para config.json
npm run watch

# Terminal 2: Servidor
npm run start

# Editar config.json → CSS se regenera automáticamente
# Editar src/themes/dutti/ → hacer 'npm run build' manualmente
```

## 📱 Responsive

Todos los componentes son responsive. Puedes combinarlos con las clases responsive de HolyGrail5:

```html
<div class="hg-d-flex hg-flex-column md:hg-flex-row hg-gap-16">
  <input type="text" class="input">
  <button class="btn btn-primary">Enviar</button>
</div>
```

## ♿ Accesibilidad

- Todos los inputs tienen labels asociados con `for`
- Estados de focus visibles
- Componentes disabled con cursor correcto
- Indicadores visuales claros en checkboxes/radios
- Soporte para lectores de pantalla

## 🚀 Demo Interactiva

Cada tema incluye una demo HTML con todos los componentes:

```bash
# Copiar tema
npm run tema dutti

# Abrir demo en navegador
open dist/css/themes/dutti/demo.html

# O con servidor
npm run start
# Luego: http://localhost:3000/css/themes/dutti/demo.html
```

## ✏️ Editar un Tema Clonado

Una vez clonado el tema a `src/themes/`, puedes editarlo:

### 1. Editar colores del tema

Abre `src/themes/dutti/_variables.css` y modifica:

```css
:root {
  /* Cambia el color del botón primario */
  --btn-primary-bg: var(--hg-color-primary);  /* ← usa variable de HolyGrail5 */
  --btn-primary-bg: #ff0000;  /* ← o usa un color fijo */
  
  /* Cambia el borde de los inputs */
  --input-border: #cccccc;
}
```

### 2. Añadir nuevos estilos

Puedes crear nuevos archivos CSS en `src/themes/dutti/`:

```bash
# Crear un nuevo módulo
touch src/themes/dutti/_cards.css
```

Y añadirlo a `theme.css`:

```css
@import url('_variables.css');
@import url('_buttons.css');
@import url('_cards.css');  /* ← nuevo módulo */
```

### 3. Regenerar el build

```bash
npm run build
```

Los cambios se copiarán y **unificarán automáticamente** en `dist/css/themes/dutti/theme.css`.

**💡 Tip**: Puedes editar cualquier archivo en `src/themes/dutti/` y hacer build. El sistema unifica todo automáticamente.

## 🤝 Crear tu Propio Tema

### Opción 1: Clonar y modificar un tema existente

```bash
# 1. Clonar tema base
npm run tema dutti

# 2. Renombrar carpeta
mv src/themes/dutti src/themes/mi-marca

# 3. Editar src/themes/mi-marca/_variables.css
# y otros archivos según necesites

# 4. Build
npm run build

# 5. Usar en HTML
# <link rel="stylesheet" href="css/themes/mi-marca/theme.css">
```

### Opción 2: Crear desde cero

```bash
# 1. Crear estructura
mkdir -p src/themes/mi-tema

# 2. Crear archivos CSS
touch src/themes/mi-tema/_variables.css
touch src/themes/mi-tema/_buttons.css
touch src/themes/mi-tema/theme.css

# 3. En theme.css
# @import url('_variables.css');
# @import url('_buttons.css');

# 4. Build
npm run build
```

⚠️ **Nota**: Los temas en `src/themes/` se versionan con Git, así que no se perderán.

## 🛠️ Troubleshooting

### Tema no se ve
```bash
# Verificar que se copió
ls -la dist/css/themes/dutti/

# Verificar que está en el HTML
cat src/index.html | grep theme
```

### Colores no cambian
```bash
# Regenerar CSS base con las nuevas variables
npm run clean && npm run build

# Recargar página (Cmd+Shift+R para forzar recarga)
```

### Ver todas las variables disponibles
```bash
# Ver variables CSS generadas por HolyGrail5
cat dist/css/holygrail.css | grep ":root" -A 100
```

## 🔍 Diferencia: Temas vs Config.json

| Aspecto | `config.json` | Temas CSS |
|---------|---------------|-----------|
| **Qué es** | Configuración de utilidades y variables | Componentes UI estilizados |
| **Genera** | `.hg-*` utilidades (flex, colors, spacing) | `.btn`, `.input`, `.checkbox` etc. |
| **Ubicación** | Raíz del proyecto | `dist/css/themes/` |
| **Personalización** | Editas `config.json` → `npm run build` | Usa variables de `config.json` automáticamente |
| **Ejemplo** | `hg-d-flex`, `hg-bg-primary` | `btn-primary`, `input-error` |

**Resumen**: `config.json` genera las **utilidades base y variables CSS**. Los temas **usan esas variables** para estilizar componentes.

## 📚 Recursos

- **Documentación del tema Dutti**: `dist/css/themes/dutti/README.md`
- **Demo interactiva**: `dist/css/themes/dutti/demo.html`
- **Arquitectura del proyecto**: `docs/ARCHITECTURE.md`
- **Variables CSS disponibles**: Inspecciona `dist/css/holygrail.css`

---

**Sistema de Temas Holy Grail 5** - Componentes UI personalizables con variables CSS 🎨✨
