/**
 * OPTIMIZACIÓN DE RENDIMIENTO Y ECODISEÑO
 */

// 1. Inserción eficiente de elementos usando DocumentFragment
const list = document.getElementById('list');
if (list) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 5000; i++) {
        const li = document.createElement('li');
        li.textContent = `Elemento optimizado número ${i}`; 
        fragment.appendChild(li);
    }
    // Una sola operación de inserción para evitar 5000 reflows
    list.appendChild(fragment);
}

// 2. Función pesada optimizada y bajo demanda
function runHeavy() {
    console.time('Calculo');
    let result = 0;
    // Ejecución controlada para reducir el estrés de la CPU
    for (let i = 0; i < 1000000; i++) {
        result += Math.sqrt(i);
    }
    console.timeEnd('Calculo');
    alert('Proceso terminado con éxito.');
}

// Se eliminó el XHR síncrono por ser una práctica ineficiente que bloquea el hilo principal.


