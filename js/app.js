let box1 = document.querySelector("div");
console.log(box1);
let box2 = box1.nextElementSibling;
console.log(box2);
let box3 = box2.nextElementSibling;
console.log(box3);

box1.classList.add("dark");
box1.classList.remove("dark");
box2.classList.add("dark");
console.log(box3.classList.contains("dark"));

box3.classList.toggle("dark");
box3.classList.toggle("dark");
box3.classList.toggle("dark");

//Atributo dataset
let number = box3.dataset.boxNumber;
console.log(number);
console.log(box3.dataset.month);
/* document.body.firstElementChild.innerHTML = "<h1>Wow!</h1>"

document.querySelector("section") //para seleccionar un elemento
console.log(document.querySelector("section").innerHTML); //cambia html interno
console.log(document.querySelector("section").outerHTML); //cambia html desde el propio elemento
document.querySelector("section").outerHTML = "<h1>Wow!</h1>"  */

//Modify content
/* document.body.insertAdjacentHTML("afterbegin", "<nav>navigation</nav>");
document.querySelector("nav").insertAdjacentHTML("beforebegin", "<h1>Main Header</h1>");
document.querySelector("nav").insertAdjacentHTML("beforeend", '<a href="https://www.google.com/">Ir a google</a>');
document.querySelector("nav").insertAdjacentHTML("afterend", "<p> This is a paragraph </p>"); */

//Insertar, borrar y reemplazar nodos en el arbol
let header = document.createElement("h1");
header.append("Hello World!");
document.body.append(header);
header.prepend("!");
document.querySelector("h1").firstChild.before("!!");
let paragraph = document.createElement("p");
paragraph.textContent = "Writting a paragraph";
document.body.append(paragraph);
document.querySelector("h1").replaceWith(paragraph);
//paragraph.remove()
//document.body.remove()
paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.padding = "2em";
paragraph.setAttribute("class","light");
paragraph.setAttribute("class","main");
console.log(paragraph.getAttribute("class"));
paragraph.classList.add("light");
console.log(paragraph.style.cssText);
