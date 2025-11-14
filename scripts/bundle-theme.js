#!/usr/bin/env node

/**
 * Script para unificar un tema CSS
 * Lee theme.css y resuelve todos los @import en un único archivo
 */

const fs = require('fs');
const path = require('path');

// Argumentos: node bundle-theme.js <tema-dir>
const themeDir = process.argv[2];

if (!themeDir) {
  console.error('❌ Uso: node bundle-theme.js <tema-dir>');
  console.error('   Ejemplo: node bundle-theme.js dist/css/themes/dutti');
  process.exit(1);
}

const themePath = path.resolve(themeDir);
const themeFile = path.join(themePath, 'theme.css');

if (!fs.existsSync(themeFile)) {
  console.error(`❌ No se encontró ${themeFile}`);
  process.exit(1);
}

/**
 * Resuelve los @import de un archivo CSS
 */
function resolveImports(cssContent, baseDir) {
  const importRegex = /@import\s+url\(['"]([^'"]+)['"]\);?/g;
  let match;
  let result = '';
  let lastIndex = 0;

  while ((match = importRegex.exec(cssContent)) !== null) {
    // Añadir contenido antes del @import
    result += cssContent.slice(lastIndex, match.index);
    
    const importPath = match[1];
    const fullPath = path.join(baseDir, importPath);
    
    if (fs.existsSync(fullPath)) {
      // Leer el archivo importado
      const importedContent = fs.readFileSync(fullPath, 'utf8');
      result += `\n/* === ${importPath} === */\n`;
      result += importedContent.trim();
      result += `\n/* === Fin ${importPath} === */\n\n`;
    } else {
      console.warn(`⚠️  No se encontró: ${fullPath}`);
      result += match[0]; // Mantener el @import si no se encuentra
    }
    
    lastIndex = importRegex.lastIndex;
  }
  
  // Añadir el resto del contenido
  result += cssContent.slice(lastIndex);
  
  return result;
}

try {
  // Leer theme.css
  const themeContent = fs.readFileSync(themeFile, 'utf8');
  
  // Extraer el comentario de cabecera (antes del primer @import)
  const headerMatch = themeContent.match(/^\/\*\*[\s\S]*?\*\//);
  const header = headerMatch ? headerMatch[0] + '\n\n' : '';
  
  // Resolver todos los @import
  const bundledContent = resolveImports(themeContent, themePath);
  
  // Escribir el archivo unificado
  fs.writeFileSync(themeFile, bundledContent, 'utf8');
  
  console.log(`✅ Tema unificado: ${path.relative(process.cwd(), themeFile)}`);
  
  // Eliminar los archivos modulares (_*.css) ya que ya están en el bundle
  const files = fs.readdirSync(themePath);
  files.forEach(file => {
    if (file.startsWith('_') && file.endsWith('.css')) {
      const filePath = path.join(themePath, file);
      fs.unlinkSync(filePath);
    }
  });
  
  console.log('✅ Archivos modulares eliminados (ya incluidos en theme.css)');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

