//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    let element = document.querySelector('.content');

    //Quitarle las clases de animacion que ya tiene
    element.classList.remove("animate__animated", "animate__fadeInDown");


    //Agregar clases para animar su salida fadeOutUp
    element.classList.add("animate__animated", "animate__fadeOutUp");

    setTimeout(function(){
      location.href = "/index.html";

    },600)

  return false;
  });
});

