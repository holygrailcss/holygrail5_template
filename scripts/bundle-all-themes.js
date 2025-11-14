#!/usr/bin/env node

/**
 * Script para unificar todos los temas CSS en dist/css/themes/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const themesDir = path.join(process.cwd(), 'dist', 'css', 'themes');

if (!fs.existsSync(themesDir)) {
  console.log('ℹ️  No hay temas en dist/css/themes/');
  process.exit(0);
}

const themes = fs.readdirSync(themesDir).filter(item => {
  const itemPath = path.join(themesDir, item);
  return fs.statSync(itemPath).isDirectory();
});

if (themes.length === 0) {
  console.log('ℹ️  No se encontraron temas para unificar');
  process.exit(0);
}

console.log(`\n🎨 Unificando ${themes.length} tema(s)...\n`);

themes.forEach(theme => {
  const themePath = path.join(themesDir, theme);
  const themeFile = path.join(themePath, 'theme.css');
  
  if (fs.existsSync(themeFile)) {
    try {
      execSync(`node scripts/bundle-theme.js "${themePath}"`, { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error(`❌ Error unificando tema ${theme}`);
    }
  } else {
    console.log(`⚠️  Tema ${theme} no tiene theme.css, omitiendo...`);
  }
});

console.log('\n✨ Todos los temas unificados correctamente\n');

