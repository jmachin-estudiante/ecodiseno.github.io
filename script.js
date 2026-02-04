const list=document.getElementById('list');if(list){actualizar_pagina(0)}
function paginacion(e){console.log(e);const pagina=e.target.value;console.log("hola")}
function actualizar_pagina(pagina){const fragment=document.createDocumentFragment();const elementos_pagina=10;const total_paginas=500;const anterior=document.getElementById('btna');const siguiente=document.getElementById('btns');list.innerHTML='';if(pagina<0)
pagina=0;if(pagina>total_paginas)
pagina=total_paginas;anterior.setAttribute('value',pagina-1);if(pagina==0)
anterior.setAttribute('disabled','disabled');else anterior.removeAttribute('disabled');siguiente.setAttribute('value',pagina+1);if(pagina==total_paginas)
siguiente.setAttribute('disabled','disabled');else siguiente.removeAttribute('disabled');const ultimo_elemento=((pagina+1)*elementos_pagina)-1;for(let i=pagina*elementos_pagina;i<=ultimo_elemento;i++){let li=document.createElement('li');li.classList.add("font-bold");li.textContent=`Elemento optimizado número ${i}`;fragment.appendChild(li)}
list.appendChild(fragment)}
document.getElementById('btna').addEventListener("click",function(e){actualizar_pagina(parseInt(e.target.value))});document.getElementById('btns').addEventListener("click",function(e){actualizar_pagina(parseInt(e.target.value))});function runHeavy(){requestIdleCallback(()=>{console.time('Calculo');let result=0;for(let i=0;i<1000000;i++){result+=Math.sqrt(i)}
console.timeEnd('Calculo');alert('Proceso terminado con éxito.')})}