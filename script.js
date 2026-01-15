const list=document.getElementById('list');if(list){const fragment=document.createDocumentFragment();for(let i=0;i<5000;i++){const li=document.createElement('li');li.textContent=`Elemento optimizado número ${i}`;fragment.appendChild(li)}
list.appendChild(fragment)}
function runHeavy(){console.time('Calculo');let result=0;for(let i=0;i<1000000;i++){result+=Math.sqrt(i)}
console.timeEnd('Calculo');alert('Proceso terminado con éxito.')}