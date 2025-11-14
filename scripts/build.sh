#!/bin/bash

# Script de build simplificado

echo "🔨 Generando CSS base..."
npx holygrail5 --config=./config.json --output=./dist/css/holygrail.css

echo "📦 Copiando archivos..."
cp src/index.html dist/
cp -r src/js dist/ 2>/dev/null || true
cp -r assets dist/ 2>/dev/null || true

# Copiar y unificar temas si existen
if [ -d "src/themes" ]; then
  echo "🎨 Procesando temas..."
  cp -r src/themes dist/css/ 2>/dev/null || true
  node scripts/bundle-themes.js
fi

echo "✅ Build completado"

