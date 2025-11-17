# 📐 Variables del Tema - config.json

**⚠️ IMPORTANTE**: Todas las variables del tema Dutti están centralizadas en `config.json > themeVariables`.

Este es el único lugar donde debes modificar colores, espaciados, tipografía y comportamiento de todos los componentes del tema.

## 📋 Ubicación

```
config.json
└── themeVariables          # 📍 EDITA AQUÍ
    ├── buttons             # Variables de botones
    ├── forms               # Variables de formularios
    ├── typography          # Variables de tipografía
    ├── borders             # Variables de bordes
    └── transitions         # Variables de transiciones
```

## 🎨 Estructura Completa

### Botones

```json
{
  "themeVariables": {
    "buttons": {
      "primary": {
        "bg": "var(--hg-color-primary)",
        "color": "var(--hg-color-white)",
        "hoverBg": "var(--hg-color-dark-grey)"
      },
      "secondary": {
        "bg": "var(--hg-color-dark-grey)",
        "color": "var(--hg-color-white)",
        "hoverBg": "var(--hg-color-middle-grey)"
      },
      "outline": {
        "border": "var(--hg-color-primary)",
        "color": "var(--hg-color-primary)",
        "hoverBg": "var(--hg-color-primary)",
        "hoverColor": "var(--hg-color-white)"
      },
      "ghost": {
        "color": "var(--hg-color-primary)",
        "hoverBg": "var(--hg-color-light-grey)"
      },
      "feel": {
        "bg": "var(--hg-color-feel)",
        "color": "var(--hg-color-white)",
        "hoverBg": "var(--hg-color-feel-dark)"
      },
      "padding": {
        "sm": {
          "x": "var(--hg-spacing-12)",
          "y": "var(--hg-spacing-8)"
        },
        "md": {
          "x": "var(--hg-spacing-16)",
          "y": "var(--hg-spacing-12)"
        },
        "lg": {
          "x": "var(--hg-spacing-24)",
          "y": "var(--hg-spacing-16)"
        }
      }
    }
  }
}
```

### Formularios

```json
{
  "themeVariables": {
    "forms": {
      "input": {
        "border": "var(--hg-color-middle-grey)",
        "borderFocus": "var(--hg-color-primary)",
        "bg": "var(--hg-color-white)",
        "color": "var(--hg-color-primary)",
        "placeholder": "var(--hg-color-middle-grey)",
        "padding": {
          "x": "var(--hg-spacing-16)",
          "y": "var(--hg-spacing-12)"
        },
        "gap": "var(--hg-spacing-8)",
        "errorBorder": "var(--hg-color-error)",
        "successBorder": "var(--hg-color-success)",
        "warningBorder": "var(--hg-color-warning)"
      },
      "label": {
        "color": "var(--hg-color-primary)",
        "required": "var(--hg-color-error)"
      },
      "checkbox": {
        "bg": "var(--hg-color-white)",
        "border": "var(--hg-color-middle-grey)",
        "checkedBg": "var(--hg-color-primary)",
        "checkedBorder": "var(--hg-color-primary)"
      },
      "radio": {
        "bg": "var(--hg-color-white)",
        "border": "var(--hg-color-middle-grey)",
        "checkedBg": "var(--hg-color-primary)",
        "checkedBorder": "var(--hg-color-primary)"
      },
      "switch": {
        "bg": "var(--hg-color-middle-grey)",
        "activeBg": "var(--hg-color-primary)",
        "thumb": "var(--hg-color-white)"
      },
      "groupGap": "var(--hg-spacing-16)"
    }
  }
}
```

### Tipografía

```json
{
  "themeVariables": {
    "typography": {
      "fontFamily": "var(--hg-typo-font-family-primary)",
      "fontSize": {
        "base": "var(--hg-typo-font-size-13)",
        "sm": "var(--hg-typo-font-size-12)",
        "lg": "var(--hg-typo-font-size-14)"
      },
      "fontWeight": {
        "normal": "var(--hg-typo-font-weight-400)",
        "bold": "var(--hg-typo-font-weight-700)"
      },
      "lineHeight": "var(--hg-typo-line-height-1-5)"
    }
  }
}
```

### Bordes y Transiciones

```json
{
  "themeVariables": {
    "borders": {
      "radius": "0",
      "width": "1px",
      "style": "solid"
    },
    "transitions": {
      "default": "all 0.2s ease"
    }
  }
}
```

## ⚙️ Generación Automática de Variables

**⚠️ IMPORTANTE**: Las variables tipográficas se generan automáticamente desde `config.json`.

### Problema con HolyGrail5

HolyGrail5 genera variables CSS basándose en el **valor** de las fuentes:

```json
// config.json
"fontFamilyMap": {
  "primary": "Arial, sans-serif"
}
```

**Genera:**
```css
--hg-dutti-font-family-arial  /* ← Basado en el valor "Arial" */
```

**Deberíamos tener:**
```css
--hg-typo-font-family-primary  /* ← Basado en la key "primary" */
```

### Solución Implementada

Hemos implementado un sistema de 2 scripts que se ejecutan automáticamente:

1. **`generate-theme-variables.js`**: Actualiza las variables en `src/themes/dutti/_variables.css`
2. **`post-process-holygrail.js`**: Añade las variables semánticas directamente a `dist/css/holygrail.css`

**Resultado en `dist/css/holygrail.css`:**
```css
:root {
  /* ... otras variables de HolyGrail5 ... */
  --hg-color-text: #1a1a1a;
  
  /* Variables semánticas de tipografía (desde fontFamilyMap) */
  --hg-typo-font-family-primary: Arial, sans-serif;
  --hg-typo-font-family-secondary: times new roman, serif;
}
```

Estos scripts se ejecutan **automáticamente** en cada build.

## 🔄 Flujo de Trabajo

### 1. Editar Variables

Abre `config.json` y modifica las variables en `themeVariables` o `fontFamilyMap`:

```json
{
  "themeVariables": {
    "buttons": {
      "primary": {
        "bg": "#ff0000",  // 👈 Cambiar color
        "color": "#ffffff",
        "hoverBg": "#cc0000"
      }
    }
  }
}
```

### 2. Regenerar CSS

```bash
npm run build
```

El proceso de build ejecuta:
1. `generate-theme-variables.js` - Actualiza las variables tipográficas en el tema (`src/themes/dutti/_variables.css`)
2. HolyGrail5 - Genera el CSS base (`dist/css/holygrail.css`)
3. `post-process-holygrail.js` - Añade variables semánticas a `holygrail.css`
4. Copia y bundlea los temas

### 3. Resultado

Las variables CSS se generan automáticamente en `src/themes/dutti/_variables.css` con nombres semánticos:

```css
:root {
  --btn-primary-bg: #ff0000;
  --btn-primary-color: #ffffff;
  --btn-primary-hover-bg: #cc0000;
}
```

## 📝 Mapeo de Variables

### De config.json a CSS

| config.json | CSS Variable | Uso |
|------------|--------------|-----|
| `buttons.primary.bg` | `--btn-primary-bg` | Fondo botón primary |
| `buttons.primary.color` | `--btn-primary-color` | Color texto primary |
| `buttons.primary.hoverBg` | `--btn-primary-hover-bg` | Fondo hover primary |
| `forms.input.border` | `--input-border` | Borde de inputs |
| `forms.input.borderFocus` | `--input-border-focus` | Borde focus inputs |
| `forms.checkbox.checkedBg` | `--checkbox-checked-bg` | Fondo checkbox activo |
| `typography.fontFamily` | `--font-family` | Fuente principal |
| `borders.radius` | `--border-radius` | Radio de bordes |
| `transitions.default` | `--transition` | Transición por defecto |

## 🎨 Referencia de Colores HolyGrail5

Las variables del tema pueden referenciar colores de HolyGrail5:

| Variable HG5 | Definido en | Valor ejemplo |
|-------------|-------------|---------------|
| `var(--hg-color-primary)` | `config.json > colors.primary` | `#1a1a1a` |
| `var(--hg-color-white)` | `config.json > colors.white` | `#ffffff` |
| `var(--hg-color-dark-grey)` | `config.json > colors["dark-grey"]` | `#4a4a4a` |
| `var(--hg-color-middle-grey)` | `config.json > colors["middle-grey"]` | `#8b7355` |
| `var(--hg-color-light-grey)` | `config.json > colors["light-grey"]` | `#f5f5f5` |
| `var(--hg-color-error)` | `config.json > colors.error` | `#c41e3a` |
| `var(--hg-color-success)` | `config.json > colors.success` | `#7c9473` |
| `var(--hg-color-warning)` | `config.json > colors.warning` | `#d4af37` |
| `var(--hg-color-feel)` | `config.json > colors.feel` | `#d4af37` |

## 💡 Ejemplos de Personalización

### Cambiar color primario de botones

```json
{
  "colors": {
    "primary": "#007bff"  // Azul
  },
  "themeVariables": {
    "buttons": {
      "primary": {
        "bg": "var(--hg-color-primary)",  // Usará #007bff
        "hoverBg": "#0056b3"  // Azul más oscuro
      }
    }
  }
}
```

### Cambiar bordes redondeados

```json
{
  "themeVariables": {
    "borders": {
      "radius": "8px"  // Bordes redondeados en todos los componentes
    }
  }
}
```

### Cambiar espaciados de inputs

```json
{
  "themeVariables": {
    "forms": {
      "input": {
        "padding": {
          "x": "var(--hg-spacing-20)",  // Más espacio horizontal
          "y": "var(--hg-spacing-16)"   // Más espacio vertical
        }
      }
    }
  }
}
```

### Cambiar tipografía

```json
{
  "fontFamilyMap": {
    "primary": "'Inter', sans-serif"
  },
  "themeVariables": {
    "typography": {
      "fontFamily": "var(--hg-typo-font-family-primary)",
      "fontSize": {
        "base": "14px",  // Aumentar tamaño base
        "sm": "12px",
        "lg": "16px"
      }
    }
  }
}
```

## 🚀 Workflow Recomendado

1. **Planifica tu tema**: Define paleta de colores, espaciados y tipografía
2. **Edita `config.json`**: Modifica solo `colors` y `themeVariables`
3. **Regenera**: `npm run build`
4. **Prueba**: `npm run dev`
5. **Itera**: Ajusta y repite

## ⚠️ Notas Importantes

1. **NO edites `_variables.css` directamente** - Los cambios se perderán en el próximo build
2. **Usa variables de HolyGrail5** cuando sea posible (`var(--hg-*)`) para mantener consistencia
3. **Los valores deben ser CSS válidos** - Incluye unidades cuando sean necesarias
4. **Regenera siempre después de cambios** - `npm run build` es obligatorio

## 📚 Recursos

- [Documentación HolyGrail5](https://holygrailcss.github.io)
- [Documentación de Botones](BUTTONS.md)
- [README del Tema Dutti](src/themes/dutti/README.md)

---

**💡 Consejo**: Mantén una copia de respaldo de tu `config.json` personalizado antes de hacer cambios importantes.

