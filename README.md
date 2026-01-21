# INFORME DE OPTIMIZACION - TALLER ECODISEÑO

# 1. ANÁLISIS DEL ESTADO INICIAL
La página original presentaba varios aspectos que incrementaban el consumo energético y afectaban al rendimiento:
- Imágenes pesadas sin optimizar y sin control de carga.
- Scripts ejecutados de forma inmediata, bloqueando el renderizado.
- Inserciones repetitivas en el DOM que generaban múltiples reflows.
- Recursos dispersos y sin depuración, aumentando el número de peticiones.
- Ausencia de justificación documental sobre las decisiones de diseño.

# 2. ACCIONES REALIZADAS
Siguiendo el checklist de ecodiseño digital, se aplicaron las siguientes mejoras:
- Optimización de imágenes mediante formatos eficientes (WebP) y definición de carga diferida para reducir transferencia de datos.
- Aplicación de lazy-loading en elementos no críticos para evitar descargas anticipadas.
- Uso de DocumentFragment para minimizar operaciones de renderizado y reducir el trabajo del motor del navegador.
- Inclusión del atributo defer en los scripts para evitar bloqueos durante la carga inicial.
- Eliminación de código redundante y reorganización de recursos para disminuir peticiones y mejorar la mantenibilidad.
- Ejecución bajo demanda de procesos pesados, desplazándolos a intervalos de inactividad mediante requestIdleCallback.
- Preparación de documentación y checklist para justificar las decisiones adoptadas y su impacto en sostenibilidad.

# 3. SIMULACIÓN DE HOSTING VERDE
Para completar el enfoque sostenible, se plantea un despliegue en un proveedor de hosting verde. En esta simulación se selecciona “EcoNode Solutions”, caracterizado por:
- Uso exclusivo de energía renovable en sus centros de datos.
- Sistemas de refrigeración pasiva que reducen el consumo eléctrico.
- Políticas de eficiencia orientadas a minimizar el impacto por visita.

