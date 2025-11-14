#!/bin/bash

echo "🚀 Script para subir el proyecto a GitHub"
echo "=========================================="
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -d ".git" ]; then
    echo "❌ Error: No estás en un repositorio Git"
    exit 1
fi

# Verificar autenticación con gh
echo "🔍 Verificando autenticación con GitHub..."
if command -v gh &> /dev/null; then
    if gh auth status &> /dev/null; then
        echo "✅ Ya estás autenticado con GitHub CLI"
        echo ""
        echo "🚀 Haciendo push..."
        git push -u origin main
        exit 0
    else
        echo "⚠️  No estás autenticado con GitHub CLI"
        echo ""
        echo "🔐 Por favor, autentica con uno de estos métodos:"
        echo ""
        echo "1. GitHub CLI (Recomendado):"
        echo "   gh auth login"
        echo ""
        echo "2. Personal Access Token:"
        echo "   - Crea un token en: https://github.com/settings/tokens"
        echo "   - Ejecuta: git push -u origin main"
        echo "   - Usa el token como contraseña"
        echo ""
        read -p "¿Quieres autenticar ahora con GitHub CLI? (s/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            gh auth login
            echo ""
            echo "🚀 Haciendo push..."
            git push -u origin main
        else
            echo ""
            echo "👉 Cuando estés listo, ejecuta: git push -u origin main"
        fi
    fi
else
    echo "⚠️  GitHub CLI no está instalado"
    echo ""
    echo "🔐 Opciones:"
    echo "1. Instalar GitHub CLI: brew install gh"
    echo "2. Usar Personal Access Token"
    echo ""
    echo "Para usar PAT:"
    echo "1. Crea un token en: https://github.com/settings/tokens"
    echo "2. Ejecuta: git push -u origin main"
    echo "3. Usa el token como contraseña"
fi
