#!/bin/bash

# Script de desarrollo con apertura automática del navegador

echo "🚀 Iniciando desarrollo..."

# Build del proyecto
npm run build

# Iniciar servidor en background
serve dist -l 3000 &
SERVER_PID=$!

# Esperar a que el servidor esté listo
sleep 2

# Abrir navegador
echo "🌐 Abriendo navegador..."
open http://localhost:3000

# Esperar a que el servidor termine
wait $SERVER_PID

