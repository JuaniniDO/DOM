//Seleccionar elementos desde js
let nav = document.querySelector("nav");
//console.log(nav);

//Seleccionar elemento con la clase
let active = document.querySelector(".active");
//console.log(active);

//Seleccionar elementos con una misma etiqueta
let headersAndParagraphs = document.querySelectorAll("p, h1");
//console.log(headersAndParagraphs[0].innerText); //se accede al elemento con los corchetes y a su contenido con .innerText elimando todas las etiquetas a su paso

//Acciendo a elementos hijos mediante .children[numHijo]
//console.log(nav.children[0].children[0].children[0]);

///console.log(nav.firstElementChild.firstElementChild.firstElementChild.parentNode.nextElementSibling.firstElementChild.firstChild.parentNode);

//console.log(headersAndParagraphs[2]);
//console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling.nextElementSibling);

let main = document.querySelector("#first");
//console.log(main);

//console.log(nav.firstElementChild.lastElementChild.firstElementChild.firstChild);
//console.log(nav.firstElementChild.childElementCount);
//console.log(nav.firstElementChild.children.length);
//console.log(nav.firstElementChild.childNodes);
//console.log(nav.firstElementChild.firstChild.nodeValue);
//Nombre del Nodo en mayusculas
//console.log(nav.firstElementChild.nodeName);

console.log(nav.firstElementChild.firstChild.nextSibling.nextSibling.previousSibling);

/* //Elemento padre
document.body.parentNode
//Total de elementos hijos
document.body.children.length
document.body.childElementCount
//Primer elemento hijo
document.body.children[0]
//Primer y ultimo nodos hijos
document.body.firstElementChild
document.body.lastElementChild
//Siguiente y anterior hermano
document.body.nextElementSibling
document.body.previousElementSibling */
