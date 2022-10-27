/* document.body.addEventListener("click", () => {
  alert("This is the body");
});
document.querySelector("section").addEventListener("click", () => {
  alert("This is the section");
});
document.querySelector("div").addEventListener("click", () => {
  alert("This is the div");
}); */
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  console.log(event.key);
  console.log(event.code);
  if (event.key == "Enter") {
    alert("Hello World!")
  }
});
