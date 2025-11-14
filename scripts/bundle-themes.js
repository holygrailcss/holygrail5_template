#!/usr/bin/env node
/**
 * Script simplificado para unificar temas CSS
 * Combina todos los @import en un solo archivo
 */

const fs = require('fs');
const path = require('path');

const themesDir = path.join(process.cwd(), 'dist', 'css', 'themes');

if (!fs.existsSync(themesDir)) {
  console.log('ℹ️  No hay temas para procesar');
  process.exit(0);
}

// Función para resolver @import
function bundleTheme(themeDir) {
  const themeFile = path.join(themeDir, 'theme.css');
  
  if (!fs.existsSync(themeFile)) return false;
  
  let content = fs.readFileSync(themeFile, 'utf8');
  const importRegex = /@import\s+url\(['"]([^'"]+)['"]\);?/g;
  
  // Reemplazar cada @import con el contenido del archivo
  content = content.replace(importRegex, (match, importPath) => {
    const fullPath = path.join(themeDir, importPath);
    if (fs.existsSync(fullPath)) {
      const imported = fs.readFileSync(fullPath, 'utf8');
      return `\n/* === ${importPath} === */\n${imported.trim()}\n/* === Fin ${importPath} === */\n`;
    }
    return match;
  });
  
  // Guardar archivo unificado
  fs.writeFileSync(themeFile, content, 'utf8');
  
  // Eliminar archivos modulares (_*.css)
  fs.readdirSync(themeDir)
    .filter(f => f.startsWith('_') && f.endsWith('.css'))
    .forEach(f => fs.unlinkSync(path.join(themeDir, f)));
  
  return true;
}

// Procesar todos los temas
const themes = fs.readdirSync(themesDir).filter(item => 
  fs.statSync(path.join(themesDir, item)).isDirectory()
);

if (themes.length === 0) {
  console.log('ℹ️  No hay temas para unificar');
  process.exit(0);
}

console.log(`🎨 Unificando ${themes.length} tema(s)...`);

themes.forEach(theme => {
  const themePath = path.join(themesDir, theme);
  if (bundleTheme(themePath)) {
    console.log(`✅ Tema '${theme}' unificado`);
  }
});

console.log('✨ Temas procesados correctamente');

