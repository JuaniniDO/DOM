/* //Comenzar proyecto con javascript, carga todo menos la hoja de estilo
document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".fa-solid");
  //console.log(icon);
  let header = document.querySelector("h1");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("tour");
    icon.classList.toggle("fa-sun")
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("spin")
    header.classList.toggle("smack")
    if (header.textContent == "Good Morning!" ) {
        //if (header.textContent.includes("Good Morning!") {
            header.textContent = "Good Night!"
        console.log(header.textContent);    
    } else {
        header.textContent = "Good Morning!"
    }
    
  });
});
 */

document.addEventListener("DOMContentLoaded", () => {
    let icon = document.querySelector(".fa-solid");
    //console.log(icon);
    let header = document.querySelector("h1");
    icon.addEventListener("click", () => {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");
      document.body.classList.toggle("tour");
      icon.classList.toggle("fa-person-running") 
      icon.classList.toggle("fa-dumbbell") 
      icon.classList.toggle("spin")
      header.classList.toggle("smack")
      if (header.textContent == "No pain, no gain!!" ) {
          //if (header.textContent.includes("Good Morning!") {
              header.textContent = "You can!"
          console.log(header.textContent);    
      } else {
          header.textContent = "No pain, no gain!!"
      }
      
    });
  })