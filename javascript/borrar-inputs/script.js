



const clean = () => {
 document.querySelectorAll(".inputText").forEach((input) => {
     input.value = null;
 }) 
}



  
  function ejemplo() {
    alert("Esto es un evento de click");
  }
  
  function onBoxClick() {
    console.log("La caja fue cliqueada");
  }
  
  function onBoxEnter() {
    console.log("El mouse entró a la caja");
  
    document.querySelector(".box").classList.add("over")
  }
  
  function onBoxOut() {
    console.log("El mouse salió de la caja");
  
    document.querySelector(".box").classList.remove("over")
  }
  
  function onBoxMove() {
    console.log("EL MOUSE SE MOVIOOOOOOO");
  }