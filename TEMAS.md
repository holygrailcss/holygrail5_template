# 🎨 Sistema de Temas - Holy Grail 5

## Descripción

Los temas están ubicados en `node_modules/holygrail5/temas/` y se pueden importar fácilmente a tu proyecto.

## 🚀 Uso Rápido

### 1. Listar temas disponibles
```bash
npm run tema list
```

### 2. Aplicar tema
```bash
npm run tema dutti   # Tema Massimo Dutti
npm run tema zara    # Tema Zara
npm run tema default # Tema por defecto
```

### 3. Hacer build con el tema
```bash
npm run build
```

## 📋 Workflow Completo

```bash
# Aplicar tema Dutti
npm run tema dutti
# ✅ Tema 'dutti' aplicado

# Generar CSS y build
npm run build
# ✅ CSS generado con los colores y fuentes del tema (42KB)
```

## 🎨 Temas Disponibles

### 🔹 Dutti Theme
Tema elegante inspirado en Massimo Dutti

**Características:**
- **Primary**: #1a1a1a (Negro profundo)
- **Middle Grey**: #8b7355 (Marrón cálido)
- **Warning**: #d4af37 (Dorado)
- **Font Primary**: Georgia, 'Times New Roman', serif
- **Font Secondary**: Arial, sans-serif
- **Estilo**: Sofisticado, premium, elegante

**Ideal para**: E-commerce de moda, marcas de lujo, sitios corporativos premium

### 🔹 Zara Theme
Tema minimalista y moderno

**Características:**
- **Primary**: #000000 (Negro puro)
- **Secondary**: #666666 (Gris medio)
- **Accent**: #ff5a5f (Coral)
- **Font Primary**: Arial, sans-serif
- **Font Secondary**: Georgia, serif
- **Estilo**: Limpio, contemporáneo, minimalista

**Ideal para**: E-commerce moderno, portfolios, startups

### 🔹 Default Theme
Tema por defecto del sistema

**Características:**
- **Primary**: #000000 (Negro)
- **Dark Grey**: #737373 (Gris)
- **Font Primary**: Arial, sans-serif
- **Font Secondary**: MS-Serif, serif
- **Estilo**: Neutro, funcional, versátil

**Ideal para**: Proyectos corporativos, dashboards, aplicaciones

## 📁 Estructura

```
node_modules/holygrail5/
└── temas/
    ├── README.md
    ├── dutti/
    │   └── config.json    # Configuración completa del tema
    ├── zara/
    │   └── config.json
    └── default/
        └── config.json

Tu proyecto:
src/
└── tema/                   # ⚠️ Generado, no editar
    └── config.json         # Tema actualmente activo
```

## 🔧 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run tema list` | Lista todos los temas disponibles |
| `npm run tema dutti` | Aplica tema Dutti |
| `npm run tema zara` | Aplica tema Zara |
| `npm run tema default` | Aplica tema Default |

## 💡 Casos de Uso

### Desarrollo con diferentes temas
```bash
# Probar diseño con tema Dutti
npm run tema:dutti && npm run tema:apply && npm run dev

# Cambiar a tema Zara
npm run tema:zara && npm run tema:apply && npm run dev
```

### Build para cliente específico
```bash
# Cliente con branding elegante
npm run tema:dutti && npm run tema:apply && npm run build

# Cliente con branding moderno
npm run tema:zara && npm run tema:apply && npm run build
```

### White-label de aplicación
```bash
# Build para marca A
npm run tema:dutti && npm run tema:apply
npm run build
cp -r dist/ dist-marca-a/

# Build para marca B
npm run tema:zara && npm run tema:apply
npm run build
cp -r dist/ dist-marca-b/
```

## 🎨 Personalizar un Tema

### Opción 1: Editar src/tema/ (temporal)
```bash
# Importar tema base
npm run tema:dutti

# Editar colores en src/tema/config.json
# Por ejemplo, cambiar el color primary

# Aplicar cambios
npm run tema:apply && npm run build
```

⚠️ **Nota**: Los cambios en `src/tema/` se perderán si importas otro tema.

### Opción 2: Modificar theme en node_modules (persistente)
```bash
# Editar directamente
nano node_modules/holygrail5/temas/dutti/config.json

# Importar tema modificado
npm run tema:dutti && npm run tema:apply && npm run build
```

⚠️ **Nota**: Los cambios en node_modules se perderán con `npm install`.

### Opción 3: Crear tema personalizado local
```bash
# Copiar tema base
cp -r node_modules/holygrail5/temas/dutti node_modules/holygrail5/temas/mi-marca

# Editar el nuevo tema
nano node_modules/holygrail5/temas/mi-marca/config.json

# Añadir script en package.json
"tema:mi-marca": "rm -rf src/tema && mkdir -p src/tema && cp -r node_modules/holygrail5/temas/mi-marca/* src/tema/ && echo '✅ Tema Mi Marca importado'"

# Usar
npm run tema:mi-marca && npm run tema:apply && npm run build
```

## 🔍 Inspeccionar Tema Activo

```bash
# Ver tema actualmente importado
cat src/tema/config.json | grep category

# Ver colores del tema
cat src/tema/config.json | grep -A 20 '"colors"'

# Ver fuentes del tema
cat src/tema/config.json | grep -A 5 '"fontFamilyMap"'
```

## ⚙️ Cómo Funciona

1. **Importar**: `npm run tema:dutti` copia `node_modules/holygrail5/temas/dutti/*` → `src/tema/`
2. **Aplicar**: `npm run tema:apply` copia `src/tema/config.json` → `config.json` (raíz)
3. **Build**: `npm run build` usa el `config.json` de la raíz para generar CSS

## 🎯 Diferencias entre Temas

| Aspecto | Dutti | Zara | Default |
|---------|-------|------|---------|
| **Estilo** | Elegante | Moderno | Neutral |
| **Primary** | #1a1a1a | #000000 | #000000 |
| **Accent** | #d4af37 | #ff5a5f | - |
| **Font** | Georgia | Arial | Arial |
| **Target** | Premium | Contemporáneo | General |

## 📚 Recursos

- Documentación del proyecto: `README.md`
- Arquitectura: `docs/ARCHITECTURE.md`
- Temas en node_modules: `node_modules/holygrail5/temas/README.md`

## 🛠️ Troubleshooting

### Tema no se aplica
```bash
# Limpiar y volver a aplicar
rm -rf src/tema
npm run tema:dutti
npm run tema:apply
npm run clean && npm run build
```

### Ver qué tema está activo
```bash
cat config.json | head -3
# Verás el "category" del tema activo
```

### Restaurar tema original
```bash
# Si guardaste backup
git checkout config.json

# O importar tema default
npm run tema:default && npm run tema:apply && npm run build
```

---

**Sistema de Temas Holy Grail 5** - Flexibilidad total para tu proyecto 🎨✨

