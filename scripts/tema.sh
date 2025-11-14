#!/bin/bash

# Script simplificado para gestionar temas CSS

THEMES_DIR="node_modules/holygrail5/themes"
SRC_THEMES_DIR="src/themes"
TEMA_NAME="$1"

# Si no hay argumento, mostrar ayuda
if [ -z "$TEMA_NAME" ]; then
  echo "Uso: npm run tema <nombre>"
  echo ""
  echo "Los temas son componentes CSS que complementan HolyGrail5."
  echo "Se clonarán a src/themes/<nombre>/ para que puedas editarlos."
  echo ""
  echo "Temas disponibles:"
  ls -1 "$THEMES_DIR" 2>/dev/null | grep -v README.md
  exit 0
fi

# Si el argumento es "list", listar temas
if [ "$TEMA_NAME" = "list" ]; then
  echo "Temas disponibles:"
  ls -1 "$THEMES_DIR" 2>/dev/null | grep -v README.md
  exit 0
fi

# Verificar que el tema existe
if [ ! -d "$THEMES_DIR/$TEMA_NAME" ]; then
  echo "❌ Tema '$TEMA_NAME' no encontrado"
  echo ""
  echo "Temas disponibles:"
  ls -1 "$THEMES_DIR" 2>/dev/null | grep -v README.md
  exit 1
fi

# Crear directorio destino
mkdir -p "$SRC_THEMES_DIR"

# Copiar tema a src/themes
cp -r "$THEMES_DIR/$TEMA_NAME" "$SRC_THEMES_DIR/"
echo "✅ Tema '$TEMA_NAME' clonado a $SRC_THEMES_DIR/$TEMA_NAME/"
echo ""
echo "📝 Ahora puedes editar el tema en: src/themes/$TEMA_NAME/"
echo "🔨 Ejecuta 'npm run build' para copiar el tema a dist/"
echo "🌐 El tema estará disponible en: dist/css/themes/$TEMA_NAME/"
echo ""
echo "Para usar el tema, añade en tu HTML:"
echo '<link rel="stylesheet" href="css/themes/'$TEMA_NAME'/theme.css">'

