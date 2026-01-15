# INFORME DE OPTIMIZACION - TALLER ECODISEÑO

1. ANALISIS DEL ESTADO INICIAL
La pagina original presentaba los siguientes problemas:
- Imagenes en formato JPG de alta resolucion sin comprimir.
- Ejecucion de bucles masivos (20 millones de iteraciones) al cargar la web.
- Manipulacion ineficiente del DOM que bloqueaba el procesador.
- Estilos CSS redundantes e incrustados directamente en el HTML.

2. ACCIONES REALIZADAS
Para reducir el impacto ambiental y mejorar el rendimiento se aplico:
- Formato WebP: Se preparo la web para usar imagenes modernas mas ligeras.
- Lazy-loading: Las imagenes solo cargan cuando el usuario llega a ellas.
- DocumentFragment: Se optimizo el JS para insertar elementos en un solo paso, ahorrando energia de la CPU.
- Script Defer: Se movio el JS al final y con atributo defer para no bloquear el renderizado.
- Limpieza de codigo: Se elimino CSS no utilizado y se separaron los archivos.

3. SIMULACION DE HOSTING VERDE
Se ha seleccionado el proveedor "EcoNode Solutions".
- Funcionamiento basado 100% en energia eolica.
- Sistemas de refrigeracion pasiva para reducir el consumo electrico del servidor.

