#!/bin/bash

# Script simplificado para gestionar temas

TEMAS_DIR="node_modules/holygrail5/temas"
CONFIG="config.json"
TEMA_NAME="$1"

# Si no hay argumento, mostrar ayuda
if [ -z "$TEMA_NAME" ]; then
  echo "Uso: npm run tema <nombre>"
  echo ""
  echo "Temas disponibles:"
  ls -1 "$TEMAS_DIR" 2>/dev/null | grep -v README.md
  exit 0
fi

# Si el argumento es "list", listar temas
if [ "$TEMA_NAME" = "list" ]; then
  echo "Temas disponibles:"
  ls -1 "$TEMAS_DIR" 2>/dev/null | grep -v README.md
  exit 0
fi

# Verificar que el tema existe
if [ ! -d "$TEMAS_DIR/$TEMA_NAME" ]; then
  echo "❌ Tema '$TEMA_NAME' no encontrado"
  echo ""
  echo "Temas disponibles:"
  ls -1 "$TEMAS_DIR" 2>/dev/null | grep -v README.md
  exit 1
fi

# Aplicar tema directamente
cp "$TEMAS_DIR/$TEMA_NAME/config.json" "$CONFIG"
echo "✅ Tema '$TEMA_NAME' aplicado"

