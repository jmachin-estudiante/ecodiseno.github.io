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


    // Puse el parseInt para que lo pille pq es str
    let pagina = parseInt(anterior.getAttribute('value')) + 1;

    if (pagina < 0)
        pagina = 0;

    anterior.setAttribute('value', pagina - 1);
    
    if (pagina == 0)
        anterior.setAttribute('disabled', 'disabled');
    else
        anterior.removeAttribute('disabled');

    if (pagina > total_paginas)
        pagina = total_paginas;

    const ultimo_elemento = ((pagina +1) * elementos_pagina) -1;

    if (pagina == total_paginas)
        siguiente.setAttribute('disabled', 'disabled');
    else
        siguiente.removeAttribute('disabled');

    for (let i = pagina * elementos_pagina; i <= ultimo_elemento ; i++) {
        const li = document.createElement('li');
        li.textContent = `Elemento optimizado número ${i}`; 
        fragment.appendChild(li);
    }

    list.appendChild(fragment);
}



// 2. Función pesada optimizada y bajo demanda
// Ejecuta el cálculo pesado solo cuando el navegador está en un intervalo de inactividad,
// evitando bloquear la interfaz y reduciendo el consumo energético.
// requestIdleCallback permite que esta operación se realice sin afectar la fluidez de la página.
function runHeavy() {
    requestIdleCallback(() => {
        console.time('Calculo');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += Math.sqrt(i);
        }
        console.timeEnd('Calculo');
        alert('Proceso terminado con éxito.');
    });
}

