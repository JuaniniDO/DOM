let cajaVerde = document.querySelectorAll(".dragtarget"); //DRAG
let cajaAzul = document.querySelector("#droptarget"); //DROP
let carro = document.querySelector("#carro");

/* cajaVerde.addEventListener("click", () => {
  console.log("divVerde");
}); */
cajaAzul.addEventListener("click", () => {
  console.log("divAzul");
});
let text = "";
let itemArrastrado = null;
cajaVerde.forEach((caja) => {
  caja.addEventListener("dragstart", (e) => {
    itemArrastrado = e.target;
    text = e.target.textContent;
    //console.log(itemArrastrado)
  });
}); //coleccion iterable
//Elemento DRAG (arrastrado) con los 3 eventos que se disparan
/* cajaVerde.addEventListener("dragstart", (e) => {
  console.log("eventoDragStart");
  itemArrastrado = e.target;
  console.log(itemArrastrado);
});
cajaVerde.addEventListener("drag", (e) => {
  console.log("Drag");
});
cajaVerde.addEventListener("dragend", (e) => {
  console.log("dragEnd");
}); */

//Elemento DROP(soltar) con los 3 eventos que puede recibir a otro que sea arrastrado
cajaAzul.addEventListener("dragenter", (e) => {
  e.preventDefault();
  console.log("dragEnter");
});
cajaAzul.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("dragOver");
});
cajaAzul.addEventListener("drop", (e) => {
  //console.log(e.target);
  //console.log("drop");
  console.log(itemArrastrado);
  let span = document.createElement("span");
  span.innerHTML = itemArrastrado.textContent;
  carro.appendChild(span);
  itemArrastrado.innerHTML = "";
  e.target.textContent = text
});
cajaAzul.addEventListener("dragleave", (e) => {
  console.log("dragLeave");
});
