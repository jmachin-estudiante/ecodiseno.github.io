Taller: Página pesada para optimización

Contenido:
- index.html (mal estructurado, imágenes enormes, scripts bloqueantes)
- styles.css (no minificado)
- script.js (sin minificar, con cálculos pesados)

Objetivo: optimizar imágenes, aplicar lazy-loading, mover/minificar scripts, limpiar CSS, reducir peticiones y simular hosting verde.

Instrucciones para el alumno:
1. Analizar la página original (peso, peticiones, Lighthouse, WebsiteCarbon).
2. Optimizar imágenes (resize, convert to WebP), aplicar loading=lazy.
3. Minificar y defer scripts; evitar loops que causen reflows; usar DocumentFragment si es necesario.
4. Limpiar CSS y mover estilos críticos al head mínimo.
5. Documentar los cambios en README_final.md y medir mejoras antes/después.
