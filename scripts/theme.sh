#!/bin/bash

# Script simplificado para gestionar temas

THEMES_DIR="node_modules/holygrail5/themes"
DEST_DIR="src/themes"
THEME="$1"

# Sin argumentos → mostrar ayuda
if [ -z "$THEME" ]; then
  echo "Uso: npm run tema <nombre>"
  echo ""
  echo "Temas disponibles:"
  ls -1 "$THEMES_DIR" 2>/dev/null | grep -v README.md || echo "  (ninguno)"
  exit 0
fi

# Comando "list"
if [ "$THEME" = "list" ]; then
  echo "Temas disponibles:"
  ls -1 "$THEMES_DIR" 2>/dev/null | grep -v README.md || echo "  (ninguno)"
  exit 0
fi

# Verificar que existe el tema
if [ ! -d "$THEMES_DIR/$THEME" ]; then
  echo "❌ Tema '$THEME' no encontrado"
  exit 1
fi

# Copiar tema
mkdir -p "$DEST_DIR"
cp -r "$THEMES_DIR/$THEME" "$DEST_DIR/"

echo "✅ Tema '$THEME' clonado a $DEST_DIR/$THEME/"
echo ""
echo "Ejecuta 'npm run build' para compilarlo"

