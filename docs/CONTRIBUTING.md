# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto Holy Grail 5 Template!

## 🚀 Cómo Empezar

1. **Fork** el repositorio
2. **Clona** tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/holygrail5_template.git
   cd holygrail5_template
   ```
3. **Instala** las dependencias:
   ```bash
   npm install
   ```
4. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```

## 📁 Estructura del Proyecto

Antes de contribuir, familiarízate con la arquitectura:

- Lee `README.md` para entender el proyecto
- Revisa `docs/ARCHITECTURE.md` para conocer la estructura
- Consulta `docs/SUPERPROMPT.md` para el sistema de clases

## 🎯 Áreas de Contribución

### 1. Documentación
- Mejoras en README
- Ejemplos adicionales
- Correcciones de typos
- Traducciones

### 2. Funcionalidades
- Nuevos componentes HTML
- Mejoras en scripts
- Optimizaciones de CSS

### 3. Configuración
- Nuevas opciones en `config.json`
- Helpers adicionales
- Clases utilitarias

### 4. Testing
- Tests de regresión
- Validación de CSS
- Tests de accesibilidad

## 📝 Convenciones de Código

### HTML
- Indentación: 2 espacios
- Usa clases semánticas
- Sigue la guía de SUPERPROMPT.md

```html
<div class="p-16 md:p-24 hg-d-flex">
  <h2 class="h2 mb-16">Título</h2>
  <p class="text-m">Contenido</p>
</div>
```

### JavaScript
- Indentación: 2 espacios
- Usa `const` y `let` (no `var`)
- Nombres descriptivos

```javascript
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  // Lógica aquí
});
```

### CSS (config.json)
- Usa valores consistentes
- Mantén la nomenclatura existente
- Documenta cambios significativos

```json
{
  "colors": {
    "brand-new": "#ff6600"
  }
}
```

## 🔄 Flujo de Trabajo

1. **Desarrolla** tu feature:
   ```bash
   npm run dev
   ```

2. **Regenera CSS** si modificas config.json:
   ```bash
   npm run generate
   ```

3. **Prueba** tus cambios en diferentes dispositivos

4. **Commit** con mensajes descriptivos:
   ```bash
   git commit -m "feat: añadir componente de card"
   ```

5. **Push** a tu fork:
   ```bash
   git push origin feature/mi-nueva-funcionalidad
   ```

6. **Crea** un Pull Request

## ✅ Checklist antes de PR

- [ ] El código sigue las convenciones del proyecto
- [ ] Se regeneró el CSS si hubo cambios en config.json
- [ ] La documentación está actualizada
- [ ] Los cambios funcionan en mobile y desktop
- [ ] No hay errores en la consola
- [ ] El commit message es descriptivo

## 📋 Formato de Commit Messages

Usa el formato conventional commits:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (sin afectar código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

Ejemplos:
```
feat: añadir componente de modal
fix: corregir responsive del menú
docs: actualizar guía de instalación
style: mejorar indentación en index.html
refactor: simplificar lógica del menu toggle
```

## 🐛 Reportar Bugs

Al reportar un bug, incluye:

1. **Descripción clara** del problema
2. **Pasos para reproducir**:
   - Paso 1
   - Paso 2
   - ...
3. **Comportamiento esperado**
4. **Comportamiento actual**
5. **Capturas de pantalla** (si aplica)
6. **Entorno**:
   - OS:
   - Navegador:
   - Versión:

## 💡 Sugerir Funcionalidades

Para sugerir una funcionalidad:

1. **Verifica** que no exista ya
2. **Describe** el caso de uso
3. **Explica** cómo beneficiaría al proyecto
4. **Proporciona** ejemplos o mockups si es posible

## 🔍 Code Review

Los PRs serán revisados considerando:

- Calidad del código
- Adherencia a convenciones
- Impacto en el proyecto
- Documentación
- Testing

## 📞 Contacto

¿Dudas? Abre un issue o inicia una discusión.

## 🙏 Agradecimientos

Todas las contribuciones son valoradas y reconocidas.

---

**¡Gracias por contribuir a Holy Grail 5 Template!** 🚀

