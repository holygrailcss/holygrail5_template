# Sistema de Theming Dutti

Sistema de componentes UI basado en las variables CSS de **HolyGrail5**. Todos los componentes utilizan las variables CSS generadas por HolyGrail5, lo que permite una personalización completa y consistente desde el archivo `config.json`.

## ⚙️ Configuración

**⚠️ IMPORTANTE**: Todas las variables del tema están definidas en:

```
📁 config.json > themeVariables
```

Este es el lugar central para personalizar colores, espaciados, tipografía y comportamiento de todos los componentes del tema Dutti.

## 📦 Instalación

1. Incluye el CSS de HolyGrail5:
```html
<link rel="stylesheet" href="dist/output.css">
```

2. Incluye el CSS del tema Dutti:
```html
<link rel="stylesheet" href="themes/dutti/theme.css">
```

**Nota**: El archivo `theme.css` importa automáticamente todos los módulos. Si solo necesitas ciertos componentes, puedes importar los archivos individuales:

```html
<!-- Solo variables y botones -->
<link rel="stylesheet" href="themes/dutti/_variables.css">
<link rel="stylesheet" href="themes/dutti/_buttons.css">
```

## 📁 Estructura de Archivos

El sistema está dividido en módulos para facilitar el mantenimiento:

- **`theme.css`** - Archivo principal que importa todos los módulos
- **`_variables.css`** - Variables del tema (colores, espaciados, tipografía)
- **`_buttons.css`** - Estilos de botones
- **`_inputs.css`** - Estilos de inputs, selects y textareas
- **`_labels.css`** - Estilos de labels
- **`_checkboxes.css`** - Estilos de checkboxes
- **`_radios.css`** - Estilos de radios
- **`_switches.css`** - Estilos de switches/toggles
- **`_forms.css`** - Form groups, form rows y helper text

## 🎨 Componentes Disponibles

### Botones

#### Variantes (tipos)

- **Primary** (sólido principal): `.btn .btn-primary`
- **Secondary** (outline): `.btn .btn-secondary`
- **Tertiary** (solo texto): `.btn .btn-tertiary`
- **Link** (link con subrayado): `.btn .btn-link`
- **Sociales**: `.btn-google`, `.btn-facebook`, `.btn-apple`, `.btn-naver`, `.btn-wechat`

#### Tamaños (con doble guion `--`)

- **Mini**: `.btn--mini`
- **Normal**: (sin clase de tamaño)
- **Extra Large**: `.btn--xlarge`
- **Mini Rounded**: `.btn--mini-rd`

#### Utilidades

- **Ancho completo**: `.btn--full`
- **Disabled**: `disabled` o `[disabled]`

#### Ejemplo

```html
<button class="btn btn-primary">Confirmar</button>
<button class="btn btn-secondary">Cancelar</button>
<button class="btn btn-tertiary">Omitir</button>
<button class="btn btn-link">Ver más</button>

<!-- Tamaños -->
<button class="btn btn-primary btn--mini">Mini</button>
<button class="btn btn-primary btn--xlarge">Extra Large</button>
<button class="btn btn-primary btn--full">Ancho Completo</button>

<!-- Sociales -->
<button class="btn btn-google">Continuar con Google</button>

<!-- Disabled -->
<button class="btn btn-primary" disabled>Deshabilitado</button>
```

**📖 Ver [BUTTONS.md](../../../BUTTONS.md) para documentación completa de botones**

### Inputs

#### Tipos básicos

Todos los tipos de input HTML5 están soportados: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, etc.

```html
<label class="label" for="nombre">Nombre</label>
<input type="text" id="nombre" class="input" placeholder="Tu nombre">
```

#### Estados

- **Error**: `.input-error`
- **Success**: `.input-success`
- **Warning**: `.input-warning`
- **Disabled**: `disabled`

```html
<input type="text" class="input input-error" value="Valor inválido">
<span class="helper-text helper-text-error">Este campo tiene un error</span>
```

### Selects

```html
<label class="label" for="pais">País</label>
<select id="pais" class="select">
  <option value="">Selecciona un país</option>
  <option value="es">España</option>
  <option value="fr">Francia</option>
</select>
```

#### Estados

- **Error**: `.select-error`
- **Success**: `.select-success`
- **Warning**: `.select-warning`
- **Disabled**: `disabled`

### Textareas

```html
<label class="label" for="mensaje">Mensaje</label>
<textarea id="mensaje" class="textarea" placeholder="Escribe tu mensaje..."></textarea>
```

#### Estados

- **Error**: `.textarea-error`
- **Success**: `.textarea-success`
- **Warning**: `.textarea-warning`
- **Disabled**: `disabled`

### Checkboxes

```html
<label class="checkbox">
  <input type="checkbox">
  <span class="checkbox-indicator"></span>
  <span class="checkbox-label">Acepto los términos</span>
</label>
```

**Nota**: La estructura HTML es importante. El input debe ir antes del indicador.

### Radios

```html
<label class="radio">
  <input type="radio" name="opcion" value="1">
  <span class="radio-indicator"></span>
  <span class="radio-label">Opción 1</span>
</label>

<label class="radio">
  <input type="radio" name="opcion" value="2">
  <span class="radio-indicator"></span>
  <span class="radio-label">Opción 2</span>
</label>
```

**Nota**: Todos los radios del mismo grupo deben compartir el mismo `name`.

### Switches / Toggles

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch-indicator"></span>
  <span class="switch-label">Activar notificaciones</span>
</label>
```

### Labels

#### Label básico

```html
<label class="label" for="campo">Nombre del campo</label>
<input type="text" id="campo" class="input">
```

#### Label con asterisco (requerido)

```html
<label class="label label-required" for="email">Email</label>
<input type="email" id="email" class="input">
```

#### Label inline

```html
<label class="label label-inline">
  <input type="checkbox">
  <span>Checkbox inline</span>
</label>
```

### Form Groups

Agrupa labels, inputs y mensajes de ayuda:

```html
<div class="form-group">
  <label class="label label-required" for="nombre">Nombre</label>
  <input type="text" id="nombre" class="input" placeholder="Tu nombre">
  <span class="helper-text">Este campo es obligatorio</span>
</div>
```

### Form Row

Coloca varios campos en la misma fila:

```html
<div class="form-row">
  <div class="form-group">
    <label class="label" for="nombre">Nombre</label>
    <input type="text" id="nombre" class="input">
  </div>
  <div class="form-group">
    <label class="label" for="apellidos">Apellidos</label>
    <input type="text" id="apellidos" class="input">
  </div>
</div>
```

### Helper Text / Mensajes

Mensajes de ayuda, error, éxito o advertencia:

```html
<span class="helper-text">Mensaje de ayuda normal</span>
<span class="helper-text helper-text-error">Mensaje de error</span>
<span class="helper-text helper-text-success">Mensaje de éxito</span>
<span class="helper-text helper-text-warning">Mensaje de advertencia</span>
```

## 🎨 Personalización

**⚠️ IMPORTANTE**: Todas las variables del tema Dutti están centralizadas en `config.json > themeVariables`.

### Estructura de variables en config.json

```json
{
  "themeVariables": {
    "buttons": {
      "primary": { "bg": "...", "color": "...", "hoverBg": "..." },
      "secondary": { "bg": "...", "color": "...", "hoverBg": "..." },
      "outline": { "border": "...", "color": "...", "hoverBg": "..." },
      "padding": { "sm": {}, "md": {}, "lg": {} }
    },
    "forms": {
      "input": { "border": "...", "borderFocus": "...", "bg": "..." },
      "label": { "color": "...", "required": "..." },
      "checkbox": { "bg": "...", "border": "...", "checkedBg": "..." },
      "radio": { "bg": "...", "border": "...", "checkedBg": "..." },
      "switch": { "bg": "...", "activeBg": "...", "thumb": "..." }
    },
    "typography": {
      "fontFamily": "...",
      "fontSize": { "base": "...", "sm": "...", "lg": "..." },
      "fontWeight": { "normal": "...", "bold": "..." }
    },
    "borders": { "radius": "...", "width": "...", "style": "..." },
    "transitions": { "default": "..." }
  }
}
```

### Personalizar el tema

**1. Edita `config.json`:**

```json
{
  "colors": {
    "primary": "#000000",
    "error": "#b40016",
    "success": "#76ae4a",
    "warning": "#ffc700"
  },
  "themeVariables": {
    "buttons": {
      "primary": {
        "bg": "var(--hg-color-primary)",
        "color": "var(--hg-color-white)",
        "hoverBg": "var(--hg-color-dark-grey)"
      }
    }
  }
}
```

**2. Regenera el CSS:**

```bash
npm run build
```

Los cambios se reflejarán automáticamente en todos los componentes del tema Dutti.

### Variables CSS generadas

El archivo `_variables.css` declara variables CSS que referencian las definiciones de `config.json`:

- **Botones**: `--btn-primary-bg`, `--btn-primary-color`, `--btn-primary-hover-bg`, etc.
- **Formularios**: `--input-border`, `--input-border-focus`, `--checkbox-bg`, etc.
- **Tipografía**: `--font-family`, `--font-size-base`, `--font-weight-normal`, etc.
- **Efectos**: `--border-radius`, `--transition`, etc.

## 📱 Responsive

Todos los componentes son responsive por defecto. Puedes usar las clases responsive de HolyGrail5 junto con los componentes:

```html
<div class="hg-d-flex hg-flex-column md:hg-flex-row hg-gap-16">
  <input type="text" class="input">
  <button class="btn btn-primary">Enviar</button>
</div>
```

## ♿ Accesibilidad

- Todos los inputs tienen labels asociados
- Los estados de focus son visibles
- Los componentes disabled tienen el cursor correcto
- Los checkboxes y radios tienen indicadores visuales claros
- Soporte para lectores de pantalla

## 🚀 Ejemplo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario con Dutti</title>
  <link rel="stylesheet" href="dist/output.css">
  <link rel="stylesheet" href="themes/dutti/theme.css">
</head>
<body>
  <form>
    <div class="form-group">
      <label class="label label-required" for="nombre">Nombre completo</label>
      <input type="text" id="nombre" class="input" placeholder="Tu nombre" required>
      <span class="helper-text">Este campo es obligatorio</span>
    </div>
    
    <div class="form-group">
      <label class="label" for="email">Email</label>
      <input type="email" id="email" class="input" placeholder="tu@email.com">
    </div>
    
    <div class="form-group">
      <label class="label" for="mensaje">Mensaje</label>
      <textarea id="mensaje" class="textarea" placeholder="Escribe tu mensaje..."></textarea>
    </div>
    
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox" required>
        <span class="checkbox-indicator"></span>
        <span class="checkbox-label">Acepto los términos y condiciones</span>
      </label>
    </div>
    
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-md">Enviar</button>
      <button type="button" class="btn btn-outline btn-md">Cancelar</button>
    </div>
  </form>
</body>
</html>
```

## 📄 Ver Demo

Abre `demo.html` en tu navegador para ver todos los componentes en acción:

```bash
# Si estás en la raíz del proyecto
open themes/dutti/demo.html

# O con el servidor de desarrollo
npm run serve
# Luego navega a: http://localhost:5000/themes/dutti/demo.html
```

## 🔧 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles modernos

## 📝 Notas

- Todos los componentes usan las variables CSS de HolyGrail5
- Los estilos son completamente personalizables desde `config.json`
- El sistema es compatible con RTL (Right-to-Left) gracias a las propiedades lógicas de CSS
- Los componentes siguen las mejores prácticas de accesibilidad web

## 🤝 Integración con MDS

Este sistema de theming está diseñado para integrarse fácilmente con **MDS (Massimo Dutti System)** y otros sistemas de componentes de Inditex, utilizando las mismas variables CSS base de HolyGrail5.

