# 🎨 Sistema de Botones - Holy Grail 5

Documentación completa del sistema de botones con nomenclatura estandarizada.

## 📋 Nomenclatura

### Tipos de Botones (guion simple)
- `btn-primary` - Botón principal sólido (color primario, alta prioridad)
- `btn-secondary` - Botón secundario outline (borde, media prioridad)
- `btn-tertiary` - Botón terciario texto (solo texto, sin fondo ni borde)
- `btn-link` - Botón tipo enlace (estilo minimalista con subrayado)

### Tamaños (doble guion `--`)
- `btn--mini` - Botón mini (28px altura)
- **(sin clase)** - Tamaño normal por defecto (40px altura)
- `btn--xlarge` - Botón extra grande (56px altura)
- `btn--full` - Ancho completo (100% width)
- `btn--mini-rd` - Mini redondeado (con border-radius 999px)

### Botones Sociales
- `btn-google` - Google (blanco con borde)
- `btn-facebook` - Facebook (azul #1877f2)
- `btn-apple` - Apple (negro)
- `btn-apple-secondary` - Apple outline (borde negro)
- `btn-naver` - Naver (verde #03c75a)
- `btn-wechat` - WeChat (verde #07c160)

## 💡 Ejemplos de Uso

### Botones Básicos

```html
<!-- Primary Button -->
<button class="btn btn-primary">Confirmar</button>

<!-- Secondary Button (Outline) -->
<button class="btn btn-secondary">Cancelar</button>

<!-- Tertiary Button (Text Only) -->
<button class="btn btn-tertiary">Omitir</button>

<!-- Link Button -->
<button class="btn btn-link">Más información</button>
```

### Botones con Tamaños

```html
<!-- Mini Button -->
<button class="btn btn-primary btn--mini">Mini</button>

<!-- Normal Button (por defecto) -->
<button class="btn btn-primary">Normal</button>

<!-- Extra Large Button -->
<button class="btn btn-primary btn--xlarge">Extra Large</button>

<!-- Full Width Button -->
<button class="btn btn-primary btn--full">Ancho Completo</button>

<!-- Mini Rounded -->
<button class="btn btn-primary btn--mini-rd">Mini Rounded</button>
```

### Botones con Iconos

```html
<button class="btn btn-primary">
  <span>⭐</span>
  <span>Favorito</span>
</button>

<button class="btn btn-secondary">
  <span>📧</span>
  <span>Email</span>
</button>

<button class="btn btn-tertiary">
  <span>💾</span>
  <span>Guardar</span>
</button>
```

### Botones Sociales

```html
<!-- Google Sign In -->
<button class="btn btn-google">
  <span>🔍</span>
  <span>Continuar con Google</span>
</button>

<!-- Facebook Sign In -->
<button class="btn btn-facebook">
  <span>f</span>
  <span>Continuar con Facebook</span>
</button>

<!-- Apple Sign In -->
<button class="btn btn-apple">
  <span></span>
  <span>Continuar con Apple</span>
</button>

<!-- Apple Secondary -->
<button class="btn btn-apple-secondary">
  <span></span>
  <span>Continuar con Apple</span>
</button>

<!-- Naver -->
<button class="btn btn-naver">
  <span>N</span>
  <span>Continuar con Naver</span>
</button>

<!-- WeChat -->
<button class="btn btn-wechat">
  <span>💬</span>
  <span>Continuar con WeChat</span>
</button>
```

### Botones Deshabilitados

```html
<button class="btn btn-primary" disabled>Primary Disabled</button>
<button class="btn btn-secondary" disabled>Secondary Disabled</button>
<button class="btn btn-tertiary" disabled>Tertiary Disabled</button>
<button class="btn btn-link" disabled>Link Disabled</button>
```

### Combinaciones

```html
<!-- Primary Mini -->
<button class="btn btn-primary btn--mini">Mini Primary</button>

<!-- Secondary Extra Large -->
<button class="btn btn-secondary btn--xlarge">XL Secondary</button>

<!-- Secondary Outline Full Width -->
<button class="btn btn-secondary btn--full">Full Width Secondary</button>

<!-- Google Mini Rounded -->
<button class="btn btn-google btn--mini-rd">Google</button>
```

## 🎯 Casos de Uso Recomendados

### Primary Button (Sólido)
- Acción principal de una página/formulario
- "Enviar", "Confirmar", "Guardar", "Comprar"
- **Máximo 1-2 por vista**

### Secondary Button (Outline)
- Acciones secundarias o alternativas
- "Vista previa", "Exportar", "Descargar", "Cancelar"
- **2-3 por vista**

### Tertiary Button (Solo texto)
- Acciones complementarias de menor prioridad
- "Limpiar", "Resetear", "Omitir", "Saltar"
- **Sin énfasis visual, solo texto**

### Link Button
- Acciones de baja prioridad
- "Cancelar", "Ver más", "Saltar"
- **Acciones que no requieren énfasis visual**

## 🎨 Variables CSS Personalizables

Los botones usan las siguientes variables CSS del tema:

```css
/* Primary */
--btn-primary-bg
--btn-primary-color
--btn-primary-hover-bg

/* Secondary */
--btn-secondary-bg
--btn-secondary-color
--btn-secondary-hover-bg

/* Tertiary (Outline) */
--btn-outline-color
--btn-outline-border
--btn-outline-hover-bg
--btn-outline-hover-color

/* Padding */
--btn-padding-y-sm
--btn-padding-x-sm
--btn-padding-y-md
--btn-padding-x-md
--btn-padding-y-lg
--btn-padding-x-lg
```

## 🔄 Retrocompatibilidad

Las siguientes clases antiguas se mantienen por compatibilidad pero están **deprecadas**:

- `btn-sm` → Usar `btn--mini`
- `btn-md` → Usar tamaño normal (sin clase)
- `btn-lg` → Usar `btn--xlarge`
- `btn-outline` → Usar `btn-tertiary`
- `btn-ghost` → Usar `btn-link`
- `btn-full` → Usar `btn--full`

## 📝 Notas

1. **Guion simple** (`-`) para tipos y variantes de botones
2. **Doble guion** (`--`) para modificadores de tamaño
3. Los botones siempre necesitan la clase base `.btn`
4. Los iconos dentro de botones se colocan en `<span>` separados
5. Los estados `:hover`, `:focus` y `:disabled` se manejan automáticamente

## 🧪 Testing

Para probar todos los botones, ejecuta:

```bash
npm run dev
```

Y navega a la sección **"Botones con Tema Dutti"** en `http://localhost:3000`

