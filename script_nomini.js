/**
 * OPTIMIZACIÓN DE RENDIMIENTO Y ECODISEÑO
 */

// 1. Inserción eficiente de elementos usando DocumentFragment
const list = document.getElementById('list');
if (list) {
    const fragment = document.createDocumentFragment();
    const elementos_pagina = 10;
    const total_paginas = 500;
    const anterior = document.getElementById('anterior');
    const siguiente = document.getElementById('siguiente');
    
    let pagina = anterior.getAttribute('value') + 1;

    if (pagina < 0)
        pagina = 0;

    anterior.setAttribute('value', pagina - 1);
    
    if (pagina == 0)
        anterior.setAttribute('disable', 'disable');
    else
        anterior.removeAttribute('disable');

    if (pagina > total_paginas)
        pagina = total_paginas;

    const ultimo_elemento = ((pagina +1) * elementos_pagina) -1;

    if (pagina == total_paginas)
        siguiente.setAttribute('disable', 'disable');
    else
        siguiente.removeAttribute('disable');

    for (let i = pagina * elementos_pagina; i <= ultimo_elemento ; i++) {
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


